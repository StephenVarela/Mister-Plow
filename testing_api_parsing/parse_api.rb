require 'pry'
require 'httparty'


location = 'Toronto'

response = HTTParty.get("http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=#{ENV['WEATHERAPI_KEY']}&q=#{location}")
binding.pry


#code must be 200
#response["list"].each do |item|
#puts item
#end
