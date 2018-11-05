class HomeOwner < ApplicationRecord
  belongs_to :user
  has_many :residences

  validate :has_valid_user_profile

  def has_valid_user_profile
    if(self.user.id)

    else
      errors.add(:user, "Must be valid")
    end
  end
  
end
