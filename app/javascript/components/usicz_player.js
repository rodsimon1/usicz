class UsiczPlayer {
  constructor(element) {
    this.element = element
    this.buttons = this.queryButtons()

    this.initButtonHandlers();
  }

  switchSong(song) {
    window.players.youtube.loadVideoById(song.id)
    this.currentSong = song

    this.playSong()
    this.highlightCurrentSong()
  }

  playSong() {
    window.players.youtube.playVideo()
    this.element.classList.add('playing')
    document.getElementById("artistId").innerHTML = this.currentSong.artist + ` - `
    document.getElementById("trackId").innerHTML = this.currentSong.title
  }

  pauseSong() {
    window.players.youtube.pauseVideo()
    this.element.classList.remove('playing')
  }

  highlightCurrentSong() {
    const songRows = document.querySelectorAll('.track-list-row')
    songRows.forEach((songRow) => { songRow.classList.remove('playing') })

    const currentSongRow = document.querySelector(`tr[data-id='${this.currentSong.id}']`)
    currentSongRow.classList.add('playing')
  }
  // private

  queryButtons() {
    return {
      play: this.element.querySelector('.u-player-play'),
      pause: this.element.querySelector('.u-player-pause'),
      previous: this.element.querySelector('.u-player-previous'),
      next: this.element.querySelector('.u-player-next')
    }
  }

  initButtonHandlers() {
    this.buttons.play.addEventListener('click', () => { this.playSong() })
    this.buttons.pause.addEventListener('click', () => { this.pauseSong() })
  }
}

const initUsiczPlayer = () => {
  const usiczPlayer = document.querySelector('.usicz-player')
  if(usiczPlayer) {
    window.uPlayer = new UsiczPlayer(usiczPlayer)
  }
}

export { initUsiczPlayer }
