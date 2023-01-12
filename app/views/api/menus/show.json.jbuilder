json.menu do
    
    json.set! :menu_items do
        @menu.menu_items.each do |menu_item|
            json.set! menu_item.id do
                json.extract! menu_item, :id, :item_name, :description, :price, :header, :menu_id
            end
        end
    end
    
    json.set! :reviews do
        @menu.restaurant.reviews.each do |review|
            json.set! review.id do
                json.partial! 'api/reviews/review', review: review
                json.extract! review.reviewer, :name
            end
        end
    end

end
