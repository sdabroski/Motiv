import { Link } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import { newRoute } from '../../util/routes_api_util';
import { withRouter } from 'react-router-dom';
import MapIndexItemContainer from '../../components/map_index_item/map_index_item_container';


class Route extends React.Component {

    componentDidMount(){
        this.props.fetchRoute(this.props.routeToFetch)
    }
    
    // componentDidUpdate(){
    //     this.props.fetchRoute(this.props.route.id)
    // }

    deleteAndRedirect(){
        this.props.deleteRoute(this.props.route.id)
        // .then(this.props.history.push(`/routes`))
        .then(
            setTimeout(() => { this.props.history.push(`/routes`) }, 1000)
        )
    }
    
    render() {
        if(!this.props.route || !this.props.waypoints) return null
        let sortedWaypoints = this.props.waypoints.sort((a, b) => a.order - b.order)

        let workoutDisplayType;
        if(this.props.route.workout_type === "WALKING") workoutDisplayType = "Run";
        if(this.props.route.workout_type === "BICYCLING") workoutDisplayType = "Cycle";

        const workoutTypeCapitalized = this.props.route.workout_type.charAt(0).toUpperCase() + this.props.route.workout_type.slice(1).toLowerCase();

        
        //iterate over routes, for each filter the waypoints, then pass those to mapindexcontainer
        //map outside here, actualy specify that it's the MapIndexItemContainer, pass in the necessary prop
        //save all those to a variable, and render the variable below.
        
        
        
        
        return (
            <> 
                <div id="rs-top-container">
                    <div id="route-title">{this.props.route.name}</div>
                    <div id="rs-top-nav">
                        <div className="navbar-button" id="rs-delete-button">
                            <button 
                                onClick={() => this.deleteAndRedirect()} 
                                >
                                Delete
                            </button>
                        </div>
                        <Link
                            to="/routes"
                            className="navbar-button"
                            id="rs-save-button">
                            Save
                        </Link>
                    </div>
                </div>
                
            
                
                <div id="route-show-bottom-container">
                    <div id="route-map-holder">
                        <MapIndexItemContainer
                            waypoints={sortedWaypoints}
                            type={this.props.route.type}
                            distance={this.props.route.distance}
                            time={this.props.route.time}
                            workout_type={this.props.route.workout_type}
                            which_page="show"
                        />
                    </div>
                    <div id="rs-super-data-container">
                        <div className="rs-map-data-container">
                            <div className="rs-map-data-item">
                                {`${(this.props.route.distance / 1609.344).toFixed(2)} mi`}
                            </div>
                            <div className="rs-map-data-label">
                                Distance
                            </div>
                        </div>

                        <div className="rs-map-data-container">
                            <div className="rs-map-data-item">
                                {`${(this.props.route.time / 60).toFixed(0)} mins`}
                            </div>
                            <div className="rs-map-data-label">
                                Est. Moving Time
                            </div>
                        </div>

                        <div className="rs-map-data-container">
                            <div className="rs-map-data-item">
                                {workoutDisplayType}
                            </div>
                            <div className="rs-map-data-label">
                                Route Type
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Route;