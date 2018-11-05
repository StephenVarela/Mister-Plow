class Residence < ApplicationRecord
  belongs_to :home_owner
  has_many :driveways
end
