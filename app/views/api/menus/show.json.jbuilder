json.menu do
        @menu_items.each do |menu_item|
            json.set! menu_item.id do
                json.extract! menu_item, :id, :item_name, :description, :price, :header, :menu_id
            
        end
    end
end
