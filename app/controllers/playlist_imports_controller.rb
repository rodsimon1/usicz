class PlaylistImportsController < ApplicationController
  def new
    @playlist_import = PlaylistImport.new
  end

  def create
    @playlist_import = PlaylistImport.new(playlist_import_params)

    if @playlist_import.valid?
      @platform = Platform.find(playlist_import_params[:platform_id])
      platform_service = @platform.import_service.new(playlist_import_params[:playlist_url], current_user.id)
      platform_service.call
      redirect_to songs_path(imported: 'success')
    else
      render :new
    end
  end

  private

  def playlist_import_params
    params.require(:playlist_import).permit(:platform_id, :playlist_url)
  end
end
