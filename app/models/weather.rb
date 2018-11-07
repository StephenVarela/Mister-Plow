class Weather < ApplicationRecord
  after_initialize :queue_job

  def queue_job
    PingApiJob.perform_in(5,'value')
  end
end
