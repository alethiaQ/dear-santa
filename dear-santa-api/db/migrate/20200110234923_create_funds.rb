class CreateFunds < ActiveRecord::Migration[6.0]
  def change
    create_table :funds do |t|
      t.string :amount

      t.timestamps
    end
  end
end
