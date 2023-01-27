# == Schema Information
#
# Table name: locations
#
#  id         :bigint           not null, primary key
#  user_id    :bigint           not null
#  longitude  :float            not null
#  latitude   :float            not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Location < ApplicationRecord
    validates :longitude, presence:true
    validates :latitude, presence:true

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

end
