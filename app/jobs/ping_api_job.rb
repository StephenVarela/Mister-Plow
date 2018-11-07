class PingApiJob
  include SuckerPunch::Job

  def perform(event)
    # do something...
    puts "making #{event} object"
    location = 'Toronto'

    response = HTTParty.get("http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=#{ENV['WEATHERAPI_KEY']}&q=#{location}")


    weather_event = Weather.new();

    forecast_hash = {}
    weather_event.city_name = response["city"]["name"]
    response["list"].each do |item|
      forecast_hash["weather"] = item["weather"][0]
      forecast_hash["datetime"] = item["dt_txt"]
      forecast_hash["temp"] = item["main"]["temp"]
      weather_event.forecast << forecast_hash
    end

    if(weather.event.valid?)
      weather_event.save
    else
      p weather_event.errors.full_messages
    end







  end
end
