class Api::V1::ShovelersController < ApplicationController
  def new
    if current_user
      redirect_to home_url
    else
      shoveler = Shoveler.new
      render json: shoveler
    end
  end

  def create
    shoveler = Shoveler.create(shoveler_params)

    # conditonal?
    flash[:success] = "New home owner created."

    respond_to do |format|
      format.html { redirect_to home_url, notice: 'Account successfully created.'}
      format.json { render json: shoveler }
    end
  end

  private

  def shoveler_params
    params.require(:shoveler).permit(:id, :user_id, :rating)
  end
end
