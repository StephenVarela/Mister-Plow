require 'pry'
require 'httparty'


location = 'Toronto'

response = HTTParty.get("http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=#{ENV['WEATHERAPI_KEY']}&q=#{location}")
binding.pry


#weather event
#id
#city name
#weather forcast (array of hashes)




#code must be 200


#response["list"].each do |item|
#
#puts item["weather"]
#end

#response[city]

#list items have
#temp
#temp-min
#temp-max
