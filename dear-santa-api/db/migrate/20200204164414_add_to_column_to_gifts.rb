class AddToColumnToGifts < ActiveRecord::Migration[6.0]
  def change
    add_column :gifts, :to, :string
  end
end
