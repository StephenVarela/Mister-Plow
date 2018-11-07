class SignupController < ApplicationController
  def index
    if current_user
      redirect_to new_session_url
    else
      render :index
    end
  end
end
