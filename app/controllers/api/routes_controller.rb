class Api::RoutesController < ApplicationController

    def create
        @route = Route.new(route_params)
        @route.user_id = current_user.id
        if @route.save!
            render json: @route
        else
            render json: @route.errors.full_messages, status: 422
        end
    end

    def show
        @route = Route.find(params[:id])#.includes(:waypoints)
        render "/routes/show"
    end

    def index
        @routes = current_user.routes.includes(:waypoints)
    end

    private

    def route_params
        params.require(:route).permit(
            :user_id,
            :time,
            :distance,
            :description,
            :name,
            :type
        )
    end

end
