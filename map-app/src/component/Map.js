import React, { Component } from 'react';
import './Map.css';

const initLocation = {lat: 21.030708, lng: 105.852405};

class Map extends Component {
    componentDidMount() {
        // Connect the initMap() function within this class to the global window context,
        // so Google Maps can invoke it
        window.initMap = this.initMap;
        // Asynchronously load the Google Maps script, passing in the callback reference
        loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyCoxcb6Blia9PD7RWVuvsndj5R_Xzf2hCY&callback=initMap')
    }

    initMap = () => {
        let mapDiv = document.getElementById("map");
        const map = new window.google.maps.Map(mapDiv, {
            center: initLocation,
            zoom: 13
        });
        const infoWindow = new window.google.maps.InfoWindow();
        this.props.initMap(map, infoWindow);
    }

    render() {
        return (
            <div className="map" id="map"></div>
        )
    }
}

function loadJS(src) {
    var ref = window.document.getElementsByTagName("script")[0];
    var script = window.document.createElement("script");
    script.src = src;
    script.async = true;
    ref.parentNode.insertBefore(script, ref);
}

export default Map;