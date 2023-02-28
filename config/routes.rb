Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # post 'api/test', to: 'application#test'

  
  namespace :api, defaults: { format: :json} do 
    resources :locations, only:[:index, :show, :create, :update]
    resources :carts, only:[:destroy, :update, :create, :show] do
      resources :cart_items, only:[:update, :create, :index]
    end

    resources :cart_items, only:[:destroy]

    resources :transactions, only:[:show, :create, :update, :index]
    resources :reviews, only:[:show, :update, :destroy, :create]
    resources :users, only: [:create, :index, :show] do
    end
    resource :session, only: [:create, :show, :destroy]
    resources :restaurants, only: [:index, :show] do
        resources :menus, only:[:show]
    end
  end 

  get '*path', to: 'static_pages#frontend'
end
