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
            waypoints: [],
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

        this.addMarker(latLng, map);
        
        map.panTo(latLng);

        let updatedWaypoints = this.state.waypoints.slice(0);
        updatedWaypoints.push({ lat: lat, lng: lng });
        this.setState({waypoints: updatedWaypoints});
    }
    
    addMarker(latLng, map) {
        let marker = new google.maps.Marker({
            position: latLng,
            map: map,
            icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
            draggable: true
        });

        marker.addListener('dragend', (e) => {
            console.log("this worked!?")
        });

        // map.panTo(latLng);
        // this.props.updateWaypoints({lat: lat, lng: lng})
    }

    routeStats(route) {
        debugger
        let totalDistance = 0;
        let totalTime = 0;
        for (let i = 0; i < route.legs.length; i++) {
            totalDistance += route.legs[i].distance.value;
            totalTime += route.legs[i].duration.value;
        }

        if(this.state.time !== totalTime || this.state.distance !== totalDistance){
            this.setState({time: totalTime })
            this.setState({distance: totalDistance })
        }
    }

    equalityCheck(arr1, arr2){
        if(arr1.length !== arr2.length) return false;

        for(let i = 0; i< arr1.length; i++){
            if (arr1[i].lat !== arr2[i].lat || arr1[i].lng !== arr2[i].lng) return false;
        }
        return true;
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

        directionsDisplay.addListener('directions_changed', (e) => {
            let a = directionsDisplay.getDirections();
            let newWaypoints = [];
            a.routes[0].legs.forEach((leg, i) => {
                if(i === 0){
                    newWaypoints.push({lat: leg.start_location.lat(), lng: leg.start_location.lng()})
                    newWaypoints.push({lat: leg.end_location.lat(), lng: leg.end_location.lng()})
                } else {
                    newWaypoints.push({ lat: leg.end_location.lat(), lng: leg.end_location.lng() })
                }
            })
            let equalto = this.equalityCheck;
            let that = this
            if (!this.equalityCheck(this.state.waypoints, newWaypoints)){
                this.setState(
                    { waypoints: newWaypoints }, 
                    () => {
                        this.routeStats(a.routes[0])
                    })
            }
        })

      
        if(this.state.waypoints.length === 1) {
            this.addMarker(this.state.waypoints[0], this.map)

        } else if(this.state.waypoints.length > 1) {
            //request to be passed to directions service
            let rawWaypoints = this.state.waypoints.slice(1, this.state.waypoints.length - 1);
            let formattedWaypoints = [];

            rawWaypoints.forEach(waypoint => {
                formattedWaypoints.push({location: waypoint})
                this.addMarker(waypoint, this.map)
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
                <div>{`Distance:${this.state.distance}`}</div>
                <br/>
                <div>{`Time:${this.state.time}`}</div>
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