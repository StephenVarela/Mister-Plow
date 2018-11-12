class LonDataTypeChange < ActiveRecord::Migration[5.2]
  def change
    change_column :residences, :lon, :float
  end
end
