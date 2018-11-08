class User < ApplicationRecord
  authenticates_with_sorcery!
  has_one :shoveler
  has_one :home_owner

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

  def self.get_weather_forecast

    return Weather.where(city_name: "Toronto")
    # return Weather.where(city_name: "#{self.city_name}")
  end

  def self.create_forecast_array
    forecast = get_weather_forecast

    day_1 = []
    day_2 = []
    day_3 = []
    day_4 = []
    day_5 = []

    puts "========================="

    forecast.each.with_index do |sample, i|
      #puts sample
    end

    puts "========================="

  end

end
