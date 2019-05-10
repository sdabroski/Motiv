export const newRoute = (route) => (
    $.ajax({
        method: "POST",
        url: "/api/routes",
        data: {route}
    })
);

export const fetchRoute = (id) => (
    $.ajax({
        method: "GET",
        url: `/api/routes/${id}`
    })
)

export const fetchAllRoutes = (id) => (
    $.ajax({
        method: "GET",
        url: `/api/routes`
    })
)

export const deleteRoute = (id) => (
    $.ajax({
        method: "DELETE",
        url: `/api/routes/${id}`
    })
)

    