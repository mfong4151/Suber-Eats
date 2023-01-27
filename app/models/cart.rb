# == Schema Information
#
# Table name: carts
#
#  id            :bigint           not null, primary key
#  user_id       :bigint           not null
#  restaurant_id :bigint           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Cart < ApplicationRecord
    
    belongs_to :cart_owner,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :restaurant,
    foreign_key: :restaurant_id,
    class_name: :Restaurant

    has_many :carted_items,
    foreign_key: :cart_id,
    class_name: :CartItem,
    dependent: :destroy

    has_many :cart_item_restaurants,
    through: :carted_item,
    source: :parent_restaurant
end
