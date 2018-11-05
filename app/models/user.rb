class User < ApplicationRecord
  authenticates_with_sorcery!
  has_many :shovelers
  has_many :home_owners

  validates :password, confirmation: true
  validates :email, uniqueness: true
end
