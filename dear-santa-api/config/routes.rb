Rails.application.routes.draw do
  resources :funds
  resources :users
  resources :gifts
  post "updateFunds", to: "funds#updateFunds"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
