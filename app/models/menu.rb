# == Schema Information
#
# Table name: menus
#
#  id            :bigint           not null, primary key
#  restaurant_id :bigint           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Menu < ApplicationRecord
    
    belongs_to  :restaurant,
    foreign_key: :restaurant_id,
    class_name: :Restaurant

    
    has_many  :menu_items,
    foreign_key: :menu_id,
    class_name: :MenuItem,
    dependent: :destroy

end

