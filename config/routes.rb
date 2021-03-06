Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :items, only: [:show]
    resources :users, only: [:create]
    resources :carts, only: [:create, :edit, :destroy, :show]
    resources :shoes,  only: [:show]
    resource :session, only: [:create, :destroy]
  end

  
end
