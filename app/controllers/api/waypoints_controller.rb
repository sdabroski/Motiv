class Api::WaypointsController < ApplicationController

    def create
        @waypoint = Waypoint.new(waypoint_params)
        
        if @waypoint.save 
            render json: @waypoint
        else
            render json: @waypoint.errors.full_messages, status: 422
        end
    end


    private

    def waypoint_params
        params.require(:waypoint).permit(
            :route_id,
            :order,
            :lat,
            :lng
        )
    end

end

