class SessionsController < ApplicationController

  def new
    if current_user
      redirect_to home_url
    else
      @user = User.new
    end
  end

  def create
    if @user = login(params[:email], params[:password])
      redirect_back_or_to(:home, notice: 'Login successful')
    else
      flash.now[:alert] = 'Login failed'
      render action: 'new'
    end
  end

  def destroy
    logout
    redirect_to root_url
  end
end
