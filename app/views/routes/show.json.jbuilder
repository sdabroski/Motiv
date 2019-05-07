json.route do
    json.extract! @route, :id, :time, :distance, :description, :name, :type, :user_id
end

json.waypoints do
    @route.waypoints.each do |waypoint|
        json.set! waypoint.id do
            json.extract! waypoint, :id, :route_id, :order, :lat, :lng
        end
    end
end