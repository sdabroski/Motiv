class Route < ApplicationRecord
    belongs_to :user

    has_many :waypoints, :dependent => :delete_all
end