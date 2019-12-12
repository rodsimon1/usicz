namespace :songs do
  desc "TODO"
  task destroy_all: :environment do
    Song.destroy_all
  end
end
