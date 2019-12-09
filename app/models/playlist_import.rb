class PlaylistImport
  include ActiveModel::Model

  attr_accessor :platform_id, :playlist_url

  validates :platform_id, :playlist_url, presence: true
end
