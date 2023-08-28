class Api::TransactionsController < ApplicationController

    def index
        @transactions = User.find_by(id: current_user.id).transactions.includes(:selling_restaurant)
        if @transactions
            render :index
            return
        end
    end

    def show
        @transaction = User.find_by(id: params[:id]).transactions.includes(:selling_restaurant)

        if @transaction
            render :show
            return
        end
    end

    def update
      
        @transaction = Transaction.find_by(id: params[:id])
        if @transaction.update(transaction_params)
            render :show
        else
            render json: @transaction.errors.full_messages, status: 422
        end

    end

    def create

        @transaction = Transaction.new(transaction_params)

        if @transaction.save
            render :show
            return
        else
            render json: @transaction.errors.full_messages, status: 422
            return
        end 
    end
    
    def transaction_params
        params.require(:transaction).permit(:user_id, :restaurant_id, :review_left, :transaction_sum)

    end
end