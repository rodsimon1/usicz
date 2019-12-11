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

  private

  def empty_song
    Song.new(title: "Empty Playlist", artist: "-", album: "-", genre: "-")
  end
end
