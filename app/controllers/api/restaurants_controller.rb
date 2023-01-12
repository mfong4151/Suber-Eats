class Api::RestaurantsController < ApplicationController

    def index
        ## if we cant get this to work, just default to Restaurant.all
        @restaurants = Restaurant.restaurants_in_proximity
        render :index
    end

    def show
        @restaurant =  Restaurant.find_by(id: params[:id])
        render :show
    end
    
 
end
