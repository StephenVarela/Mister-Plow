class Api::V1::JobsController < ApplicationController
  def index
    render json: Job.all
  end

  def create
    job = Job.create(job_params)
    puts Time.at(job_params[:scheduled_time] / 1000.00)
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
    params.require(:job).permit(:id, :comments, :price, :residence_id, :description, :scheduled_time)
  end
end
