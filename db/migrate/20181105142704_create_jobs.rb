class CreateJobs < ActiveRecord::Migration[5.2]
  def change
    create_table :jobs do |t|
      t.integer :shoveler_id
      t.integer :residence_id
      t.integer :job_price
      t.text :instructions
      t.datetime :scheduled_time
      t.integer :premium_rush
      t.integer :premium_peak_hours
      t.datetime :check_in
      t.datetime :check_out
      t.integer :rating
      t.text :comments
      t.boolean :confirmation
      t.timestamps
    end
  end
end
