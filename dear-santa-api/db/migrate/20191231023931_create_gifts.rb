class CreateGifts < ActiveRecord::Migration[6.0]
  def change
    create_table :gifts do |t|
      t.string :name
      t.string :price
      t.string :url
      t.string :img
      t.string :category

      t.timestamps
    end
  end
end
