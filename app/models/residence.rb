class Residence < ApplicationRecord
  belongs_to :home_owner
  has_many :driveways
  has_many :jobs
  has_many :shovelers, through: :jobs
end
