Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :songs, only: [:index, :delete]
  resources :playlist_imports, only: [:new, :create]
end
