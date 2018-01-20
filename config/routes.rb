Rails.application.routes.draw do
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post '/info_create', to: "informations#create", as: 'create_info'
  post '/broker_create', to: "brokers#create", as: 'create_broker'
  get '/contact', to: "pages#contact", as: 'contact'
end
