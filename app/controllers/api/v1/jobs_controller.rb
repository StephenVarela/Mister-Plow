class Api::V1::JobsController < ApplicationController
  def index
    render json: Job.all
  end

  def create
    job = Job.create(job_params)
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
    params.require(:job).permit(:id, :comments, :price, :residence_id)
  end
end
