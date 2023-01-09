class Api::CartsController < ApplicationController
    def create
        @carts = Carts.new(cart_params)
        if @post.save
            render 'api/users/show'
            return
        else
            render json: @carts.errors.full_messages, status: 422
            return
        end
    end
   
    def update
        @cart = Carts.find_by(id: params[:id])
        
        if params[:quantity] == 0:
            delete_single_item(@cart)
            return
        else
            if @cart.update(cart_params)
                render 'api/users/show'
                return
            else
                render json: @cart.errors.full_messages, status: 422
            end
        end

        return
    end
    
    def delete_single_item(cart)
        if cart
            cart.delete
            render 'api/users/show'
            return
        else 
            render json: @cart.errors.full_messages, status: 422

        end

    end

    def delete

        @carts = Cart.where(user_id: params[:user_id], restauraunt_id: params[:restaurant_id])
        if @carts
            @carts.delete_all
            render 'api/users/show'
        end
        return

        
    end

    private
    
    def cart_params
        params.require(:cart).permit(:user_id, :restaurant_id, :menu_item_id, :quantity)
    end
end
