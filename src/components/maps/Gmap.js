import * as React from "react";
import {useEffect, useMemo, useRef, useState} from "react";
import {GoogleMap, Marker, MarkerClusterer, useJsApiLoader,} from "@react-google-maps/api";
import {getGeocode, getLatLng,} from "use-places-autocomplete";
import mapStyles from "./mapstyles";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Grid} from "@mui/material";
import {apiGetIncident} from "../../api/APICalls";


function Gmap(props) {
    const {isLoaded} = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyAvmc8J1ekNy512EDD3lAyfEFmQZUP_U7g", // doesnt work --> process.env.MY_ENVIRONMENT_VARIABLE
    });


    const [rowsFromApi, setRowsFromApi] = useState([]);
    const [rowsFromUniApi, setRowsUniFromApi] = useState([]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    let [latitude, setLatitude] = React.useState(-33.7560119);
    let [longitude, setLongitude] = React.useState(150.6038367);
    let [address, setAddress] = React.useState('');
    //store  clicked locations in state
    const [places, setPlaces] = React.useState([]);
    //const save the prev place for calculating route
    const [directions, setDirections] = useState({});

    //store previous place
    const prevPlace = useRef();

    //path polyline ...
    const [paths, setPaths] = useState([]);
    let rowsArray = ["1600 Pennsylvania Avenue NW, Washington, DC 20500", "Austin, TX", "San Diego", "Austin, TX", "New York"]
    //Get Data from backend
    const fetchIncidentAPI = () => {
        apiGetIncident()
            .then((r) => {
                setRowsFromApi(r.data);

                return r.data
            }).then(
            (r) => {
                //
                //  let arraysVal = getUniqueListBy(r, 'location')
                //
                //  for (let i = 0; i < rowsArray.length; i++) {
                //     setPlaceFunction2(rowsArray[i]).then((event) => {
                //         handleGetGeo(event)
                //     })
                // }
            })
            .catch((error) => console.log(error));
    };

    useEffect(fetchIncidentAPI, []);

    // useEffect(() => {
    //     let rowsArray = ["1600 Pennsylvania Avenue NW, Washington, DC 20500", "Austin, TX", "San Diego", "Austin, TX", "New York"]
    //
    //     async function fetchData(searchAddress) {
    //         // You can await here
    //         const results = await getGeocode({address: searchAddress});
    //         const {lat, lng} = await getLatLng(results[0]);
    //         handleGetGeo({lat, lng})
    //     }
    //
    //     fetchData("1600 Pennsylvania Avenue NW, Washington, DC 20500");
    //
    // }, []);

    async function getTheLocation(searchAddress) {
        const results = await getGeocode({address: searchAddress});
        const {lat, lng} = await getLatLng(results[0]);
        return {lat, lng}
    }

    // async function setPlaceFunction2(location) {
    //     return await getTheLocation(location)
    // }

    function getUniqueListBy(arr, key) {
        return [...new Map(arr.map(item => [item[key], item])).values()]
    }

    const handleGetGeo = React.useCallback((event) => {
        setPlaces([
            ...places,
            {
                lat: event.lat,
                lng: event.lng,
            }]);

    });

    // const testFunction = () => {
    //     let service
    //     try {
    //          service = new window.google.maps.Geocoder();
    //         service.geocode({address: "1600 Pennsylvania Avenue NW, Washington, DC 20500"}, function (results, status) {
    //             if (status == 'OK') {
    //                 console.log(results[0].geometry.location)
    //             } else {
    //                 alert('Geocode was not successful for the following reason: ' + status);
    //             }
    //         });
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }





    //Austin -30.2672° N, 97.7431
    //-> 30.2826922,-97.7740298 - start in+-
    // g location
    //Memo state - help manage map refresh
    const center = useMemo(
        () => ({
            lat: 30.282692,
            lng: -97.77402,
        }),
        []
    );

    //Memo - default map options
    const options = useMemo(
        () => ({
            styles: mapStyles,
            disableDefaultUI: true,
            visible: true,
            zIndex: 1,
            zoomControl: true,
            mapTypeControl: true,
            mapTypeId: "terrain",
            // mapTypeControlOptions: {
            //     style: window.google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            //     mapTypeIds: ["roadmap", "terrain", "satelite"],
            // },
            scaleControl: true,
            streetViewControl: false,
            rotateControl: true,
            fullscreenControl: true,
            terrain: true,
            heading: 90,
            tilt: 45,
            altitude: 1000,
        }),
        []
    );


