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
shoe_3 = Shoe.create!(style: "Topper", name: "Men's Tree Toppers", material: "Tree", gender: "mens", price: 115)
shoe_4 = Shoe.create!(style: "Skipper", name: "Men's Tree Skippers", material: "Tree", gender: "mens", price: 95)

shoe_9 = Shoe.create!(style: "Runner", name: "Men's Tree Runners", material: "Tree", gender: "mens", price: 95)
shoe_11 = Shoe.create!(style: "Lounger", name: "Men's Tree Loungers", material: "Tree", gender: "mens", price: 95)

shoe_5 = Shoe.create!(style: "Runner", name: "Women's Wool Runners", material: "Wool", gender: "womens", price: 95)
shoe_6 = Shoe.create!(style: "Topper", name: "Women's Tree Toppers", material: "Tree", gender: "womens", price: 115)
shoe_7 = Shoe.create!(style: "Lounger", name: "Women's Wool Loungers", material: "Wool", gender: "womens", price: 95)
shoe_8 = Shoe.create!(style: "Skipper", name: "Women's Tree Skippers", material: "Tree", gender: "womens", price: 95)

shoe_10 = Shoe.create!(style: "Runner", name: "Women's Tree Runners", material: "Tree", gender: "womens", price: 95)
shoe_12 = Shoe.create!(style: "Lounger", name: "Women's Tree Loungers", material: "Tree", gender: "womens", price: 95)

item_1 = Item.create!(shoe_id: shoe_1.id, color: "Black", size: 8)
    file_1 = open('https://s3-us-west-1.amazonaws.com/alldays-seeds/item_1.png')
    item_1.photo.attach(io: file_1, filename: 'item_1.jpg')
# item_2 = Item.create!(shoe_id: shoe_1.id, color: "Black", size: 9)
#     item_2.photo.attach(item_1.photo.blob)

item_3 = Item.create!(shoe_id: shoe_1.id, color: "Grey", size: 8)
    file_3 = open('https://s3-us-west-1.amazonaws.com/alldays-seeds/item_3.png')
    item_3.photo.attach(io: file_3, filename: 'item_3.jpg')
# item_4 = Item.create!(shoe_id: shoe_1.id, color: "Grey", size: 9)
#     item_4.photo.attach(item_3.photo.blob)

item_5 = Item.create!(shoe_id: shoe_2.id, color: "Black", size: 8)
    file_5 = open('https://s3-us-west-1.amazonaws.com/alldays-seeds/item_5.png')
    item_5.photo.attach(io: file_5, filename: 'item_5.jpg')
# item_6 = Item.create!(shoe_id: shoe_2.id, color: "Black", size: 9)
#     item_6.photo.attach(item_5.photo.blob)

item_7 = Item.create!(shoe_id: shoe_2.id, color: "Grey", size: 8)
    file_7 = open('https://s3-us-west-1.amazonaws.com/alldays-seeds/item_7.png')
    item_7.photo.attach(io: file_7, filename: 'item_7.jpg')
# item_8 = Item.create!(shoe_id: shoe_2.id, color: "Grey", size: 9)
#     item_8.photo.attach(item_7.photo.blob)

item_9 = Item.create!(shoe_id: shoe_3.id, color: "Beige", size: 8)
    file_9 = open('https://s3-us-west-1.amazonaws.com/alldays-seeds/item_9.png')
    item_9.photo.attach(io: file_9, filename: 'item_9.jpg')
# item_10 = Item.create!(shoe_id: shoe_3.id, color: "Beige", size: 9)
#     item_10.photo.attach(item_9.photo.blob)

item_11 = Item.create!(shoe_id: shoe_3.id, color: "Red", size: 8)
    file_11 = open('https://s3-us-west-1.amazonaws.com/alldays-seeds/item_11.png')
    item_11.photo.attach(io: file_11, filename: 'item_11.jpg')
# item_12 = Item.create!(shoe_id: shoe_3.id, color: "Red", size: 9)
#     item_12.photo.attach(item_11.photo.blob)

item_13 = Item.create!(shoe_id: shoe_4.id, color: "Brown", size: 8)
    file_13 = open('https://s3-us-west-1.amazonaws.com/alldays-seeds/item_13.png')
    item_13.photo.attach(io: file_13, filename: 'item_13.jpg')
# item_14 = Item.create!(shoe_id: shoe_4.id, color: "Brown", size: 9)
#     item_14.photo.attach(item_13.photo.blob)

