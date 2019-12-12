Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/kitchen_sink', to: 'pages#kitchen_sink' if Rails.env.development?

  resources :songs, only: [:index, :destroy] do
    delete :clear_playlist, on: :collection
  end

  resources :playlist_imports, only: [:new, :create]
end
