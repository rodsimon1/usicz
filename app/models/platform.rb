class Platform < ApplicationRecord
  has_many :songs

  validates :name, presence: true
end
