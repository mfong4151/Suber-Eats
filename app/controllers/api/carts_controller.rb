class Api::CartsController < ApplicationController

    def show
        @cart = User.find_by(id: params[:id]).carts.includes(:restaurant)
      

        if @cart
            render :show
            return
        end
    end

    def create
        old_cart = Cart.find_by(restaurant_id: params[:restaurant_id], user_id: params[:user_id])

        @new_cart = Cart.new(restaurant_id: params[:restaurant_id], user_id: params[:user_id ]) if !old_cart
        @cart = User.find_by(id: params[:user_id]).carts.includes(:restaurant)
        if old_cart  || @new_cart.save
            render :show
            return
        else
            render json: @cart.errors.full_messages, status: 422
            return
        end
    end
   
    def update
      
        @cart = [Cart.find_by(id: params[:id])]
        if @cart[0].update(cart_params)
            render :show
        else
            render json: @cart.errors.full_messages, status: 422
        end

    end
    

    def destroy
        
        @cart = Cart.find_by(id: params[:id])
        if @cart.destroy
            return
        else
            render json: @cart.errors.full_messages, status: 422

        end
        return

        
    end

    private
    
    def cart_params
        params.require(:cart).permit(:user_id, :restaurant_id)
    end
end
