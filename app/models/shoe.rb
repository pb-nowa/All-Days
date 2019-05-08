class Shoe < ApplicationRecord
    has_many :items
    has_many_attached :photos
end
