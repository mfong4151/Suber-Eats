class Api::CartItemsController < ApplicationController
    wrap_parameters include: CartItem.attribute_names
    
    def index
        @cart_items = CartItem.select('*').where('cart_id = ?', params[:cart_id]).includes(:item)

        if @cart_items
            render :index
            return
        else
            render json: @cart_items.errors.full_messages, status: 422
            return
        end

    end

    def create
        #WIP, the commented out line is an attempt to create a new cart via the backend
        #The issue is that every time you query the backend for a cart item, you are effectively querying the backend 4 times.

        # @user_id, @restaurant_id = current_user.id,  MenuItem.find_by_id(id: params[:menu_item_id]).parent_restaurant.id

        @cart_item = CartItem.new(cart_item_params)
        if @cart_item.save
            render :show
            return
        else
            render json: @cart_item.errors.full_messages, status: 422
            return
        end

    end

    def update
        @cart_item = CartItem.find_by_id(params[:id])
        puts 'fuck fuck fuck fuck fuck'
        puts(@cart_item)
        if @cart_item.update(cart_item_params)
            render :show
        else
            render json: @cart_item.errors.full_messages, status: 422 
        end
    end

    def destroy
        @cart_item = CartItem.find_by(id: params[:id])
        if @cart_item.delete
            return
        else
            render json: @cart_item.errors.full_messages, status: 422
        end
    end


    private  

    def cart_item_params
        params.require(:cart_item).permit(:menu_item_id, :cart_id, :quantity)
    end

end
