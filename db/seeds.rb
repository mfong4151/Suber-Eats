require 'easy_seeds/easy_seeds'


class_names = [User, Restaurant, Menu, MenuItem, Review, Cart, CartItem, Transaction]
table_strings = ['users', 'restaurants', 'menus', 'menu_items', 'reviews', 'carts', 'cart_items', 'transactions']



EasySeeds::Destroy.destroy_tables(class_names, table_strings)

EasySeeds::Seeder.create_easy_seed_data(class_names)

class_image_names = [Restaurant]
EasySeeds::Images.attach_images(class_image_names)