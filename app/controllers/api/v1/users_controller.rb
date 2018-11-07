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
    # puts '!!!!!!!LOOK AT THIS DATA -> ' + session

    user = User.create(user_params)

    
    # if user.save
    flash[:success] = "New account created."
    login(user_params[:email], user_params[:password])
    render json: user
    # redirect_to root_url
    # end

    # respond_to do |format|
    #   format.html { redirect_to home_url, notice: 'Account successfully created.'}
    #   format.json {  }
    # end
  end

  private

  def user_params
    params.require(:user).permit(:id, :first_name, :last_name, :street_name, :city_name, :postal_code, :country, :email, :primary_contact_number, :secondary_contact_number, :password, :password_confirmation)
  end

end
