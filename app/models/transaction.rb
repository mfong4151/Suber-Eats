# == Schema Information
#
# Table name: transactions
#
#  id              :bigint           not null, primary key
#  user_id         :bigint           not null
#  restaurant_id   :bigint           not null
#  transaction_sum :float            not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  review_left     :boolean
#
class Transaction < ApplicationRecord
    validates :transaction_sum, presence:true

    belongs_to :selling_restaurant,
    foreign_key: :restaurant_id,
    class_name: :Restaurant

    belongs_to :buying_user,
    foreign_key: :user_id,
    class_name: :User

end
