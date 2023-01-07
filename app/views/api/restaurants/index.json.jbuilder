json.restaurants do
    @restaurants.each do |restaurant|
        json.set! restaurant.id do
            json.extract! restaurant, :id, :name, :rating, :address, :state_code, :city, :longitude, :latitude, :cuisine_type
        end
    end 
end