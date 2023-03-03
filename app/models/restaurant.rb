# == Schema Information
#
# Table name: restaurants
#
#  id           :bigint           not null, primary key
#  name         :string           not null
#  address      :string           not null
#  state_code   :string           not null
#  city         :string           not null
#  rating       :float            not null
#  longitude    :float            not null
#  latitude     :float            not null
#  cuisine_type :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Restaurant < ApplicationRecord
    validates :name, presence:true
    validates :rating, presence:true
    validates :address, presence:true
    validates :state_code, presence:true
    validates :city, presence:true
    validates :longitude, presence:true
    validates :latitude, presence:true
    validates :cuisine_type, presence:true
    
  

    def self.restaurants_in_proximity(user_id)
        user_loc = User.find_by_id(user_id).location

        Restaurant.select('*')
        .where('SQRT(POW((restaurants.latitude - ?),2) + POW((restaurants.longitude - ?),2)) <= .026', 
        *[user_loc.latitude, user_loc.longitude] )

    end
  
    def self.get_dist_from_user(user_loc, restaurant)
      
     (1000 *Math.sqrt((user_loc.longitude - restaurant.longitude) ** 2 + (user_loc.latitude - restaurant.latitude) ** 2)).to_i
    end

    def avg_dish_price
      menu_items = self.menu_items
      return 7 if menu_items.length == 0
      (menu_items.sum{|item| item.price}/menu_items.length).to_i
    end
    
    has_one :menu,
    foreign_key: :restaurant_id,
    class_name: :Menu,
    dependent: :destroy

    has_many :menu_items,
    through: :menu,
    source: :menu_items

    has_many :reviews,
    class_name: :Review,
    foreign_key: :restaurant_id,
    dependent: :destroy

    has_many :customer_cart,
    foreign_key: :restaurant_id,
    class_name: :Cart


    has_many :transactions, 
    foreign_key: :restaurant_id,
    class_name: :Transaction,
    dependent: :destroy


    has_one_attached :image
end
