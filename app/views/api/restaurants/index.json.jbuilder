json.restaurants do
    @restaurants.each do |restaurant|
        json.set! restaurant.id do
            json.partial! 'restaurant', restaurant: restaurant
            
            # json.distance Restaurant.get_dist_from_user(@current_user_loc, restaurant ) #this is a great idea, but it hits the backend too many times
            json.image_url restaurant.image.url
        end
    end 
end