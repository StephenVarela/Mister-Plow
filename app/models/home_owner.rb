class HomeOwner < ApplicationRecord
  belongs_to :user
  has_many :residences
end
