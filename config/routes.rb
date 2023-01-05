Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # post 'api/test', to: 'application#test'
  get '/api/restaurants/menu', to: 'menu#index'
  post '/api/restaurants/menu', to: 'menu#create'
  put '/api/restaurants/menu/:id', to: 'menu#update'
  delete '/api/restaurants/menu/:id', to: 'menu#destroy'

  namespace :api, defaults: { format: :json} do 
    resources :users, only: [:create, :index]
    resource :session, only: [:create, :show, :destroy]
    resources :restaurants, only: [:index, :show]
    resources :reviews, only:[:show, :update, :delete, :create]
  end 

  get '*path', to: 'static_pages#frontend'
end
