import * as React from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import {
    Circle,
    GoogleMap,
    InfoWindow,
    Marker,
    Polyline,
    useJsApiLoader,
} from "@react-google-maps/api";
import mapStyles from "./mapstyles";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Grid, Box, Modal, Button, Typography } from "@mui/material";

function Gmap(props) {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyAvmc8J1ekNy512EDD3lAyfEFmQZUP_U7g", // doesnt work --> process.env.MY_ENVIRONMENT_VARIABLE
    });

    const url = {
        model:
            "https://storage.googleapis.com/tfjs-models/tfjs/sentiment_cnn_v1/model.json",
        metadata:
            "https://storage.googleapis.com/tfjs-models/tfjs/sentiment_cnn_v1/metadata.json",
    };

    const OOV_INDEX = 2;

    const [metadata, setMetadata] = useState();
    const [model, setModel] = useState();
    const [testScore, setScore] = useState("");
    const [trimedText, setTrim] = useState("");
    const [seqText, setSeq] = useState("");
    const [padText, setPad] = useState("");
    const [inputText, setInput] = useState("");

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


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
        }),
        []
    );

    //store  clicked locations in state
    const [places, setPlaces] = React.useState([]);
    //const save the prev place for calculating route
    const [directions, setDirections] = useState({});

    //store previous place
    const prevPlace = useRef();

    //path polyline ...
    const [paths, setPaths] = useState([]);

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
                    lat: event.latLng.lat(),
                    lng: event.latLng.lng(),
                },
            ]);
    });

    useEffect(() => {});
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
                range: props.toggle
                    ? props.currentArtRange
                    : props.currentInfantryRange,
                currentArt: props.toggle ? props.currentArt : props.currentInfantry,
                friendly: props.toggle
                    ? props.currentFriend
                    : props.currentInfantryFriend,
                rpm: props.toggle ? props.currentRPM : props.currentInfantryRPM,
                facts: props.toggle ? props.currentFacts : props.currentInfantryFacts,
                src: props.toggle ? "./icons8-army-62.png" : "./halo1.gif",
            },
        ]);


        //create a path to the target using Polyline
        setPaths([
            { lat: prevPlace.current.lat, lng: prevPlace.current.lng },
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
                    props.haversine_distance(prevPlace.current, currentLatLong);
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
            icon: "🚀",
            className: "dark",
            bodyClassName: "dark",
            theme: "dark",
        });
    };

    const handleLoadToastAndMaps = (event) => {
        toastyLoading();
        onMapLoad(event);
    };
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
            sx={{ margin: 0, padding: 0 }}
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

                <ToastContainer />
                <h2 className="tacticalMapsLogo">
                    {props.message}{" "}
                    {props.message.length > 0 ? "WAY TO GO!" : "System Active"}
                    <MyLocationIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
                </h2>
                <GoogleMap
                    id="marker-example"
                    mapContainerStyle={mapContainerStyle}
                    zoom={8}
                    center={center}
                    options={options}
                    onClick={handleRender}
                    tilt={45}
                    onLoad={handleLoadToastAndMaps}
                >

                    {paths.map(() => {
                        return (
                            <Polyline
                                path={paths}
                                options={{
                                    strokeColor: "#409249",
                                    strokeOpacity: 0.8,
                                    strokeWeight: 2,
                                    fillColor: "rgba(105,206,243,0.42)",
                                    fillOpacity: 0.35,
                                    clickable: false,
                                    draggable: false,
                                    editable: false,
                                    visible: true,
                                    radius: 30000,
                                }}
                            />
                        );
                    })}
                    {places.map((place) => {
                        return (
                            <>
                                <Marker
                                    key={place}
                                    position={{ lat: place.lat, lng: place.lng }}
                                    icon={{
                                        url: place.src,
                                        scaledSize: new window.google.maps.Size(50, 50),
                                        origin: new window.google.maps.Point(0, 0),
                                        anchor: new window.google.maps.Point(25, 25),
                                    }}
                                    animation={2}
                                    onClick={() => {
                                        setFocusedPlace(place);
                                        getRoute(place);

                                    }}
                                    //draggable={true}
                                    //onDragEnd={handleRender}
                                    onDblClick={handleRenderOff}
                                />
                            </>
                        );
                    })}
                    //Render modal for specific place
                    {focusedPlace ? (
                        <InfoWindow
                            position={{ lat: focusedPlace.lat, lng: focusedPlace.lng }}
                            onCloseClick={() => setFocusedPlace(null)}
                        >
                            <div className="infoWindow">
                                <h5>{focusedPlace.currentArt}</h5>
                                <p>Max Range: {focusedPlace.range}</p>
                                <p>RPM: {focusedPlace.rpm}</p>
                                <p>Facts: {focusedPlace.facts}</p>
                                <p>
                                    TensorFlow AI Score: <b>{testScore.toFixed(5)}</b> calculated.
                                </p>
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
