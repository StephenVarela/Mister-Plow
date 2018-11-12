class LonLatDataTypeChange < ActiveRecord::Migration[5.2]
  def change
    change_column :residences, :lat, :float
    change_column :residences, :lat, :float
  end
end
