# == Schema Information
#
# Table name: restaurants
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :text             not null
#  rating      :float            not null
#  address     :string           not null
#  state_code  :string           not null
#  city        :string           not null
#  longitude   :float            not null
#  latitude    :float            not null
#  image       :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Restaurant < ApplicationRecord
    validates :name, presence:true
    validates :description, presence:true
    validates :rating, presence:true
    validates :address, presence:true, uniqueness: true
    validates :state_code, presence:true
    validates :city, presence:true
    validates :longitude, presence:true
    validates :latitude, presence:true
    
    
    has_one :menu,
    foreign_key: :restaurant_id,
    class_name: :Menu,
    dependent: :destroy

    has_many :menu_items,
    through: :menu,
    source: :menu_items

    # has_one_attached :photo
end
