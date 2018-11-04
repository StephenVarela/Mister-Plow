class User < ApplicationRecord
  has_one :shoveler
  has_one :home_owner
end
