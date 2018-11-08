class Residence < ApplicationRecord
  belongs_to :home_owner
  has_many :driveways
  has_many :jobs
  has_many :shovelers, through: :jobs


  validates :street_name, presence: true
  validates :city_name, presence: true
  validates :postal_code, presence: true
  validates :country, presence: true

end
