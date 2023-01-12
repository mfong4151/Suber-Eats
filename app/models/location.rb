class Location < ApplicationRecord
    validates :longitude, presence:true
    validates :latitude, presence:true

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

end
