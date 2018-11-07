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
    user = User.
    render json: user
    # @user = User.new
    # @user.first_name = params[:user][:first_name]
    # @user.last_name = params[:user][:last_name]
    # @user.street_name = params[:user][:street_name]
    # @user.city_name = params[:user][:city_name]
    # @user.postal_code = params[:user][:postal_code]
    # @user.country = params[:user][:country]
    # @user.email = params[:user][:email]
    # @user.primary_contact_number = params[:user][:primary_contact_number]
    # @user.secondary_contact_number = params[:user][:secondary_contact_number]
    # @user.password = params[:user][:password]
    # @user.password_confirmation = params[:user][:password]

    if @user.save
      session[:user_id] = @user.id
      current_user = @user
      redirect_to root_url
    else
      render :new
    end

  end


end
