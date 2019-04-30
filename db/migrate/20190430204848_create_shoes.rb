class CreateShoes < ActiveRecord::Migration[5.2]
  def change
    create_table :shoes do |t|
      t.string :style, null: false
      t.string :name, null: false
      t.string :material, null: false
      t.string :gender, null: false
      t.integer :price, null: false

      t.timestamps
    end


  end
end
