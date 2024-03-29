class Api::UsersController < ApplicationController
  wrap_parameters include: User.attribute_names + ['password']

  def create

    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show 
      return 

    end 
    render json: { errors: @user.errors.full_messages }, status: :unauthorized

  end


  def index
    @users = User.all
    render :index

  end

  private 
  def user_params
    params.require(:user).permit(:email, :password, :name, :phone_number)
  end 
end
