json.user do 
    json.extract! @user, :id, :email, :username, :created_at, :updated_at

    ## this isn't exactly what we wnat 
    json.cart do
        json.extract! @user, :current_cart
    end

    json.history do

    end
    
end 