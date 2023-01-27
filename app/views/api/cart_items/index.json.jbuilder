json.cart_items do
    @cart_items.each do |cart_item|
        json.set! cart_item.id do
            item_attrs = cart_item.item
            json.extract! cart_item, :id, :menu_item_id, :cart_id, :quantity
            json.name item_attrs.item_name
            json.adj_price item_attrs.price * cart_item.quantity
        end
    end
end