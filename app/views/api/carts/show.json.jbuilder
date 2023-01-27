json.cart do
    @cart.each do |cart|
        json.set! cart.id do
            json.extract!  cart, :restaurant_id, :id
            json.rest_name cart.restaurant.name
            # json.image_url cart.restaurant.image.url
            json.address cart.restaurant.address
            json.rest_lng cart.restaurant.longitude
            json.rest_lat cart.restaurant.latitude
            json.cart_items cart.carted_items.length *  cart.carted_items.sum{|item| item.quantity}
            json.cart_items_sum cart.carted_items.sum{|item| item.quantity * item.item.price}
        
        end
    end
end 