class Api::RestaurantsController < ApplicationController

    def index
        @restaurants = Restaurant.all
        render :index
    end
end
