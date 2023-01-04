class StaticPagesController < ActionController::Base
    def frontend
        render file: Rails.root.join('public', 'index.html')

    end
end

## in your routes copy paste this to the bottom most end statement

# get '*path', to: 'static_pages#frontend'