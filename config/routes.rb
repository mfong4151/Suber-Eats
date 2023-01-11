Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # post 'api/test', to: 'application#test'

  
  namespace :api, defaults: { format: :json} do 
    resources :users, only: [:create, :index]
    resources :transactions, only: [:show, :create]
    resource :session, only: [:create, :show, :destroy]
    resources :restaurants, only: [:index, :show] do
        resources :menus, only:[:show]
    end
    resources :reviews, only:[:show, :update, :destroy, :create]
  end 

  get '*path', to: 'static_pages#frontend'
end
