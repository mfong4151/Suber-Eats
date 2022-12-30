# == Schema Information
#
# Table name: menu_items
#
#  id         :bigint           not null, primary key
#  item_name  :string           not null
#  price      :float            not null
#  image      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#


class MenuItem < ApplicationRecord
    validates :item_name, presence:true
    validates :price, presence:true

    belongs_to :menu,
    foreign_key: :menu_id,
    class_name: :Menu

     
end

