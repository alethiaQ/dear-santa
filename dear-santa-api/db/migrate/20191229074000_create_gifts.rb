class CreateGifts < ActiveRecord::Migration[6.0]
  def change
    create_table :gifts do |t|
      t.string :category
      t.string :name
      t.string :price
      t.string :url
      t.string :img
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
