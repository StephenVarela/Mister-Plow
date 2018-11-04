class CreateHomeOwners < ActiveRecord::Migration[5.2]
  def change
    create_table :home_owners do |t|
      t.integer :user_id
      t.timestamps
    end
  end
end
