Rails.application.routes.draw do

  get "/" => "home#home"
  get "/articles" => "articles#articles"

end
