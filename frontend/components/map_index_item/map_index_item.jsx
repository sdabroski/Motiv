import { Link } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import { newRoute } from '../../util/routes_api_util';
import { withRouter } from 'react-router-dom';


class MapIndexItem extends React.Component {
    componentDidMount(){
        this.createMap()
    }

    componentDidUpdate(){
        this.createMap()
    }

    createMap() {
        // const mapDiv = ReactDOM.findDOMNode(this.refs.map)
        const mapDiv = ReactDOM.findDOMNode(this.refs.map)
        let haight = new google.maps.LatLng(37.7699298, -122.4469157);

        //define original map orientation
        const mapOptions = {
            center: haight,
            zoom: 14
        };

        //create map
        this.map = new google.maps.Map(mapDiv, mapOptions);

        //setup directions display and directions routing
        let directionsDisplay = new google.maps.DirectionsRenderer({
            draggable: false,
            map: this.map
        });
        // directionsDisplay.setMap(this.map) | alternate syntax
        let directionsService = new google.maps.DirectionsService();

            //request to be passed to directions service
            let rawWaypoints = this.props.waypoints.slice(1, this.props.waypoints.length - 1);
            let formattedWaypoints = [];

            rawWaypoints.forEach(waypoint => {
                formattedWaypoints.push({ location: {lat: waypoint.lat, lng: waypoint.lng} })
                // this.addMarker(waypoint, this.map)
            })
            let request = {
                origin: {lat: this.props.waypoints[0].lat, lng: this.props.waypoints[0].lng},
                destination: 
                    {
                        lat: this.props.waypoints[this.props.waypoints.length - 1].lat, 
                        lng: this.props.waypoints[this.props.waypoints.length - 1].lng, 
                    },
                optimizeWaypoints: false,
                waypoints: formattedWaypoints,
                travelMode: google.maps.TravelMode["BICYCLING"]
            };


            directionsService.route(request, (response, status) => {
                if (status == 'OK') {
                    directionsDisplay.setDirections(response);
                }
            });
        }


    

    render() {
        return (
            <div>
                <div id="map" ref="map" />
                <br />
                <br />
                <div>{`Distance:${this.props.distance}`}</div>
                <br />
                <div>{`Time:${this.props.time}`}</div>
            </div>
        );
    }



    //end of component
}

export default MapIndexItem;



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