Rails.application.routes.draw do

  get "/" => "cover#cover"
  get "/home" => "home#home"

end
