class Api::CartsController < ApplicationController

    def show
        @cart = User.find_by(id: params[:id]).carts.includes(:restaurant)
      

        if @cart
            render :show
            return
        end
    end

    def create
        @cart = [Cart.new(cart_params)]
        if @cart[0].save!
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
        params.require(:cart).permit(:user_id, :restaurant_id, :menu_item_id, :quantity)
    end
end
