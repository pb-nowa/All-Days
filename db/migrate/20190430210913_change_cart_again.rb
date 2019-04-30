class ChangeCartAgain < ActiveRecord::Migration[5.2]
  def change
    remove_column :cart_items, :cart 
    add_column :cart_items, :cart_id, :string, null: false
    add_column :cart_items, :item_id, :integer, null: false 
    add_index :cart_items, :cart_id
  end
end
