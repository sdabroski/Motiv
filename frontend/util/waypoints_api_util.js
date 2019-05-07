export const newWaypoint = (waypoint) => (
    $.ajax({
        method: "POST",
        url: "/api/waypoints",
        data: { waypoint }
    })
);