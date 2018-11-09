class Api::V1::UsersController < ApplicationController
  def new
    if current_user
      redirect_to home_url
    else
      user = User.new
      render json: user
    end
  end

  def create

    user = User.create(user_params)

    # conditonal?
    flash[:success] = "New account created."
    login(user_params[:email], user_params[:password])

    respond_to do |format|
      format.html { redirect_to home_url, notice: 'Account successfully created.'}
      format.json { render json: user }
    end

  end

  def weather
    puts "you here?========================================================================"
    p current_user
    if(current_user)
      my_user = User.find(current_user.id)
      render json: my_user.create_forecast_array
    end
  end
  private

  def user_params
    params.require(:user).permit(:id, :first_name, :last_name, :street_name, :city_name, :postal_code, :country, :email, :primary_contact_number, :secondary_contact_number, :password, :password_confirmation, :is_shoveler)
  end


end
