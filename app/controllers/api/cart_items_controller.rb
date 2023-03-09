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
