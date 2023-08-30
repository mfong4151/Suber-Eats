class Api::LocationsController < ApplicationController

    def index
        @users = User.all
        print(@users)
        render :index
    end

    def show
        @user = User.find_by(user_id: current_user.id)
        if @user
            render :show
            return
        else
            render json: { errors: @user.errors.full_messages }, status: :unauthorized
            return
        end
    end

    

    def update
        @user = User.find_by(id: params[:id])

        if @user.update(location_params)
            render :show
        else
            render json: { errors: @user.errors.full_messages }, status: :unauthorized
            return
        end
    end
    


    private 

    def location_params
        params.require(:location).permit(:id, :longitude, :latitude)
    end
end
