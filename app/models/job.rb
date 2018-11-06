class Job < ApplicationRecord
  belongs_to :shoveler, optional: true
  belongs_to :residence

  validates :residence_id, presence: true
  validates :price, presence: true
  validates :scheduled_time, presence: true
end
