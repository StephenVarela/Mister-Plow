class SignupController < ApplicationController
  def index
    if current_user
      redirect_to root_url
    else
      render :index
    end
  end
end
