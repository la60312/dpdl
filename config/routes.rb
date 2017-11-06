Rails.application.routes.draw do
  namespace :vcf_files do
      get 'pshow'
  end
  resources :vcf_files
  root :to => "home#index"
  resources :home
  resources :searches
  resources :disorders
  resources :features
  resources :patients
  resources :review
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
