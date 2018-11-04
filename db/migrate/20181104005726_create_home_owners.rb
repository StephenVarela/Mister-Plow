class CreateHomeOwners < ActiveRecord::Migration[5.2]
  def change
    create_table :home_owners do |t|

      t.timestamps
    end
  end
end
