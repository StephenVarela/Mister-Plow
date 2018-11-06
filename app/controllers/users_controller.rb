class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.new
    @user.first_name = params[:user][:first_name]
    @user.last_name = params[:user][:last_name]
    @user.street_name = params[:user][:street_name]
    @user.city_name = params[:user][:city_name]
    @user.postal_code = params[:user][:postal_code]
    @user.country = params[:user][:country]
    @user.email = params[:user][:email]
    @user.primary_contact_number = params[:user][:primary_contact_number]
    @user.secondary_contact_number = params[:user][:secondary_contact_number]
    @user.password = params[:user][:password]
    @user.password_confirmation = params[:user][:password]


    puts params

    @user.valid?
    puts "======"
    puts @user.errors.full_messages
    puts "======"
    if @user.save
      session[:user_id] = @user.id
      current_user = @user
      puts "hi"
    else
      puts "Dan"
      render :new
    end

  end


end
