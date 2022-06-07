import * as React from "react";
import {useEffect, useMemo, useRef, useState} from "react";
import {GoogleMap, InfoWindow, Marker, MarkerClusterer, useJsApiLoader,} from "@react-google-maps/api";
import mapStyles from "./mapstyles";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Grid} from "@mui/material";
import {apiGetIncident} from "../../api/APICalls";
import './gmap.css'

function Gmap() {
    const {isLoaded} = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyAvmc8J1ekNy512EDD3lAyfEFmQZUP_U7g",
    });

    const [rowsFromApi, setRowsFromApi] = useState([]);
    //store  clicked locations in state
    const [places, setPlaces] = React.useState([{lat: 30.282692, lng: -97.77402}]);
    //const save the prev place for calculating route
    const [mapLoaded, setMapLoaded] = useState(false);


    const [currentPopUp, setCurrentPopUp] = useState([])

    //path polyline ...
    const [paths, setPaths] = useState([]);


    //Get Data from backend
    const fetchIncidentAPI = () => {
        apiGetIncident()
            .then((r) => {
                setRowsFromApi(r.data);
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
        // const results = await getGeocode({address: searchAddress});
        // const {lat, lng} = await getLatLng(results[0]);
        // return {lat, lng}
    }

    // async function setPlaceFunction2(location) {
    //     return await getTheLocation(location)
    // }



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
//     useEffect(() => {
//         prevPlace.current = places[places.length - 1];
//     });


    //directions display control

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


    //function to store places, clicked - store the lat long
    //and record ...previous places  - useCall back to help with map refresh (state changes)
    const handleRender = React.useCallback(() => {
        let latLngArray = [];
        // let latLngArray = [{lat: 38.8976633, lng: -77.0365739},
        //     {lat: 30.267153, lng: -97.7430608},
        //     {lat: 30.267153, lng: -97.7430608},
        //     {lat: 32.715738, lng: -117.1610838},
        //     {lat: 40.7127753, lng: -74.0059728}]

        for (let i = 0; i < rowsFromApi.length / 2; i++) {
            if (rowsFromApi[i].lat !== null && rowsFromApi[i].lng !== null) {
                latLngArray.push({lat: Number(rowsFromApi[i].lat), lng: Number(rowsFromApi[i].lng)})
            }


        }

        setPlaces(latLngArray)

    },);

    //remove place on Right Click ---> doesnt work
    const handleRenderOff = React.useCallback((event) => {
        setPlaces([
            ...places,
            places.filter((place) => {
                return place.lat !== event.latLng.lat();
            }),
        ]);
    });


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

    const handleLoadToastAndMaps = (event) => {
        toastyLoading();
        onMapLoad(event);
        setMapLoaded(true)
    }
 const styleOption = {
background:'#000000',
         height: 29,
         width: 29,
         anchor: [0, 0],
         textSize: 0.001
     }


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
                    //onClick={handleRender}
                    tilt={45}
                    onLoad={handleLoadToastAndMaps}
                >
                    <MarkerClusterer key={"cluster"}
                    >
                        {
                            (clusterer) => rowsFromApi.map((place, index) => {
                                return (
                                    <>
                                        <Marker
                                            key={place.lat}
                                            position={{lat: place.lat, lng: place.lng}}
                                            animation={2}
                                            onClick={() => {
                                                setFocusedPlace(place);
                                            }}
                                            icon={{
                                                url: '/img_1.png',
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

                    </MarkerClusterer>

                    {focusedPlace ?

                        (
                            <InfoWindow
                                position={{lat: Number(focusedPlace.lat), lng: Number(focusedPlace.lng)}}
                                onCloseClick={() => setFocusedPlace(null)}
                                key={Math.random()}
                                content=" "
                            >
                                <div className="infoWindow">
                                    <h5>{focusedPlace.eventType} &nbsp; &nbsp;</h5>
                                    <h6>Location:</h6>
                                    {
                                        focusedPlace.location
                                    }&nbsp; &nbsp;
                                    <br />   <br />
                                    <h6>Description:</h6>
                                    <p>    {
                                        focusedPlace.description
                                    }&nbsp; &nbsp; &nbsp; &nbsp;</p>

                                </div>
                            </InfoWindow>
                        ) : null}

                </GoogleMap>
            </Grid>
        </Grid>
    ) : (
        <>Loading Map...</>
    );
}

export default Gmap;
