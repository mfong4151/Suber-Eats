json.restaurant do
    json.extract! @restaurant, :id, :name, :rating, :address, :state_code, :city, :longitude, :latitude
end
