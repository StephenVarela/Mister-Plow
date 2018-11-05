class JobPrice < ActiveRecord::Migration[5.2]
  def change
    rename_column :jobs, :job_price, :price
  end
end
