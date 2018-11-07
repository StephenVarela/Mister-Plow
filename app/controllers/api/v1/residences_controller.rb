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
