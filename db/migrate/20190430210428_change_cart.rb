class ChangeCart < ActiveRecord::Migration[5.2]
  def change
    remove_column :carts_items, :cart 
    add_column :cart_items, :cart_id, null: false
    add_column :cart_items, :item_id, null: false 
    add_index :cart_items, :item_id, null: false

  end
end
