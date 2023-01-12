json.restaurants do
    @restaurants.each do |restaurant|
        json.set! restaurant.id do
            json.partial! 'restaurant', restaurant: restaurant
            json.image_url restaurant.image.url
        end
    end 
end