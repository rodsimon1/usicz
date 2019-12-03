class SongsController < ApplicationController
  def index
    @songs = Song.all
  end

  def destroy
    @song = Song.find(params[:id])
    @song.destroy

    # redirect_to songs_path
  end
end
