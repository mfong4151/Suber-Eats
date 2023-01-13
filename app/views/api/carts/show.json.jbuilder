json.cart do
    @cart.each do |cart|
        json.set! cart.menu_item_id do
        json.extract!  cart, :quantity, :menu_item_id, :restaurant_id, :id
            json.rest_name cart.restaurant.name
            json.image_url cart.restaurant.image.url
            json.address cart.restaurant.address
            json.item_name cart.carted_item.item_name
            json.price cart.carted_item.price
            json.cart_sum  cart.carted_item.price * cart.quantity
        
        end
    end
end 