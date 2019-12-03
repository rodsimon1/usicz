class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :title
      t.string :artist
      t.string :album
      t.string :genre
      t.string :url
      t.references :user, foreign_key: true
      t.references :platform, foreign_key: true

      t.timestamps
    end
  end
end
