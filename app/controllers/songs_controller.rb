class SongsController < ApplicationController
  def index
    @songs = Song.all
    @songs = [empty_song] if @songs.empty?
  end

  def destroy
    @song = Song.find(params[:id])
    @song.destroy

    respond_to do |format|
      format.js
    end
  end

  def clear_playlist
    current_user.songs.destroy_all
    redirect_to songs_path
  end

  private

  def empty_song
    Song.new(title: "Empty Playlist", artist: "-", album: "-", genre: "-")
  end
end
