# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts 'Cleaning database...'
Song.destroy_all
Platform.destroy_all
User.destroy_all

puts 'Creating users...'
rodrigo = User.create(email: 'rodrigo@gmail.com', password: '123456')
mahan = User.create(email: 'mahan@gmail.com', password: '123456')
camille = User.create(email: 'camille@gmail.com', password: '123456')
daniel = User.create(email: 'daniel@gmail.com', password: '123456')

puts 'Creating platforms...'
youtube = Platform.create(name: 'Youtube')
soundcloud = Platform.create(name: 'Soundcloud')

puts 'Creating songs...'
@song_1 = Song.create(title: "Baltimore", artist: "Nina Simone", album: "Sinnerman", genre: "Jazz", external_id: "EJIVV-mnPyY", user_id: camille.id, platform_id: youtube.id)
song_2 = Song.create(title: "Don't go breaking my heart", artist: "Elton John", album: "Crocodile Rock", genre: "Pop Rock", external_id: "z0qW9P-uYfM", user_id: rodrigo.id, platform_id: soundcloud.id)
song_3 = Song.create(title: "Let the music play", artist: "Barry White", album: "Harlem 1965", genre: "Soul", external_id: "1SL9-p-m0gs", user_id: mahan.id, platform_id: soundcloud.id)
song_4 = Song.create(title: "Lingua", artist: "Caetano Veloso e Elza Soares", album: "Velô", genre: "Hip Hop", external_id: "tX7cqBreLUY", user_id: daniel.id, platform_id: youtube.id)




