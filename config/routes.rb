Rails.application.routes.draw do
  root to: 'home#index'

  get '/home' => 'home#index'
  get '/signup' => 'signup#index'

  namespace :api do
    namespace :v1 do
      resources :jobs, only: [:index, :create, :destroy, :update]
      resources :users

      resources :weathers
      resources :home_owners, only: [:new, :create, :destroy]
      resources :residences, only: [:new, :create, :destroy]
      resources :shovelers, only: [:new, :create, :destroy]
      get '/weather' => 'users#weather'
    end
  end


  resources :sessions, except: [:index, :edit, :update, :show]

  get 'login' => 'sessions#new', :as => :login
  post 'logout' => 'sessions#destroy', :as => :logout
  get '/map' => 'map#show'
end
