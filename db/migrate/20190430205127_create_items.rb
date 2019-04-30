class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.integer :shoe_id, null: false
      t.string :color, null: false
      t.string :size, null: false

      t.timestamps
    end
  end
end
