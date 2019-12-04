# Returns list of songs from a given playlist
class YoutubePlaylistImportService
  BASE_URL = 'https://www.googleapis.com/youtube/v3/playlistItems'
  KEY = 'AIzaSyBYH0dPlpMxGXyo-JzTOZUUVEi8hj2L574'
  TRACK_URL = "https://www.googleapis.com/youtube/v3/videos"

  # https://www.youtube.com/watch?v=xnKhsTXoKCI&list=PLenUrOlreSp6EXV4PJWLEvLIdnacjn-2w
  def initialize(playlist_url)
    @playlist_id = playlist_url.gsub(/.*(&list=)/, "")
    @platform = Platform.find_by_name('Youtube')
    @query = "?part=snippet,contentDetails&maxResults=50&playlistId=#{@playlist_id}&key="
  end

  def call
    # take the pl url
    # call the api with it
    response = HTTParty.get(BASE_URL + @query + KEY)
    items = response['items']
    songs = []
    # iterate over the items
    items.each do |song_item|
      title = song_item['snippet']['title']
      video_id = song_item['contentDetails']['videoId']
      track_query = "?part=topicDetails&id=#{video_id}&key="
      track_response = HTTParty.get(TRACK_URL + track_query + KEY)
=begin
      p track_response
      p 'track_response'
      p track_response['items']
      p "track_response['items']"
      p track_response['items'][0]
      p "track_response['items'][0]"
      p track_response['items'][0]['topicDetails']
      p "track_response['items'][0]['topicDetails']"
      p track_response['items'][0]['topicDetails']['topicCategories']
      p "track_response['items'][0]['topicDetails']['topicCategories']"
=end

      if track_response['items'][0] != nil
        if track_response['items'][0]['topicDetails'] != nil
          if track_response['items'][0]['topicDetails']['topicCategories'][0] != nil

            genre_links = track_response['items'][0]['topicDetails']['topicCategories']
            genres = genre_links.map { |genre_link| genre_link.gsub(/.*(wiki\/)/, "") }

            @genre = genres.reject{ |i| i=="Music"}.join(", ")
        end
          songs << Song.new(title: title, genre: @genre, external_id: video_id, platform: @platform)
        end
      end
      # songs.save
    end

    p songs
  end
end
