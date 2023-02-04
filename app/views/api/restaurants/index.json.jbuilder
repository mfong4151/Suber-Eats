json.restaurants do
    @restaurants.each do |restaurant|
        json.set! restaurant.id do
            json.partial! 'restaurant', restaurant: restaurant
            json.distance Restaurant.get_dist_from_user(@current_user, restaurant )
            json.image_url restaurant.image.url
        end
    end 
end