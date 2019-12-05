# Returns list of songs from a given playlist-url
class YoutubePlaylistImportService
  BASE_URL = 'https://www.googleapis.com/youtube/v3/playlistItems'
  KEY = 'AIzaSyA8aJ6Pdxab253QXFGAoTpp6GOui9z-bkE'
  TRACK_URL = "https://www.googleapis.com/youtube/v3/videos"

  def initialize(playlist_url, user_id)
    @playlist_id = playlist_url.gsub(/.*(&list=)/, "")
    @platform = Platform.find_by_name('Youtube')
    @query = "?part=snippet,contentDetails&maxResults=50&playlistId=#{@playlist_id}&key="
    @user_id = user_id
  end

  def call
    # take the pl url
    response = HTTParty.get(BASE_URL + @query + KEY)
    items = response['items']
    @songs = []
    # iterate over the items
    items.each do |song_item|
      title = song_item['snippet']['title']
      video_id = song_item['contentDetails']['videoId']
      track_query = "?part=topicDetails&id=#{video_id}&key="
      # use the videoId to get the genre through iteration
      track_response = HTTParty.get(TRACK_URL + track_query + KEY)
      if track_response['items'][0] != nil
        if track_response['items'][0]['topicDetails'] != nil
          if track_response['items'][0]['topicDetails']['topicCategories'][0] != nil
            genre_links = track_response['items'][0]['topicDetails']['topicCategories']
            genres = genre_links.map { |genre_link| genre_link.gsub(/.*(wiki\/)/, "") }
            @genre = genres.reject{ |i| i=="Music"}.join(", ")
          end
          # save the created songs to DB
          @songs << Song.create!(title: title, genre: @genre, external_id: video_id, platform: @platform, user_id: @user_id)
        end
      end
    end
  end
end
