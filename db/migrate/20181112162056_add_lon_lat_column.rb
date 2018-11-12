class AddLonLatColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :residences, :lon, :integer
    add_column :residences, :lat, :integer
  end
end
