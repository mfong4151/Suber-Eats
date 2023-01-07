# == Schema Information
#
# Table name: reviews
#
#  id            :bigint           not null, primary key
#  body          :text             not null
#  restaurant_id :bigint           not null
#  user_id       :bigint           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Review < ApplicationRecord
    validates :body, presence: true

    belongs_to :reviewed_restaurant,
    foreign_key: :restaurant_id,
    class_name: :Restaurant

    belongs_to :reviewer,
    foreign_key: :user_id,
    class_name: :User

end
