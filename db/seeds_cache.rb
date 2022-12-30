# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do 
  puts "Destroying tables..."
  # Unnecessary if using `rails db:seed:replant`
  User.destroy_all
  
  puts "Resetting primary keys..."
  # For easy testing, so that after seeding, the first `User` has `id` of 1
  ApplicationRecord.connection.reset_pk_sequence!('users')
 
  
  
  users =  {
          0=> {'username': 'Demo-lition', 'email': 'demo@user.io', 'password': 'password', 'name': 'Demo Lition', 'phone_number': '123-456-7890'}, 
          1=> {'username': 'mfong', 'email': 'mfong415@gmail.com', 'password': 'password', 'name': 'Maxwell Fong', 'phone_number': '234-567-8901'}, 
          2=> {'username': 'nracherla', 'email': 'simpSupreme@gmail.com', 'password': 'password', 'name': 'Nishant Racherla', 'phone_number': '345-678-9821'}, 
          3=> {'username': 'dieggucio', 'email': 'dieggucio@aa.io', 'password': 'password', 'name': 'Dieggucio no Guccio', 'phone_number': '800-200-6000'}
        }
  
  
  puts "Creating users..."
  users.each do | key ,user|

      User.create!(
          username: user[:username],
          email:  user[:email],
          password: user[:password],
          name:  user[:name],
          phone_number: user[:phone_number]
      )
  end

  
  

    # User.create!(
    #   username: :Demo-lition:, 
    #   email: :demo@user.io:, 
    #   password: :password:,
    #   name: :Demo lition:,
    #   phone_number: :123-456-7890:
    # )





  p 'DONE WITH USERS, USER SEEDING SUCCESSFUL'
  
end 


ApplicationRecord.transaction do 

  puts "Seeding restaurants"
  Restaurant.destroy_all
  ApplicationRecord.connection.reset_pk_sequence!('restaurants')
  
  
  resturaunts =  {0 => {'name': 'Pho Ha Tien', 'description': "It's Phoneomenal!", 'rating': 4.5, 'address': '1900 Ocean Ave, San Francisco, CA', 'state_code': 'CA', 'city': 'San Francisco', 'longitude': 37.72, 'latitude': -122.4622, 'image': ''}, 
                  1 => {'name': 'Marugame Udon', 'description': "It's cheap and good!", 'rating': 4.9, 'address': '3251 20th Ave, San Francisco, CA', 'state_code': 'CA', 'city': 'San Francisco', 'longitude': 37.72818, 'latitude': -122.47702, 'image': ''}, 
                  2 => {'name': 'Bodega SF', 'description': 'Pho Swag', 'rating': 4.7, 'address': '138 Mason St, San Francisco, CA 94102', 'state_code': 'CA', 'city': 'San Francisco', 'longitude': 37.78473, 'latitude': -122.40934, 'image': ''}, 
                  3 => {'name': 'Monza Pizzeria', 'description': "It's not Diogeornos!", 'rating': 4.4, 'address': '1934 Ocean Ave, San Francisco, CA 94127', 'state_code': 'CA', 'city': 'San Francisco', 'longitude': 37.72584, 'latitude': -122.46332, 'image': ''}, 
                  4 => {'name': 'El Super Burrito', 'description': 'Best Burritio in Downtown SF!', 'rating': 4.2, 'address': '1200 Polk St, San Francisco, CA 94109', 'state_code': 'CA', 'city': 'San Francisco', 'longitude': 37.7876691, 'latitude': -122.4221302, 'image': ''}
                } 
  puts "Creating restaurants..."

  resturaunts.each do |key, restaurant|
    
      Restaurant.create!(
          name: restaurant[:name],
          description: restaurant[:description],
          rating: restaurant[:rating],
          address: restaurant[:address],
          state_code: restaurant[:state_code],
          city: restaurant[:city],
          longitude: restaurant[:longitude],
          latitude:restaurant[:latitude]
      )

  end

  p 'DONE WITH RESTAURANTS, SEEDING RESTAURANTS SUCCESSFUL'

end




ApplicationRecord.transaction do 

    ApplicationRecord.connection.reset_pk_sequence!('menus')
    Menu.destroy_all

    puts "Creating menus..."

    menus =  {
      0 => {'restaurant_id': 1, 'menu_items_id': 1},
      1 => {'restaurant_id': 1, 'menu_items_id': 2}, 
      2 => {'restaurant_id': 1, 'menu_items_id': 3}, 
      3 => {'restaurant_id': 1, 'menu_items_id': 4}
      } 

    menus.each do |key, menu|
        Menu.create!(
            restaurant_id: menu[:restaurant_id],
        )
    end
    p 'DONE WITH MENUS, MENUS SEEDING SUCCESSFUL'

end


ApplicationRecord.transaction do 
  MenuItem.destroy_all
  ApplicationRecord.connection.reset_pk_sequence!('menu_items')
 
 

  menu_items =  {0 => {'item_name': 'Ha Tien Special Extra Large Combo Noodle Soup', 'menu_id': 1, 'item_price': 19.25, 'item_image': ''}, 
                 1 => {'item_name': 'Combo Beef Noodle Soup', 'menu_id': 1, 'item_price': 16.75, 'item_image': ''}, 
                 2 => {'item_name': 'Rare Beef', 'menu_id': 1, 'item_price': 16.75, 'item_image': ''}, 
                 3 => {'item_name': 'Beef Meatball', 'menu_id': 1, 'item_price': 16.75, 'item_image': ''}, 
                 4 => {'item_name': 'Rare Beef with Chicken', 'menu_id': 1, 'item_price': 16.75, 'item_image': ''}} 

 
  puts "Creating menu_items..."
    
  menu_items.each do |key, menu_item|

    MenuItem.create!(
          item_name: menu_item[:item_name],
          menu_id: menu_item[:menu_id],
          price: menu_item[:item_price]
      )
  end

  p 'DONE WITH MENUITEMS, MENUITEM SEEDING SUCCESSFUL'


  
end  