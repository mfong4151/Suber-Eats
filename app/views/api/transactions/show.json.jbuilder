json.transaction do
    @transactions.each do |transaction|
        json.set! transaction.id do
            json.extract! transaction, :transaction_sum, :created_at
            json.selling_restaurant transaction.selling_restaurant.name
        end
    end
end