class CartItem < ApplicationRecord
    validates :quantity, presence:true,

    belongs_to :cart,
    foreign_key: :cart_id,
    class_name: :Cart

    belongs_to :item,
    foreign_key: :menu_item_id, 
    class_name: :MenuItem


end
