class UsiczPlayer {
  constructor(element) {
    this.element = element
    this.buttons = this.queryButtons()

    this.initButtonHandlers();
  }

  switchSong(song) {
    window.players.youtube.loadVideoById(song.id)
    this.playSong()
  }

  playSong() {
    window.players.youtube.playVideo()
    this.element.classList.add('playing')
  }

  pauseSong() {
    window.players.youtube.pauseVideo()
    this.element.classList.remove('playing')
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
