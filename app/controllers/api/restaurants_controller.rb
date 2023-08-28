class Api::RestaurantsController < ApplicationController

    def index
        @restaurants = Restaurant.restaurants_in_proximity(current_user.id)
        render :index
    end

    def show
        @restaurant =  Restaurant.find_by(id: params[:id])
        render :show
    end
    
 
end
