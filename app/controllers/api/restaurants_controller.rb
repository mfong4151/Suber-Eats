class Api::RestaurantsController < ApplicationController

    def index
        @restaurants = Restaurant.restaurants_in_proximity(current_user.id)
        @current_user = current_user
        render :index
    end

    def show
        @restaurant =  Restaurant.find_by(id: params[:id])
        render :show
    end
    
 
end
