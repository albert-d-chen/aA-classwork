Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defauls: {format: :json} do 
    resources :todos, only: [:index, :show, :update, :create, :destroy]
  end

  root to: 'static_pages#root'
end
