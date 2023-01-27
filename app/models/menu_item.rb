# == Schema Information
#
# Table name: menu_items
#
#  id          :bigint           not null, primary key
#  item_name   :string           not null
#  description :text
#  price       :float            not null
#  header      :string
#  menu_id     :bigint           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#


class MenuItem < ApplicationRecord
    validates :item_name, presence:true
    validates :price, presence:true

    belongs_to :menu,
    foreign_key: :menu_id,
    class_name: :Menu

    has_many :cart_item_entries,
    foreign_key: :menu_item_id,
    class_name: :CartItem

    has_one :parent_restaurant,
    through: :menu,
    source: :restaurant
end

