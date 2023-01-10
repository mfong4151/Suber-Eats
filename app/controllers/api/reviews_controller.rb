class API::ReviewsController < ApplicationController

    def index
        ### get all the reviews associated with a certain user
    end

    def create
        @review= Review.new(review_params)

        if @review.save
            render :show
        else
            render json: { errors: @review.errors.full_messages }, status: :unauthorized
        end

    end

    def update
        @review = Review.find_by(review_params)

        if @review.save
            render :show
        else
            render json: { errors: @review.errors.full_messages }, status: :unauthorized
        end

    end

    def destroy
        @review = Review.find_by(review_params)
        if @review.delete
            render :show
        else
            render json: { errors: @review.errors.full_messages }, status: :unauthorized
        end
    end


    private

    def review_params
        params.require(:review).permit(:body,:restaurant_id, :user_id)   
    end
    
end
