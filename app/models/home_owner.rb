class HomeOwner < ApplicationRecord
  belongs_to :user
  has_many :residences

  validate :has_valid_user_profile

  def has_valid_user_profile
    unless self.user.id
      errors.add(:user, "Must be valid")
    end
  end
  
end
