class User < ApplicationRecord
  authenticates_with_sorcery!
  has_many :shovelers
  has_many :home_owners

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :street_name, presence: true
  validates :city_name, presence: true
  validates :postal_code, presence: true
  validates :country, presence: true
  validates :email, presence: true
  validates :email, uniqueness: true

  validates :primary_contact_number, presence: true

  validates :password, presence: true
  validates :password, confirmation: true

end
