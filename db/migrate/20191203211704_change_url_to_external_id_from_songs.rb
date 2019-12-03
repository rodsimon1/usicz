class ChangeUrlToExternalIdFromSongs < ActiveRecord::Migration[5.2]
  def change
    rename_column :songs, :url, :external_id
  end
end
