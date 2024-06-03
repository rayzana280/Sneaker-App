require 'sinatra'
class ApplicationController < Sinatra::Base 
    get '/shoes' do 
        shoe = Shoe.all 
        shoe.to_json 
    end 

    get '/user' do 
        user= User.all 
        user.to_json 
    end 

    post '/createShoe' do 
        shoe = Shoe.create(
            name: params[:name],
            size: params[:size],
            color: params[:color],
            price: params[:price],
            image: params[:image],
            inCart: params[:inCart],
            user_id: params[:user_id]
        )
        shoe.to_json 
    end 

    patch '/shoes/:id' do 
        shoe = Shoe.find(params[:id])
        shoe.update(
            inCart:params[:inCart]
            )
            shoe.to_json
    end 

end 
#then we can start changing fetch with api backend 
#change the fetch for forms and try to get the user_id instead of email