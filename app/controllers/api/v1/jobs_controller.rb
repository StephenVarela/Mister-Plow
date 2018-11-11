class Api::V1::JobsController < ApplicationController
  def index
    if current_user.is_shoveler
      render json: Job.where(accepted: nil).or(Job.where(shoveler_id: current_user.shoveler.id));
    else
      user_residences = current_user.home_owner.residences.map { |residence| residence[:id] }
      render json: Job.where(residence_id: user_residences)
    end
  end

  def create
    job = Job.create(job_params)
    job.update_attributes(scheduled_time: Time.at(job_params[:scheduled_time] / 1000.00))
    render json: job
  end

  def destroy
    Job.destroy(params[:id])
  end

  def update
    job = Job.find(params[:id])
    job.update_attributes(job_params)
    render json: job
  end

  private

  def job_params
    params.require(:job).permit(:id, :comments, :price, :residence_id, :instructions, :premium_rush, :premium_peak_hours, :scheduled_time, :check_in, :check_out, :rating, :confirmation, :accepted, :shoveler_id)
  end
end
