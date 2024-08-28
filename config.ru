#we are going to bring in the environment file 
require_relative "./config/environment"

use Rack::Cors do 
    allow do 
        origins '*'
        resource '*', headers: :any, methods: [:get, :post, :delete, :put, :patch, :options, :head]
    end 
end 

use Rack::JSONBodyParser

run ApplicationController