require_relative 'easy_seeder'
require "open-uri"

  

#example from my own seed data
  
class_names = [User, Restaurant, Menu, MenuItem, Review, Cart, Transaction]
table_strings = ['users', 'restaurants', 'menus', 'menu_items', 'reviews', 'carts', 'transactions']
EasySeeds.destory_tables(class_names, table_strings)
EasySeeds.create_easy_seed_data(class_names)


# Restaurant.first.image.attach(io: URI.open('https://s3-media0.fl.yelpcdn.com/bphoto/C3C_Rgzz-h3CZGg6IdTFoQ/l.jpg'), filename: 'champa-garden.jpg')