class Weather < ApplicationRecord
  after_initialize :queue_job
  serialize :forecast, Array

  def queue_job
    PingApiJob.perform_in(30*1,'Weather')
    puts "Checking async"
  end
end
