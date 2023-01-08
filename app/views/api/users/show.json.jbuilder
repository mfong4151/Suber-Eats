json.user do 
    json.extract! @user, :id, :email, :username, :created_at, :updated_at
    if @users_cart_items
        json.set! :cart do
        @users_cart_items.each do |cart_item|
            json.set! cart_item.id do
                json.extract! cart_item, :id, :item_name, :description, :price, :menu_id     
                end
            end
        end
    end

    
end 