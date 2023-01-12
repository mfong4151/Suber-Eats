json.locations do
    @locations.each do |location|
        json.set! location.user_id do
            json.extract! location, :id, :user_id, :longitude, :latitude
        end
    end 
end