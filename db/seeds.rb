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
