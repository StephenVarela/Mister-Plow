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

    puts '!!!!!!!LOOK AT THIS DATA -> ' + session

    respond_to do |format|
      if user.save
        format.html { redirect_to :root, notice: 'Account successfully created.'}
        format.json { render json: user }
      else
        format.html { redirect_to signup_url }
        format.json { render json: {error: 'Something went wrong'} }
      end
    end
  end

  private

  def user_params
    params.require(:user).permit(:id, :first_name, :last_name, :street_name, :city_name, :postal_code, :country, :email, :primary_contact_number, :secondary_contact_number, :password, :password_confirmation)
  end

end
