Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :update, :create]
      resources :scores, only: [:index, :update, :create]
    end
  end
end
