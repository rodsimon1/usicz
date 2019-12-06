class PlaylistImportsController < ApplicationController
  def new
  end

  def create
    @platform = Platform.find(playlist_imports[:platform_id])
    platform_service = @platform.import_service.new(playlist_imports[:playlist_url], current_user.id)
    platform_service.call
    redirect_to songs_path
  end

  private

  def playlist_imports
    params.require(:playlist_imports).permit(:platform_id, :playlist_url)
  end
end
