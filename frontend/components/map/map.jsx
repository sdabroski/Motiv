import { Link } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';


class Map extends React.Component{


    constructor(props){
        super(props)
        this.state = {
            elevation: 0,
            time: 0,
            distance: 0,
            waypoints: []
        }
        // this.placeMarker = this.placeMarker.bind(this);
    }

    componentDidUpdate() {
        this.createMap();
    }

    componentDidMount() {
        this.createMap();
    }

    addWaypoint(latLng, map) {
        let lat = latLng.lat();
        let lng = latLng.lng();
        
        map.panTo(latLng);

        let updatedWaypoints = this.state.waypoints.slice(0);
        updatedWaypoints.push({ lat: lat, lng: lng });
        this.setState({waypoints: updatedWaypoints});
    }
    
    addMarker(latLng, map) {
        let marker = new google.maps.Marker({
            position: latLng,
            map: map,
            icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
        });
        // map.panTo(latLng);
        // this.props.updateWaypoints({lat: lat, lng: lng})
    }

    routeStats(route) {
        var totalDist = 0;
        var totalTime = 0;
        var myroute = result.routes[0];
        for (i = 0; i < myroute.legs.length; i++) {
            totalDist += myroute.legs[i].distance.value;
            totalTime += myroute.legs[i].duration.value;
        }
        totalDist = totalDist / 1000

        this.setState({time: totalTime })
        this.setState({distance: totalDistance })
        
    }

    createMap() {
        const mapDiv = ReactDOM.findDOMNode(this.refs.map)

        //presets for testing
        let haight = new google.maps.LatLng(37.7699298, -122.4469157);
        // let oceanBeach = new google.maps.LatLng(37.7683909618184, -122.51089453697205);
        // let appAcademy = new google.maps.LatLng(37.802566, -122.405186);
        // let testWaypoint = { location: appAcademy }
        //let testWaypoint2 = { location: {lat: 37.802566, lng: -122.405186}} this way works too :)

        //define original map orientation
        const mapOptions = {
            center: haight,
            zoom: 14
        };

        //create map
        this.map = new google.maps.Map(mapDiv, mapOptions);

        //setup directions display and directions routing
        let directionsDisplay = new google.maps.DirectionsRenderer({
            draggable: true,
            map: this.map
        });
        // directionsDisplay.setMap(this.map) | alternate syntax
        let directionsService = new google.maps.DirectionsService();

        //setup distanceMatrixService
        let service = new google.maps.DistanceMatrixService();

        //listener for clicks on map
        this.map.addListener('click', (e) => {
            this.addWaypoint(e.latLng, this.map);
        });

      
        if(this.state.waypoints.length === 1) {
            this.addMarker(this.state.waypoints[0], this.map)

        } else if(this.state.waypoints.length > 1) {
            //request to be passed to directions service
            let rawWaypoints = this.state.waypoints.slice(1, this.state.waypoints.length - 1);
            let formattedWaypoints = [];

            rawWaypoints.forEach(waypoint => {
                formattedWaypoints.push({location: waypoint})
            })

            let request = {
                origin: this.state.waypoints[0],
                destination: this.state.waypoints[this.state.waypoints.length - 1],
                optimizeWaypoints: false,
                waypoints: formattedWaypoints,
                travelMode: google.maps.TravelMode["BICYCLING"]
            };
    
            directionsService.route(request, (response, status) => {
                if (status == 'OK') {
                    directionsDisplay.setDirections(response);
                    debugger
                    this.routeStats(response.routes[0]);
                }
            });

        }

      
    }
    
    render(){
        return (
            <div>
                <div id="map" ref="map"/>
                <br/>
                <br/>
                <div></div>
            </div>
        );
    }

//end of component
}


export default Map;



  //no longer need drawing manager because of click listener
        // let drawingManager = new google.maps.drawing.DrawingManager({
        //     drawingMode: google.maps.drawing.OverlayType.MARKER,
        //     drawingControl: true,
        //     drawingControlOptions: {
        //         position: google.maps.ControlPosition.TOP_CENTER,
        //         drawingModes: ['marker']
        //     },
        //     markerOptions: { 
        //         icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png', 
        //         draggable: true
        //     }
        // });
        // drawingManager.setMap(this.map);