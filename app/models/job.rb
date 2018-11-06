class Job < ApplicationRecord
  belongs_to :shoveler, optional: true
  belongs_to :residence
end
