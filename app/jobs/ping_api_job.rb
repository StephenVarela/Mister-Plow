class PingApiJob
  include SuckerPunch::Job

  def perform(event)
    # do something...
    Weather.new
    puts "making api call"
    # hit API, parse response and create weather event object
    # response = HTTParty.get('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=fad916310167014be8248581f17d1edb')
  end
end
