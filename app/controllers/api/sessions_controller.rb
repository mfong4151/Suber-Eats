class Api::SessionsController < ApplicationController
  
  # before_action :require_logged_in, only: [:destroy] #thought this was the problem turns out its not

  def create
    credential = params[:credential]
    password = params[:password]

    if credential == ''
      render json:{ errors: ['Please provide a valid username']}, status: :unauthorized
      return
    end
  
    @user = User.find_by_credentials(credential, password)
    
    if @user 
      login!(@user)
      render 'api/users/show'
      return 
    end 
    render json: { errors: ['The provided credentials were invalid.']}, status: :unauthorized
  end

  def show

    if current_user 
      @user = current_user
      render 'api/users/show'
    else
      render json: { user: nil }
    end 

  end

  def destroy
    logout!
    render json: { message: 'success'}
  end

end
