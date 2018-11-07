Rails.application.routes.draw do
  root to: 'home#index'

  get '/home' => 'home#index'
  get '/signup' => 'signup#index'

  namespace :api do
    namespace :v1 do
     resources :jobs, only: [:index, :create, :destroy, :update]
     resources :users
    end
  end

  resources :sessions, except: [:index, :edit, :update, :show]

  get 'login' => 'sessions#new', :as => :login
  post 'logout' => 'sessions#destroy', :as => :logout
end
