class Platform < ApplicationRecord
  has_many :songs

  validates :name, presence: true

  def import_service
    "#{name}PlaylistImportService".constantize
  end
end
