Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # post 'api/test', to: 'application#test'

  
  namespace :api, defaults: { format: :json} do 
    resources :carts, only:[:destroy, :update, :create, :show]
    resources :transactions, only:[:show, :create]
    resources :users, only: [:create, :index, :show]
    resource :session, only: [:create, :show, :destroy]
    resources :restaurants, only: [:index, :show] do
        resources :menus, only:[:show]
    end
    resources :reviews, only:[:show, :update, :destroy, :create]
  end 

  get '*path', to: 'static_pages#frontend'
end
