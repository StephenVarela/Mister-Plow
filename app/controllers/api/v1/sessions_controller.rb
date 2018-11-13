class Api::V1::SessionsController < ApplicationController

  def new
    if current_user
      redirect_to home_url
    else
      @user = User.new
    end
  end

  def create
    if @user = login(session_params[:email], session_params[:password]);
      respond_to do |format|
        format.html { redirect_to home_url, notice: 'Login successful'}
        format.json { render json: session }
      end
    else
      flash.now[:alert] = 'Login failed'
      render json: 'new'
    end
  end

  def destroy
    logout
    redirect_to root_url
  end

  private

  def session_params
    params.require(:session).permit(:email, :password)
  end
end
