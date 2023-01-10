json.cart do
    @cart.each do |cart|
        json.set! cart.id do
            json.extract!  cart, :item_name, :quantity, :rest_name, :menu_item_id, :restaurant_id, :price, :cart_sum, :address, :id
        end
    end
end 