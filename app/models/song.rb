class Song < ApplicationRecord
  belongs_to :user
  belongs_to :platform

  validates :title, :external_id, presence: true

  def url
    "https://www.youtube.com/watch?v=#{external_id}"
  end
end
