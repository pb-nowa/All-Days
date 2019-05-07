# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Shoe.destroy_all
Item.destroy_all

demo = User.create!(first_name: "demo", last_name: "user", email: "demouser@demouser.com", password: "demouser")

shoe_1 = Shoe.create!(style: "Runner", name: "Men's Wool Runners", material: "Wool", gender: "mens", price: 95)
shoe_2 = Shoe.create!(style: "Lounger", name: "Men's Wool Loungers", material: "Wool", gender: "mens", price: 95)
shoe_3 = Shoe.create!(style: "Topper", name: "Men's Tree Toppers", material: "Tree", gender: "mens", price: 155)
shoe_4 = Shoe.create!(style: "Skipper", name: "Men's Tree Skippers", material: "Tree", gender: "mens", price: 95)

shoe_5 = Shoe.create!(style: "Runner", name: "Women's Wool Runners", material: "Wool", gender: "womens", price: 95)
shoe_6 = Shoe.create!(style: "Topper", name: "Women's Tree Toppers", material: "Tree", gender: "womens", price: 115)
shoe_7 = Shoe.create!(style: "Breezer", name: "Women's Tree Breezers", material: "Tree", gender: "womens", price: 95)
shoe_8 = Shoe.create!(style: "Skipper", name: "Women's Tree Skippers", material: "Tree", gender: "womens", price: 95)

item_1 = Item.create!(shoe_id: shoe_1.id, color: "Black", size: 8)
    file_1 = open('https://s3-us-west-1.amazonaws.com/alldays-seeds/item_1.png')
    item_1.photo.attach(io: file_1, filename: 'item_1.jpg')
item_2 = Item.create!(shoe_id: shoe_1.id, color: "Black", size: 9)
    item_2.photo.attach(item_1.photo.blob)

item_3 = Item.create!(shoe_id: shoe_1.id, color: "Grey", size: 8)
    file_3 = open('https://s3-us-west-1.amazonaws.com/alldays-seeds/item_3.png')
    item_3.photo.attach(io: file_3, filename: 'item_3.jpg')
item_4 = Item.create!(shoe_id: shoe_1.id, color: "Grey", size: 9)
    item_4.photo.attach(item_3.photo.blob)

item_5 = Item.create!(shoe_id: shoe_2.id, color: "Black", size: 8)
    file_5 = open('https://s3-us-west-1.amazonaws.com/alldays-seeds/item_5.png')
    item_5.photo.attach(io: file_5, filename: 'item_5.jpg')
item_6 = Item.create!(shoe_id: shoe_2.id, color: "Black", size: 9)
    item_6.photo.attach(item_5.photo.blob)

item_7 = Item.create!(shoe_id: shoe_2.id, color: "Grey", size: 8)
    file_7 = open('https://s3-us-west-1.amazonaws.com/alldays-seeds/item_7.png')
    item_7.photo.attach(io: file_7, filename: 'item_7.jpg')
item_8 = Item.create!(shoe_id: shoe_2.id, color: "Grey", size: 9)
    item_8.photo.attach(item_7.photo.blob)

item_9 = Item.create!(shoe_id: shoe_3.id, color: "Brown", size: 8)
    file_9 = open('https://s3-us-west-1.amazonaws.com/alldays-seeds/item_9.png')
    item_9.photo.attach(io: file_9, filename: 'item_9.jpg')
item_10 = Item.create!(shoe_id: shoe_3.id, color: "Brown", size: 9)
    item_10.photo.attach(item_9.photo.blob)

item_11 = Item.create!(shoe_id: shoe_3.id, color: "Red", size: 8)
    file_11 = open('https://s3-us-west-1.amazonaws.com/alldays-seeds/item_11.png')
    item_11.photo.attach(io: file_11, filename: 'item_11.jpg')
item_12 = Item.create!(shoe_id: shoe_3.id, color: "Red", size: 9)
    item_12.photo.attach(item_11.photo.blob)

item_13 = Item.create!(shoe_id: shoe_4.id, color: "Brown", size: 8)
    file_13 = open('https://s3-us-west-1.amazonaws.com/alldays-seeds/item_13.png')
    item_13.photo.attach(io: file_13, filename: 'item_13.jpg')
item_14 = Item.create!(shoe_id: shoe_4.id, color: "Brown", size: 9)
    item_14.photo.attach(item_13.photo.blob)

item_15 = Item.create!(shoe_id: shoe_4.id, color: "Blue", size: 8)
    file_15 = open('https://s3-us-west-1.amazonaws.com/alldays-seeds/item_15.png')
    item_15.photo.attach(io: file_15, filename: 'item_15.jpg')
item_16 = Item.create!(shoe_id: shoe_4.id, color: "Blue", size: 9)
    item_16.photo.attach(item_15.photo.blob)


item_17 = Item.create!(shoe_id: shoe_5.id, color: "Black", size: 8)
    item_17.photo.attach(item_1.photo.blob)
item_18 = Item.create!(shoe_id: shoe_5.id, color: "Black", size: 9)
    item_18.photo.attach(item_1.photo.blob)
item_19 = Item.create!(shoe_id: shoe_5.id, color: "Grey", size: 8)
    item_19.photo.attach(item_1.photo.blob)
item_20 = Item.create!(shoe_id: shoe_5.id, color: "Grey", size: 9)
    item_20.photo.attach(item_1.photo.blob)

item_21 = Item.create!(shoe_id: shoe_6.id, color: "Black", size: 8)
    item_21.photo.attach(item_1.photo.blob)
item_22 = Item.create!(shoe_id: shoe_6.id, color: "Black", size: 9)
    item_22.photo.attach(item_1.photo.blob)
item_23 = Item.create!(shoe_id: shoe_6.id, color: "Grey", size: 8)
    item_23.photo.attach(item_1.photo.blob)
item_24 = Item.create!(shoe_id: shoe_6.id, color: "Grey", size: 9)
    item_24.photo.attach(item_1.photo.blob)

item_25 = Item.create!(shoe_id: shoe_7.id, color: "Brown", size: 8)
    item_25.photo.attach(item_1.photo.blob)
item_26 = Item.create!(shoe_id: shoe_7.id, color: "Brown", size: 9)
    item_26.photo.attach(item_1.photo.blob)
item_27 = Item.create!(shoe_id: shoe_7.id, color: "Beige", size: 8)
    item_27.photo.attach(item_1.photo.blob)
item_28 = Item.create!(shoe_id: shoe_7.id, color: "Beige", size: 9)
    item_28.photo.attach(item_1.photo.blob)

item_29 = Item.create!(shoe_id: shoe_8.id, color: "Brown", size: 8)
    item_29.photo.attach(item_1.photo.blob)
item_30 = Item.create!(shoe_id: shoe_8.id, color: "Brown", size: 9)
    item_30.photo.attach(item_1.photo.blob)
item_31 = Item.create!(shoe_id: shoe_8.id, color: "White", size: 8)
    item_31.photo.attach(item_1.photo.blob)
item_32 = Item.create!(shoe_id: shoe_8.id, color: "White", size: 9)
    item_32.photo.attach(item_1.photo.blob)


