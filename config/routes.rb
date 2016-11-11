Rails.application.routes.draw do

  get "/" => "cover#cover"
  get "/home" => "home#home"
  get "/articles" => "articles#articles"

end
