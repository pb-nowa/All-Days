class Item < ApplicationRecord
    has_many :cart_items
    belongs_to :shoe
end
