import { Link } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';


class Map extends React.Component{


    constructor(props){
        super(props)
        this.locs = [];
    }

    placeMarker(latLng, map) {
        let marker = new google.maps.Marker({
            position: latLng,
            map: map
        });
        debugger
        map.panTo(latLng);
        this.locs.push(marker.position);


    }
    
    componentDidMount() {

        const mapDiv = ReactDOM.findDOMNode(this.refs.map)
        // set the map to show SF

        //use an array of these google maps LatLng objects in the waypoints[] key of the request object. A) Generate Array of LatLng objects corresponding to map clicks. 
        //upon click, array[0] is set to origin, array[-1] is set to destination, all the others get iterated through in order.
        let haight = new google.maps.LatLng(37.7699298, -122.4469157);
        let oceanBeach = new google.maps.LatLng(37.7683909618184, -122.51089453697205);
        let appAcademy = new google.maps.LatLng(37.802566, -122.405186);
        let testWaypoint = {location: appAcademy}
        //let testWaypoint2 = { location: {lat: 37.802566, lng: -122.405186}} this way works too :)

        const mapOptions = {
            center: haight,
            zoom: 14
        };


        this.map = new google.maps.Map(mapDiv, mapOptions);

        

        let directionsDisplay = new google.maps.DirectionsRenderer({
            draggable: true,
            map: this.map
        });
        // directionsDisplay.setMap(this.map)

        let directionsService = new google.maps.DirectionsService();

        let drawingManager = new google.maps.drawing.DrawingManager({
            drawingMode: google.maps.drawing.OverlayType.MARKER,
            drawingControl: true,
            drawingControlOptions: {
                position: google.maps.ControlPosition.TOP_CENTER,
                drawingModes: ['marker']
            },
            markerOptions: { 
                icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png', 
                draggable: true
            }
        });

        drawingManager.setMap(this.map);

        let request = {
            origin: haight,
            destination: oceanBeach,
            optimizeWaypoints: false,
            waypoints: [testWaypoint],
            travelMode: google.maps.TravelMode["BICYCLING"]
        };

        directionsService.route(request, function (response, status) {
            if (status == 'OK') {
                directionsDisplay.setDirections(response);
            }
        });

        // this.map.addListener('click', this.addLatLng)

        this.map.addListener('click', (e) => {
            this.placeMarker(e.latLng, this.map);
        });

 

 

        // let beachMarker = new google.maps.Marker({
        //     position: { lat: 37.7758, lng: -122.435 },
        //     map: this.map,

            // icon: window.motiv
        // });
    }

  
    
    render(){
        return (
            <div id="map" ref="map"/>
        );
    }


}


export default Map;



