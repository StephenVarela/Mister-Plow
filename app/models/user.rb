class User < ApplicationRecord
  authenticates_with_sorcery!
  has_many :shovelers
  has_many :home_owners

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :street_name, presence: true
  validates :city_name, presence: true
  validates :postal_code, presence: true
  validates :country, presence: true
  validates :email, presence: true
  validates :email, uniqueness: true

  validates :primary_contact_number, presence: true

  validates :password, presence: true
  validates :password_confirmation, presence: true
  validates_confirmation_of :password
  validates :password, confirmation: true

  def get_weather_forecast

    # return Weather.where(city_name: "Toronto")
    return Weather.where(city_name: "#{self.city_name}").sort_by &:created_at
  end

  def create_forecast_array
    weather = get_weather_forecast.last

    data = {}

    #creates hash with unque keys
    weather.forecast.each do |weather_sample|
      date = weather_sample["datetime"].split(' ')[0]
      if !data.key?(date)
        data[date] = []
      end
    end

    #loop through data hash and add weather element if the datetime == the hash key
    data.each do |key, data_element|
      weather.forecast.each do |weather_sample|
        if(weather_sample["datetime"].split(' ')[0] == key)
          data_element << weather_sample
        end
      end
    end

    return data
  end

end
