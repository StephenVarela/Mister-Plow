class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :street_name
      t.string :city_name
      t.string :postal_code
      t.string :country
      t.string :email
      t.string :primary_contact_number
      t.string :secondary_contact_number
      t.integer :e_wallet
      t.timestamps
    end
  end
end
