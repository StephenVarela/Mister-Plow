class Job < ApplicationRecord
  belongs_to :shoveler, optional: true
  belongs_to :residence

  has_one_attached :confirmation_picture

  validates :residence_id, presence: true
  validates :price, presence: true
  validates :scheduled_time, presence: true
end

def attach_confirmation(picture)
  confirmation_picture.attach(picture)
end
