class Item < ApplicationRecord
    has_many :cart_items
    belongs_to :shoe

    def self.find_by_gender(search_id)
        query = <<-SQL 
            SELECT items.id, color, style, shoes.name, material, gender, price
            FROM items
            JOIN shoes on items.shoe_id = shoes.id
            WHERE shoes.gender = \'#{search_id}\'
        SQL
        return ActiveRecord::Base.connection.execute(query).to_a
    end

end
