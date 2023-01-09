# == Schema Information
#
# Table name: carts
#
#  id           :bigint           not null, primary key
#  menu_item_id :bigint           not null
#  user_id      :bigint           not null
#  quantity     :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Cart < ApplicationRecord
    validates :quantity, presence:true

    belongs_to :carted_item,
    foreign_key: :menu_item_id,
    class_name: :MenuItem
    

    belongs_to :cart_owner,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :restaurant,
    foreign_key: :restaurant_id,
    class_name: :Restaurant

    has_many :cart_item_restaurants,
    through: :carted_item,
    source: :parent_restaurant
end
