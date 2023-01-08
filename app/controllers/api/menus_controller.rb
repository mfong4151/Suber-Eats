class Api::MenusController < ApplicationController

    def show
        @menu = Menu.find_by(id: params[:id])
        render :show
    end

   
end
