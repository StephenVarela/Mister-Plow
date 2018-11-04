class CreateResidences < ActiveRecord::Migration[5.2]
  def change
    create_table :residences do |t|
      t.integer :home_owner_id
      t.string :street_name
      t.string :city_name
      t.string :postal_code
      t.string :country
      t.boolean :is_home_address
      t.timestamps
    end
  end
end
