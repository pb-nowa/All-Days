class ChangeItemsSizeToInteger < ActiveRecord::Migration[5.2]
  def change
    remove_column :items, :size
    add_column :items, :size, :integer, null: false
  end
end
