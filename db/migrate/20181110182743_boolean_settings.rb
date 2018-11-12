class BooleanSettings < ActiveRecord::Migration[5.2]
  def change
    change_column :jobs, :premium_rush, 'boolean USING CAST(premium_rush AS boolean)'
    change_column :jobs, :premium_peak_hours, 'boolean USING CAST(premium_peak_hours AS boolean)'

    add_column :jobs, :accepted, :boolean
  end
end
