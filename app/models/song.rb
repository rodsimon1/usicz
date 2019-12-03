class Song < ApplicationRecord
  belongs_to :user
  belongs_to :platform

  validates :title, :artist, :url, presence: true
end
