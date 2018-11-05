class Job < ApplicationRecord
  belongs_to :shoveler
  belongs_to :residence
end