item_15 = Item.create!(shoe_id: shoe_4.id, color: "Blue", size: 8)
    file_15 = open('https://s3-us-west-1.amazonaws.com/alldays-seeds/item_15.png')
    item_15.photo.attach(io: file_15, filename: 'item_15.jpg')
# item_16 = Item.create!(shoe_id: shoe_4.id, color: "Blue", size: 9)
#     item_16.photo.attach(item_15.photo.blob)

#### WOMENS ####
item_17 = Item.create!(shoe_id: shoe_5.id, color: "Black", size: 8)
    item_17.photo.attach(item_1.photo.blob)
# item_18 = Item.create!(shoe_id: shoe_5.id, color: "Black", size: 9)
#     item_18.photo.attach(item_1.photo.blob)

item_19 = Item.create!(shoe_id: shoe_5.id, color: "Grey", size: 8)
    item_19.photo.attach(item_3.photo.blob)
# item_20 = Item.create!(shoe_id: shoe_5.id, color: "Grey", size: 9)
#     item_20.photo.attach(item_3.photo.blob)

item_21 = Item.create!(shoe_id: shoe_7.id, color: "Black", size: 8)
    item_21.photo.attach(item_5.photo.blob)
# item_22 = Item.create!(shoe_id: shoe_7.id, color: "Black", size: 9)
#     item_22photo.attach(item_5.photo.blob)

item_23 = Item.create!(shoe_id: shoe_7.id, color: "Grey", size: 8)
    item_23.photo.attach(item_7.photo.blob)
# item_24 = Item.create!(shoe_id: shoe_7.id, color: "Grey", size: 9)
#     item_24.photo.attach(item_7.photo.blob)

item_25 = Item.create!(shoe_id: shoe_6.id, color: "Red", size: 8)
    item_25.photo.attach(item_11.photo.blob)
# item_26 = Item.create!(shoe_id: shoe_6.id, color: "Red", size: 9)
#     item_26.photo.attach(item_11.photo.blob)

item_27 = Item.create!(shoe_id: shoe_6.id, color: "Beige", size: 8)
    item_27.photo.attach(item_9.photo.blob)
# item_28 = Item.create!(shoe_id: shoe_6.id, color: "Beige", size: 9)
#     item_28.photo.attach(item_9.photo.blob)

item_29 = Item.create!(shoe_id: shoe_8.id, color: "Brown", size: 8)
    item_29.photo.attach(item_13.photo.blob)
# item_30 = Item.create!(shoe_id: shoe_8.id, color: "Brown", size: 9)
#     item_30.photo.attach(item_13.photo.blob)
item_31 = Item.create!(shoe_id: shoe_8.id, color: "Blue", size: 8)
    item_31.photo.attach(item_15.photo.blob)
# item_32 = Item.create!(shoe_id: shoe_8.id, color: "Blue", size: 9)
#     item_32.photo.attach(item_15.photo.blob)


###############################  runners  ##########################################
item_33 = Item.create!(shoe_id: shoe_1.id, color: "Beige", size: 8)
    file_33 = open('https://s3-us-west-1.amazonaws.com/alldays-seeds/item_33.png')
    item_33.photo.attach(io: file_33, filename: 'item_33.jpg')
# item_34 = Item.create!(shoe_id: shoe_1.id, color: "Beige", size: 9)
#     item_34.photo.attach(item_33.photo.blob)

item_35 = Item.create!(shoe_id: shoe_1.id, color: "Green", size: 8)
    file_35 = open('https://s3-us-west-1.amazonaws.com/alldays-seeds/item_35.png')
    item_35.photo.attach(io: file_35, filename: 'item_35.jpg')
# item_36 = Item.create!(shoe_id: shoe_1.id, color: "Green", size: 9)
#     item_35.photo.attach(item_35.photo.blob)

item_37 = Item.create!(shoe_id: shoe_9.id, color: "Brown", size: 8)
    file_37 = open('https://s3-us-west-1.amazonaws.com/alldays-seeds/item_37.png')
    item_37.photo.attach(io: file_37, filename: 'item_37.jpg')
# item_38 = Item.create!(shoe_id: shoe_9.id, color: "Brown", size: 9)
#     item_37.photo.attach(item_37.photo.blob)

item_39 = Item.create!(shoe_id: shoe_9.id, color: "White", size: 8)
    file_39 = open('https://s3-us-west-1.amazonaws.com/alldays-seeds/item_39.png')
    item_39.photo.attach(io: file_39, filename: 'item_39.jpg')
