Rails.application.routes.draw do
  root to: 'home#index'

  get '/home' => 'home#index'
  # get '/signup' => 'signup#index'

  namespace :api do
    namespace :v1 do
      resources :jobs#, only: [:index, :create, :destroy, :update, :edit]
      post '/jobs/:id/cancel' => 'jobs#cancel'
      put '/jobs/:id/lifecycle' => 'jobs#update_lifecycle'
      resources :users

      resources :weathers
      resources :home_owners, only: [:new, :create, :destroy]
      resources :residences, only: [:new, :create, :destroy]
      resources :shovelers, only: [:new, :create, :destroy]
      resources :sessions, except: [:index, :edit, :update, :show]
      get '/weather' => 'users#weather'
      post '/logout' => 'sessions#destroy', :as => :logout
    end
  end


  # resources :sessions, except: [:index, :edit, :update, :show]

  # get '/sessions' => 'home#index'
  get '/login' => 'home#index', :as => :login
  # get '/map' => 'map#show'
end
