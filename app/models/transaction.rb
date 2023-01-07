class Transaction < ApplicationRecord
    validates :transaction_sum, presence:true

    belongs_to :selling_restaurant,
    foreign_key: :restaurant_id,
    class_name: :Restaurant

    belongs_to :buying_user,
    foreign_key: :user_id,
    class_name: :User

end
