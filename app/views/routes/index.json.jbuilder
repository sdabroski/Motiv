json.routes do
    @routes.each do |route|
        json.set! route.id do
            json.extract! route, :id, :time, :distance, :description, :name, :workout_type, :user_id
        end
    end
end

json.waypoints do
    @routes.each do |route|
        route.waypoints.each do |waypoint|
            json.set! waypoint.id do
                json.extract! waypoint, :id, :route_id, :order, :lat, :lng
            end
        end
    end
end