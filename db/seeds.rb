# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
    Waypoint.destroy_all
    Route.destroy_all
    User.destroy_all
    

    stefan = User.create(
        first_name: "Stefan", 
        last_name: "Dabroski", 
        email:"stefan@wave.com", 
        password: "password" 
    )

   route1 = Route.create(
        user_id: stefan.id,
        time: 2561,
        distance: 6193,
        name: "Fun Run",
        workout_type: "WALKING"
    )

    route2 = Route.create(
        user_id: stefan.id,
        time: 2830.625,
        distance: 39343,
        name: "Bike Around SF",
        workout_type: "BICYCLING"
    )

    route3 = Route.create(
        user_id: stefan.id,
        time: 2685,
        distance: 25101,
        name: "So crazy there's not a bike path to SF",
        workout_type: "BICYCLING"
    )

    route4 = Route.create(
        user_id: stefan.id,
        time: 9496.686390532544,
        distance: 18844,
        name: "Long run to Golden Gate",
        workout_type: "WALKING"
    )

    

    

    waypoint1 = Waypoint.create(
        route_id: route1.id,
        order: 0,
        lat: 37.7984063,
        lng: -122.47457550000001
    )

    waypoint2 = Waypoint.create(
        route_id: route1.id,
        order: 1,
        lat: 37.7498054,
        lng: -122.4653697
    )
    waypoint3 = Waypoint.create(
        route_id: route2.id,
        order: 0,
        lat: 37.7024893,
        lng: -122.4347421
    )
    waypoint4 = Waypoint.create(
        route_id: route2.id,
        order: 1,
        lat: 37.7793272,
        lng: -122.47277220000001
    )
    waypoint5 = Waypoint.create(
        route_id: route2.id,
        order: 2,
        lat: 37.796377,
        lng: -122.4147587
    )
    waypoint6 = Waypoint.create(
        route_id: route2.id,
        order: 3,
        lat: 37.7041878,
        lng: -122.41884219999997
    )
    waypoint7 = Waypoint.create(
        route_id: route3.id,
        order: 0,
        lat: 37.7806038,
        lng: -122.21660559999998
    )
    waypoint8 = Waypoint.create(
        route_id: route3.id,
        order: 1,
        lat: 37.7576732,
        lng: -122.43514959999999
    )
    waypoint9 = Waypoint.create(
        route_id: route4.id,
        order: 0,
        lat: 37.7012243,
        lng: -122.49582450000003
    )
    waypoint10 = Waypoint.create(
        route_id: route4.id,
        order: 1,
        lat: 37.7799962,
        lng: -122.5094871
    )
    waypoint11 = Waypoint.create(
        route_id: route4.id,
        order: 2,
        lat: 37.80223950000001,
        lng: -122.4484233
    )


end