//track last location
    useEffect(() => {
        prevPlace.current = places[places.length - 1];
    });


    //directions display control
    const [directionsAvail, setDirectionsAvail] = useState(false);

    //store for Info WWindows, if implemented
    const [focusedPlace, setFocusedPlace] = React.useState(null);

    //sae map to ref, help with refresh
    const mapRef = React.useRef();

    //Use Google Maps onload feature to store mapRef
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    //container style for the map,
    //100% of container
    const mapContainerStyle = {
        height: "80vh",
        width: "100%",
    };


    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        color: "#000000",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
    };

    //function to store places, clicked - store the lat long
    //and record ...previous places  - useCall back to help with map refresh (state changes)
    const handleRender = React.useCallback((event) => {
        setPlaces([
            ...places,
            {
                lat: event.lat,
                lng: event.lng
            },
        ]);
    });

    //remove place on Right Click ---> doesnt work
    const handleRenderOff = React.useCallback((event) => {
        setPlaces([
            ...places,
            places.filter((place) => {
                return place.lat !== event.latLng.lat();
            }),
        ]);
    });

    const getRoute = (currentLatLong = {}) => {
        //if there are only 1 place or if the place and prev place is the same,
        //there is no need for a route. need to add additional logic
        if (places.length < 1) return;
        if (currentLatLong === prevPlace.current) return;

        //For google routes if enabled/rendered
        const service = new window.google.maps.DirectionsService();


        //target of missile
        let currLNG = currentLatLong.lng;
        let currLAT = currentLatLong.lat;

        //Need to render the last place clicked, normally handled in Main map, not on marker click
        setPlaces([
            ...places,
            {
                lat: prevPlace.current.lat,
                lng: prevPlace.current.lng,
            },
        ]);


        //create a path to the target using Polyline
        setPaths([
            {lat: prevPlace.current.lat, lng: prevPlace.current.lng},
            {
                lat: currLAT,
                lng: currLNG,
            },
        ]);


        //routing if enabled to draw driving route
        service.route(
            {
                origin: prevPlace.current,
                destination: currentLatLong,
                travelMode: window.google.maps.TravelMode.DRIVING,
            },
            (result, status) => {
                if (status === "OK" && result) {
                    setDirections(result);
                    setDirectionsAvail(true);
                }
            }
        );
    };

    //Maps loaded, called onLoad
    const toastyLoading = () => {
        toast.success("SIR Maps has been loaded successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            className: "dark",
            bodyClassName: "dark",
            theme: "dark",
        });
    };

     const  handleLoadToastAndMaps =   (event) => {
        toastyLoading();
        onMapLoad(event);

        for (let i = 0; i < rowsArray.length; i++) {
            getTheLocation(rowsArray[i]).then( (placeConvertedToLat) => {
              setPlaces([
                  ...places,
                  placeConvertedToLat,
              ]);
                console.log(placeConvertedToLat);
            } )
        }
    }

    //set the elavation
    const elevatorService = (latLng) => {
        const elevator = new window.google.maps.ElevationService();
        return elevator.getElevationForLocations({
            locations: [latLng],
        });
    };

    return isLoaded ? (
        <Grid
            container
            spacing={0}
            columns={12}
            rows={10}
            sx={{margin: 0, padding: 0}}
        >
            <Grid item xs={12}>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    icon={false}
                    theme="dark"
                />

                <ToastContainer/>
                <GoogleMap
                    id="marker-example"
                    mapContainerStyle={mapContainerStyle}
                    zoom={5}
                    center={center}
                    options={options}

                    tilt={45}
                    onLoad={handleLoadToastAndMaps}
                >
                    <MarkerClusterer>

                        {(clusterer) => places.map((place) => {
                            return (
                                <>
                                    <Marker
                                        key={place.lat}
                                        position={{lat: place.lat, lng: place.lng}}
                                        animation={2}
                                        onClick={() => {
                                            setFocusedPlace(place);
                                            getRoute(place);

                                        }}
                                        icon={{
                                            url: "./firstaid.png",
                                            scaledSize: new window.google.maps.Size(35, 35),
                                            origin: new window.google.maps.Point(0, 0),
                                            anchor: new window.google.maps.Point(5, 5),
                                        }}
                                        //draggable={true}
                                        //onDragEnd={handleRender}
                                        onDblClick={handleRenderOff}
                                        clusterer={clusterer}
                                    />
                                </>
                            );
                        })}
                        {}
                        {/*//Render modal for specific place*/}
                        {/*{focusedPlace ? (*/}
                        {/*    <InfoWindow*/}
                        {/*        position={{lat: focusedPlace.lat, lng: focusedPlace.lng}}*/}
                        {/*        onCloseClick={() => setFocusedPlace(null)}*/}
                        {/*    >*/}
                        {/*        <div className="infoWindow">*/}
                        {/*            <h5>hello</h5>*/}

                        {/*        </div>*/}
                        {/*    </InfoWindow>*/}
                        {/*) : null}*/}
                    </MarkerClusterer>
                </GoogleMap>
            </Grid>
        </Grid>
    ) : (
        <>Loading Map...</>
    );
}

export default Gmap;
