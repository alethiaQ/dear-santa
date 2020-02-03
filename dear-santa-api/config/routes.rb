Rails.application.routes.draw do
  resources :funds
  resources :users
  resources :gifts
  post "deductFunds", to: "funds#deductFunds"
  post "increaseFunds", to: "funds#increaseFunds"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
