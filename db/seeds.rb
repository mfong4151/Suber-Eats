require_relative 'easy_seeder'
require "open-uri"

  

#example from my own seed data
  
class_names = [User, Restaurant, Menu, MenuItem]

EasySeeds.create_easy_seed_data(class_names)