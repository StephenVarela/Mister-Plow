class CreateDriveways < ActiveRecord::Migration[5.2]
  def change
    create_table :driveways do |t|
      t.integer :residence_id
      t.string :location
      t.integer :size
      t.text :instructions
      t.timestamps
    end
  end
end
