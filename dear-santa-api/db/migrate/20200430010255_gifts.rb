class Gifts < ActiveRecord::Migration[6.0]
  def change
    create_table :gifts do |t|
      t.string :title
      t.string :priority
      t.string :category
      t.string :due
      t.string :amount
      t.string :description

      t.timestamps
    end
  end
end
