import { Link } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';


class Map extends React.Component{
    
    componentDidMount() {

        const map = ReactDOM.findDOMNode(this.refs.map)
        // set the map to show SF
        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 }, // this is SF
            zoom: 13
        };

       
        this.map = new google.maps.Map(map, mapOptions);
        this.directionsDisplay = new google.maps.DirectionsRenderer();

        var beachMarker = new google.maps.Marker({
            position: { lat: 37.7758, lng: -122.435 },
            map: this.map,
            // icon: window.motiv
        });
    }
    
    
    render(){
        return (
            <div id="map" ref="map"/>
        );
    }


}


export default Map;



