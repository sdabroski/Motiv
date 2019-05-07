class CreateWaypoints < ActiveRecord::Migration[5.2]
  def change
    create_table :waypoints do |t|
      t.integer :route_id, null: false
      t.integer :order, null: false
      t.string :lat, null: false
      t.string :lng, null: false

      t.timestamps
    end
    add_index :waypoints, :route_id
  end
end
