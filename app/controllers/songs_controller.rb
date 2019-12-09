class SongsController < ApplicationController
  def index
    @songs = Song.all
    @songs = [empty_song] if @songs.empty?
  end

  def destroy
    @song = Song.find(params[:id])
    @song.destroy

    redirect_to songs_path
  end

  private

  def empty_song
    Song.new(title: "Empty Playlist", artist: "-", album: "-", genre: "-")
  end
end
