# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demo = User.create!(first_name: "demo", last_name: "user", email: "demouser@demouser.com", password: "demouser")

shoe_1 = Shoe.create!(style: "Runner", name: "Men's Wool Runners", material: "Wool", gender: "mens", price: 95)
shoe_2 = Shoe.create!(style: "Lounger", name: "Men's Wool Loungers", material: "Wool", gender: "mens", price: 95)
shoe_3 = Shoe.create!(style: "Topper", name: "Men's Tree Toppers", material: "Tree", gender: "mens", price: 155)
shoe_4 = Shoe.create!(style: "Skipper", name: "Men's Tree Skippers", material: "Tree", gender: "mens", price: 95)

shoe_5 = Shoe.create!(style: "Runner", name: "Women's Wool Runners", material: "Wool", gender: "womens", price: 95)
shoe_6 = Shoe.create!(style: "Topper", name: "Women's Tree Toppers", material: "Tree", gender: "womens", price: 115)
shoe_7 = Shoe.create!(style: "Breezer", name: "Women's Tree Breezers", material: "Tree", gender: "womens", price: 95)
shoe_8 = Shoe.create!(style: "Skipper", name: "Women's Tree Skippers", material: "Tree", gender: "womens", price: 95)

item_1 = Item.create!(shoe_id: 1, color: "Black", size: 8)
item_2 = Item.create!(shoe_id: 1, color: "Black", size: 9)
item_3 = Item.create!(shoe_id: 1, color: "Grey", size: 8)
item_4 = Item.create!(shoe_id: 1, color: "Grey", size: 9)

item_5 = Item.create!(shoe_id: 2, color: "Black", size: 8)
item_6 = Item.create!(shoe_id: 2, color: "Black", size: 9)
item_7 = Item.create!(shoe_id: 2, color: "Grey", size: 8)
item_8 = Item.create!(shoe_id: 2, color: "Grey", size: 9)

item_9 = Item.create!(shoe_id: 3, color: "Brown", size: 8)
item_10 = Item.create!(shoe_id: 3, color: "Brown", size: 9)
item_11 = Item.create!(shoe_id: 3, color: "Beige", size: 8)
item_12 = Item.create!(shoe_id: 3, color: "Beige", size: 9)

item_13 = Item.create!(shoe_id: 4, color: "Brown", size: 8)
item_14 = Item.create!(shoe_id: 4, color: "Brown", size: 9)
item_15 = Item.create!(shoe_id: 4, color: "White", size: 8)
item_16 = Item.create!(shoe_id: 4, color: "White", size: 9)


item_17 = Item.create!(shoe_id: 5, color: "Black", size: 8)
item_18 = Item.create!(shoe_id: 5, color: "Black", size: 9)
item_19 = Item.create!(shoe_id: 5, color: "Grey", size: 8)
item_20 = Item.create!(shoe_id: 5, color: "Grey", size: 9)

item_21 = Item.create!(shoe_id: 6, color: "Black", size: 8)
item_22 = Item.create!(shoe_id: 6, color: "Black", size: 9)
item_23 = Item.create!(shoe_id: 6, color: "Grey", size: 8)
item_24 = Item.create!(shoe_id: 6, color: "Grey", size: 9)

item_25 = Item.create!(shoe_id: 7, color: "Brown", size: 8)
item_26 = Item.create!(shoe_id: 7, color: "Brown", size: 9)
item_27 = Item.create!(shoe_id: 7, color: "Beige", size: 8)
item_28 = Item.create!(shoe_id: 7, color: "Beige", size: 9)

item_29 = Item.create!(shoe_id: 8, color: "Brown", size: 8)
item_30 = Item.create!(shoe_id: 8, color: "Brown", size: 9)
item_31 = Item.create!(shoe_id: 8, color: "White", size: 8)
item_32 = Item.create!(shoe_id: 8, color: "White", size: 9)


