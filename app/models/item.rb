class Item < ApplicationRecord
    has_many :cart_items
    belongs_to :shoe

    # def womens_shoes
    #     query = <<-SQL 
    #         SELECT color DISTINCT
    #         FROM items
    #         WHERE gender LIKE women

    #     SQL
    #     ActiveRecord::Base.connection.execute(query)
    # end

end
