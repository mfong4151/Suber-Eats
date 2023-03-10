json.transaction do
    @transactions.each do |transaction|
        json.set! transaction.id do
            json.extract! transaction, :transaction_sum, :created_at, :review_left, :id
            json.restaurant transaction.selling_restaurant.name
            json.restaurant_id transaction.selling_restaurant.id
            json.image_url transaction.selling_restaurant.image.url
        end
    end
end