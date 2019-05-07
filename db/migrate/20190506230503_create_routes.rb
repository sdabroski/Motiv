class CreateRoutes < ActiveRecord::Migration[5.2]
  def change
    create_table :routes do |t|
      t.integer :user_id, null: false
      t.integer :time
      t.float :distance
      t.text :description
      t.string :name
      t.string :type

      t.timestamps
    end
    add_index :routes, :user_id
  end
end
