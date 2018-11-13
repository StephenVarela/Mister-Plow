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
    residence = Residence.new(residence_params)

    my_residence = residence_params["street_name"].split

    my_residence.each_with_index do |street, i|
      if i < my_residence.length - 1
        my_residence[i] = my_residence[i] + "+"
      end
    end

    geo_residence = my_residence.join("")

    response = HTTParty.get("https://www.mapquestapi.com/geocoding/v1/address?key=#{ENV['GEOLOC_MQ_KEY']}&inFormat=kvp&outFormat=json&location=#{geo_residence}&thumbMaps=false")

    residence.lat = response["results"][0]["locations"][0]["latLng"]["lat"]
    residence.lon = response["results"][0]["locations"][0]["latLng"]["lng"]
    # conditonal?

    residence.save
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
