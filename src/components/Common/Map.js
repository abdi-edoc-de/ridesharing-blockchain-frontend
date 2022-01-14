import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import React, { useRef, useEffect, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
mapboxgl.accessToken = 'pk.eyJ1IjoiYWJkaS1kZWQiLCJhIjoiY2t5ZTJlcWo2MHIyaDJvdXIwaHRtbDV2NyJ9.8n1z1S6S9gzYCCg9YCZtHQ';

const Map = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(38.7578);
    const [lat, setLat] = useState(8.9806);
    const [zoom, setZoom] = useState(14);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
        });
        });

    return (
        <div ref={mapContainer} className="map-container">
        </div>
    )
}

export default Map


/*
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Locate the user</title>
    <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no">
    <link href="https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css" rel="stylesheet">
    <script src="https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.js"></script>
    <script src="https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.js"></script>
    <style>
        body {
            margin: 0;
            padding: 0;
        }

        #map {
            position: absolute;
            top: 0;
            bottom: 0;
            width: 100%;
        }
    </style>
</head>

<body>
    <div id="map"></div>
    <script>
        // TO MAKE THE MAP APPEAR YOU MUST
        // ADD YOUR ACCESS TOKEN FROM
        // https://account.mapbox.com
        mapboxgl.accessToken = 'pk.eyJ1IjoiYWJkaS1kZWQiLCJhIjoiY2t5ZTJlcWo2MHIyaDJvdXIwaHRtbDV2NyJ9.8n1z1S6S9gzYCCg9YCZtHQ';
        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [-96, 37.8], // starting position
            zoom: 3 // starting zoom
        });

        // Add geolocate control to the map.
        map.addControl(
            new mapboxgl.GeolocateControl({
                positionOptions: {
                    enableHighAccuracy: true
                },
                // When active the map will receive updates to the device's location as it changes.
                trackUserLocation: true,
                // Draw an arrow next to the location dot to indicate which direction the device is heading.
                showUserHeading: true
            })
        );
        map.on('click', (e) => {
            const cord = [e.lngLat.lng, e.lngLat.lat]
            const marker = new mapboxgl.Marker()
                .setLngLat([cord[0], cord[1]])
                .addTo(map);
            console.log(cord)
        })
        map.addControl(
new MapboxDirections({
accessToken: mapboxgl.accessToken
}),
'top-left'
);
    </script>


</body>

</html>
*/