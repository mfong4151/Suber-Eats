class Api::MenusController < ApplicationController

    def show
        @menu = Menu.find_by(id: params[:id])
        @menu_items = @menu.menu_items
        render :show
    end

   
end
