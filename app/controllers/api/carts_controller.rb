class Api::CartsController < ApplicationController

    def show
        @cart = User.find_by(id: params[:id]).current_cart
        if @cart
            render :show
            return
        end
    end

    def create
        puts(cart_params)
        @cart = Cart.new(cart_params)
        if @cart.save!
            render :show
            return
        else
            render json: @cart.errors.full_messages, status: 422
            return
        end
    end
   
    def update
        puts 'PARAMS HERE PARAMS HERE PARAMS HERE'
        puts(params)
        @cart = Cart.find_by(cart_params)
        puts 'YOUR CART HERE'
        if @cart.update(cart_params)
            render :show
        else
            render json: @cart.errors.full_messages, status: 422
        end

    end
    

    def destroy

        @cart = Cart.find_by(id: params[:id])
        if @cart.delete
            render :show
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
