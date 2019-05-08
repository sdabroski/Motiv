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
    
    render() {
        if(!this.props.route) return null

        let sortedWaypoints = this.props.waypoints.sort((a, b) => a.order - b.order)
        return (
            <> 
                <h1>Show page</h1>
                <h1>{this.props.route.id}</h1>
                <br/>
                <br/>
                <MapIndexItemContainer
                    waypoints={sortedWaypoints}
                    type={this.props.route.type}
                    distance={this.props.route.distance}
                    time={this.props.route.time}
                />
            </>
        )
    }


}

export default Route;