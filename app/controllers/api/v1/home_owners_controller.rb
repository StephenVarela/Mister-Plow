class Api::V1::HomeOwnersController < ApplicationController
  def new
    if current_user
      redirect_to home_url
    else
      home_owner = HomeOwner.new
      render json: home_owner
    end
  end

  def create
    home_owner = HomeOwner.create(home_owner_params)

    # conditonal?
    flash[:success] = "New home owner created."

    respond_to do |format|
      format.html { redirect_to home_url, notice: 'Account successfully created.'}
      format.json { render json: home_owner }
    end
  end

  private

  def home_owner_params
    params.require(:home_owner).permit(:id, :user_id)
  end
end
