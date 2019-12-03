# Returns list of songs from a given playlist
class YoutubePlaylistImportService
  BASE_URL = 'https://www.googleapis.com/youtube/v3/playlistItems'

  # https://www.youtube.com/watch?v=xnKhsTXoKCI&list=PLenUrOlreSp6EXV4PJWLEvLIdnacjn-2w
  def initialize(playlist_url)
    @playlist_id = playlist_url.gsub(/.*(&list=)/, "")
    @platform = Platform.find_by_name('Youtube')
    @query = "?part=snippet,contentDetails&playlistId=#{@playlist_id}&key=AIzaSyBYH0dPlpMxGXyo-JzTOZUUVEi8hj2L574"
  end

  def call
    # take the pl url
    # call the api with it
    response = HTTParty.get(BASE_URL + @query)
    items = response['items']
    songs = []
    # iterate over the items
    items.each do |song_item|
      title = song_item['snippet']['title']
      video_id = song_item['contentDetails']['videoId']
      songs << Song.new(title: title, external_id: video_id, platform: @platform)
    end
    # instantiate songs for each
    p songs
  end

  private

  def playlist_id
    @playlist_url.gsub(/.*(list=)/, "")
  end
end
