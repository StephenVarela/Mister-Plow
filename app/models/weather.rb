class Weather < ApplicationRecord
  serialize :forecast, Array

end