# item_40 = Item.create!(shoe_id: shoe_9.id, color: "White", size: 9)
#     item_39.photo.attach(item_39.photo.blob)


#### Womens runners ####
item_41 = Item.create!(shoe_id: shoe_5.id, color: "Beige", size: 8)
    item_41.photo.attach(item_33.photo.blob)
# item_42 = Item.create!(shoe_id: shoe_5.id, color: "Beige", size: 9)
#     item_42.photo.attach(item_33.photo.blob)

item_43 = Item.create!(shoe_id: shoe_5.id, color: "Green", size: 8)
    item_43.photo.attach(item_35.photo.blob)
# item_44 = Item.create!(shoe_id: shoe_5.id, color: "Green", size: 9)
#     item_44.photo.attach(item_35.photo.blob)

item_45 = Item.create!(shoe_id: shoe_10.id, color: "Brown", size: 8)
    item_45.photo.attach(item_37.photo.blob) 
# item_46 = Item.create!(shoe_id: shoe_10.id, color: "Brown", size: 9)
#     item_46.photo.attach(item_37.photo.blob)

item_47 = Item.create!(shoe_id: shoe_10.id, color: "White", size: 8)
    item_47.photo.attach(item_39.photo.blob)
# item_48 = Item.create!(shoe_id: shoe_9.id, color: "White", size: 9)
#     item_48.photo.attach(item_39.photo.blob)


####  mens tree lounger ####
item_49 = Item.create!(shoe_id: shoe_11.id, color: "Blue", size: 8)
    file_49 = open('https://s3-us-west-1.amazonaws.com/alldays-seeds/item_49.png')
    item_49.photo.attach(io: file_49, filename: 'item_49.jpg')
# item_50 = Item.create!(shoe_id: shoe_11.id, color: "Blue", size: 9)
#     item_50.photo.attach(item_49.photo.blob)



####  mens tree lounger ####
item_51 = Item.create!(shoe_id: shoe_11.id, color: "Green", size: 8)
    file_51 = open('https://s3-us-west-1.amazonaws.com/alldays-seeds/item_51.png')
    item_51.photo.attach(io: file_51, filename: 'item_51.jpg')
# item_52 = Item.create!(shoe_id: shoe_11.id, color: "Green", size: 9)
#     item_52.photo.attach(item_51.photo.blob)


### womens tree lounger ####
item_53 = Item.create!(shoe_id: shoe_12.id, color: "Blue", size: 8)
    item_53.photo.attach(item_49.photo.blob)
# item_54 = Item.create!(shoe_id: shoe_12.id, color: "Blue", size: 9)
#  item_54.photo.attach(item_49.photo.blob)

### womens tree lounger ####
item_55 = Item.create!(shoe_id: shoe_12.id, color: "Green", size: 8)
    item_55.photo.attach(item_51.photo.blob)
# item_56 = Item.create!(shoe_id: shoe_12.id, color: "Green", size: 9)
#     item_56.photo.attach(item_51.photo.blob)

#### tree topper ####
item_57 = Item.create!(shoe_id: shoe_3.id, color: "Blue", size: 8)
    file_57 = open('https://s3-us-west-1.amazonaws.com/alldays-seeds/item_57.png')
    item_57.photo.attach(io: file_57, filename: 'item_57.jpg')
# item_58 = Item.create!(shoe_id: shoe_3.id, color: "Blue", size: 9)
#     item_58.photo.attach(item_57.photo.blob)

item_59 = Item.create!(shoe_id: shoe_3.id, color: "Brown", size: 8)
    file_59 = open('https://s3-us-west-1.amazonaws.com/alldays-seeds/item_59.png')
    item_59.photo.attach(io: file_59, filename: 'item_59.jpg')
# item_60 = Item.create!(shoe_id: shoe_3.id, color: "Brown", size: 9)
#     item_60.photo.attach(item_59.photo.blob)


#### women's tree topper ####
item_61 = Item.create!(shoe_id: shoe_6.id, color: "Blue", size: 8)
    item_61.photo.attach(item_57.photo.blob)
# item_62 = Item.create!(shoe_id: shoe_6.id, color: "Blue", size: 9)
#     item_62.photo.attach(item_57.photo.blob)

item_63 = Item.create!(shoe_id: shoe_6.id, color: "Brown", size: 8)
    item_63.photo.attach(item_59.photo.blob)
# item_64 = Item.create!(shoe_id: shoe_6.id, color: "Brown", size: 9)
#     item_64.photo.attach(item_59.photo.blob)
