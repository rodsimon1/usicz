# Returns list of songs from a given playlist-url
class DeezerPlaylistImportService
  BASE_URL = 'https://api.deezer.com/playlist/'

  def initialize(playlist_url, user_id)
    @playlist_id = playlist_url.gsub(/.*(list\/)/, "")
    @platform = Platform.find_by_name('Deezer')
    @user_id = user_id
  end

  def call
    # take the pl url
    response = HTTParty.get(BASE_URL + @playlist_id)
    tracks = response['tracks']['data']
    @songs = []
    # iterate over the items
    tracks.each do |song_item|
      title = song_item['title']
      artist = song_item['artist']['name']
      track_id = song_item['id']
      # binding.pry
      # save the created songs to DB
      @songs << Song.create!(title: title, artist: artist, external_id: track_id, platform: @platform, user_id: @user_id)
    end
  end
end
