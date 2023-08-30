json.user do 
    json.extract! @user, :id, :email, :phone_number, :latitude, :longitude
end 