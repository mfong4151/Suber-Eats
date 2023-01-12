require_relative 'easy_seeder'
require "open-uri"

  

  
class_names = [User, Restaurant, Menu, MenuItem, Review, Cart, Transaction, Location]
table_strings = ['users', 'restaurants', 'menus', 'menu_items', 'reviews', 'carts', 'transactions', 'locations']
# EasySeeds.destroy_tables(class_names, table_strings)
# EasySeeds.create_easy_seed_data(class_names)
# 

# class_image_names = [Restaurant]
# EasySeeds.attach_images(class_image_names)





# #Used to test delete, update methods
tables, table_strings = EasySeeds.tables_from_csvs()
EasySeeds.single_seeder(tables[-1], Location, table_strings[-1])

