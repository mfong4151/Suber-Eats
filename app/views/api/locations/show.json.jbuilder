json.locations do
    json.set! @user.id do
        json.extract! @user, :id, :longitude, :latitude
    end

end