json.restaurants do
    @restaurants.each do |restaurant|

        #we will also need the following fields:
        #:alt_name
        json.set! restaurant.id do
            json.extract! restaurant, :id, :name, :rating, :address, :state_code, :city, :longitude, :latitude
        end
    end 
end