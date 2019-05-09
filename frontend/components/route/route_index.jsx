import { Link } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import { newRoute } from '../../util/routes_api_util';
import { withRouter } from 'react-router-dom';
import MapIndexItemContainer from '../../components/map_index_item/map_index_item_container';


class Route extends React.Component {

    componentDidMount() {
        this.props.fetchAllRoutes()
    }

    render() {
        if (!this.props.routes || !this.props.waypoints) return null

        let filtered;
        let sorted;
        let workoutTypeCapitalized;

        //iterate over routes, for each filter the waypoints, then pass those to mapindexcontainer
        //map outside here, actualy specify that it's the MapIndexItemContainer, pass in the necessary prop
        //save all those to a variable, and render the variable below.

        const routesToRender = this.props.routes.map(route => {
            filtered = this.props.waypoints.filter(waypoint => waypoint.route_id === route.id)
            sorted = filtered.sort((a, b) => a.order - b.order)
            workoutTypeCapitalized = route.workout_type.charAt(0).toUpperCase() + route.workout_type.slice(1).toLowerCase();

            return (
                <div className="map-index-container" id={route.id}>
                    <MapIndexItemContainer 
                        key={route.id}
                        className="index-map-itself"
                        waypoints={sorted}
                        type={route.type}
                        distance={route.distance}
                        time={route.time}
                        workout_type={route.workout_type}
                        workoutTypeCapitalized={workoutTypeCapitalized}
                        which_page="index"
                    />
                </div>
            )
        })


        return (
           <div className="map-index-super-container">
               {routesToRender}
           </div>
        )
    }
}

export default Route;