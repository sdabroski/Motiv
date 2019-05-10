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

            let workoutDisplayType;
            if (route.workout_type === "WALKING") workoutDisplayType = "Run";
            if (route.workout_type === "BICYCLING") workoutDisplayType = "Cycle";
            

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
                    <div className="map-index-data-container">
                        <Link to={`/routes/${route.id}`} className="index-route-name">{route.name}</Link>

                        <div id="index-sub-data-container">
                            <div className="ri-map-data-container">
                                <div className="ri-map-data-item">
                                    {`${(route.distance / 1609.344).toFixed(2)} mi`}
                                </div>
                                <div className="rs-map-data-label">
                                    Distance
                            </div>
                            </div>

                            <div className="ri-map-data-container">
                                <div className="ri-map-data-item">
                                    {`${(route.time / 60).toFixed(0)} mins`}
                                </div>
                                <div className="rs-map-data-label">
                                    Est. Moving Time
                                </div>
                            </div>
                        </div>

                        <div className="ri2-map-data-container">
                            <div className="ri2-map-data-label">
                                Route Type
                            </div>
                            <div className="rs-map-data-item">
                                {workoutDisplayType}
                            </div>
                        </div>
                    </div>

                </div>
            )
        })


        return (
            <>
                <div id="ri-header-container">
                    <div id="ri-header-left">
                        <div id="ri-page-label">My Routes</div>
                        <Link to="/routes/new" id="ri-new-route-link">
                            Create New Route
                        </Link>
                    </div>
                    <div id="ri-header-right">
                        <div id="header-paragraph">
                            Learn more about sharing<br/> and
                            exporting routes to a<br/> variety of devices.
                        </div>
                        <img src="https://bit.ly/2Vc570D"/>
                    </div>

                </div>
                <div className="map-index-super-container">
                    {routesToRender}
                </div>
            </>
        )
    }
}

export default Route;