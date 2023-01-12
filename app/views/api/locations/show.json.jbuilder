json.locations do
    json.set! @location.id do
        json.extract! @location, :id, :longitude, :latitude
    end

end