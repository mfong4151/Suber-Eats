class Api::ReviewsController < ApplicationController


    def create
        @review = Review.new(review_params)
        if @review.save!
            return
        else
            render json: @review.errors.full_messages, status: 422
            return
        end
    end
   
    def update
      
        @review = Review.find_by(id: params[:id])
        if @review.update(review_params)
            return
        else
            render json: @review.errors.full_messages, status: 422
        end

    end
    

    def destroy


        @review = Review.find_by(id: params[:id])
        if @review.delete
            return
        else
            render json: @review.errors.full_messages, status: 422
            return
        end
        
    end

    private
    
    def review_params
        params.require(:review).permit(:user_id, :restaurant_id, :body)
    end
end
