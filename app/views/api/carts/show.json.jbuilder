json.cart do
    @cart.each do |cart|
        json.set! cart.id do
            json.extract!  cart, :quantity, :menu_item_id, :restaurant_id, :id
            json.item_name cart.carted_item.item_name
            json.rest_name cart.restaurant.name
            json.price cart.carted_item.price
            json.cart_sum  cart.carted_item.price * cart.quantity
            json.address cart.restaurant.address
        end
    end
end 