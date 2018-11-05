class Shoveler < ApplicationRecord
  belongs_to :user
  has_many :jobs
  has_many :residences, through: :jobs
end
