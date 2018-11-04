class CreateShovelers < ActiveRecord::Migration[5.2]
  def change
    create_table :shovelers do |t|

      t.timestamps
    end
  end
end
