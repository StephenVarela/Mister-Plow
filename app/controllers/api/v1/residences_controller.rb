class Api::V1::ResidencesController < ApplicationController
  def new
    if current_user
      redirect_to home_url
    else
      residence = Residence.new
      render json: residence
    end
  end

  def create
    residence = Residence.create(residence_params)
    puts "HIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIi"
    puts residence_params["street_name"]
    puts params[:street_name]
    puts residence_params[:street_name]
    puts "HIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIi"

    # residence = Residence.new
    # residence = Residence.create(residence_params)
    # response = HTTParty.get("https://www.mapquestapi.com/geocoding/v1/address?key=iv9cSCh7n5iOdUK7TVJGARdjPNBoXGyh&inFormat=kvp&outFormat=json&location=1406+Bayshire+Dr&thumbMaps=false")

    # conditonal?
    flash[:success] = "New residence created."

    respond_to do |format|
      format.html { redirect_to home_url, notice: 'Account successfully created.'}
      format.json { render json: residence }
    end
  end

  private

  def residence_params
    params.require(:residence).permit(:id, :home_owner_id, :street_name, :city_name, :postal_code, :country, :is_home_address)
  end
end
