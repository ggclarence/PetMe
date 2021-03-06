Rails.application.routes.draw do
  
  resources :likes, only: [:create]
  resources :comments, only: [:create]
  resources :users, only: [:index, :show, :create]
  resources :posts, only: [:index, :create]

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"
  get "/user/:username", to: "users#profile"
  post "/signup", to: "users#create"


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
