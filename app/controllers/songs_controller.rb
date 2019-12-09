class SongsController < ApplicationController
  def index
    @songs = Song.all
    @songs = [empty_song] if @songs.empty?
  end

  def destroy
    @song = Song.find_by_id(params[:id])
    @song.destroy

    redirect_to songs_path
  end

  private

  def empty_song
    Song.new(title: "Song title", artist: "Song Artist", album: "Song Album", genre: "Song Genre")
  end
end
