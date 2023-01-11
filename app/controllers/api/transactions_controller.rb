class Api::TransactionController < ApplicationController

    def show
        @transactions = User.find_by(id: params[:id]).transactions.includes(:selling_restaurant)
        if @transaction
            render :show
            return
        end
    end

    def create

        @transactions = Transaction.new(transaction_params)

        if transactions.save
            render :show
            return
        else
            render json: @cart.errors.full_messages, status: 422
            return
        end 
    end

end