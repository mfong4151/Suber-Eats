class Api::LocationsController < ApplicationController

    def index
        @locations = Location.all
        render :index
    end

    def show
        @location = Location.find_by(user_id: current_user.id)
        if @location
            render :show
            return
        else
            render json: { errors: @location.errors.full_messages }, status: :unauthorized
            return
        end
    end

    

    def update
        @location = Location.find_by(user_id: current_user.id)

        if @location.update(location_params)
            render :show
        else
            render json: { errors: @location.errors.full_messages }, status: :unauthorized
            return
        end
    end
    


    private 

    def location_params
        params.require(:location).permit(:user_id, :longitude, :latitude)
    end
end
