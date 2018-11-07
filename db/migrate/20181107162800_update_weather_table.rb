class UpdateWeatherTable < ActiveRecord::Migration[5.2]
  def change
    add_column :weathers, :city_name, :text
    add_column :weathers, :forecast, :text
  end
end
