class Weather < ApplicationRecord
  after_initialize :queue_job

  def queue_job
    PrintJob.perform_in(5,'value')
  end
end
