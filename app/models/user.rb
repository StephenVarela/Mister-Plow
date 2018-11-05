class User < ApplicationRecord
  authenticates_with_sorcery!
  has_many :shovelers
  has_many :home_owners
end
