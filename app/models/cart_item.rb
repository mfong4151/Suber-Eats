# == Schema Information
#
# Table name: cart_items
#
#  id           :bigint           not null, primary key
#  menu_item_id :bigint           not null
#  cart_id      :bigint           not null
#  quantity     :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class CartItem < ApplicationRecord
    validates :quantity, presence:true

    belongs_to :cart,
    foreign_key: :cart_id,
    class_name: :Cart

    belongs_to :item,
    foreign_key: :menu_item_id, 
    class_name: :MenuItem


end
