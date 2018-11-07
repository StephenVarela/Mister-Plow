class Api::V1::WeathersController < ApplicationController
  
  def index
    render json: Weather.all
  end

end
