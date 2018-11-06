class PrintJob
  include SuckerPunch::Job

  def perform(event)
    # do something...
    Weather.new
    puts "Performing Job"
  end
end
