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
    

    const stefan = User.create(first_name: "Stefan", last_name: "Dabroski", 
        email:"stefan@wave.com", password: "password", birthday: "1991-09-12", gender: "male", country: "US", city: "Seattle", weight: 195)

    const route1 = Route.create
end