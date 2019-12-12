class UsiczPlayer {
  constructor(element) {
    this.element = element
    this.controls = this.queryControls()
    this.playing = false

    this.initButtonHandlers();
  }

  switchSong(song) {
    window.players.youtube.loadVideoById(song.id)
    this.currentSong = song

    this.playSong()
    this.highlightCurrentSong()
  }

  nextSong() {
    const currentSongRow = document.querySelector(`tr[data-id='${this.currentSong.id}']`)
    const nextSongRow = currentSongRow.nextElementSibling
    nextSongRow.querySelector('td').click()
  }

  previousSong() {
    const currentSongRow = document.querySelector(`tr[data-id='${this.currentSong.id}']`)
    const previousSongRow = currentSongRow.previousElementSibling
    previousSongRow.querySelector('td').click()
  }

  playSong() {
    window.players.youtube.playVideo()
    this.element.classList.add('playing')
    this.playing = true
    this.updateTrackBar()
    document.getElementById("artistId").innerHTML = this.currentSong.artist + ` - `
    document.getElementById("trackId").innerHTML = this.currentSong.title
  }

  pauseSong() {
    window.players.youtube.pauseVideo()
    this.element.classList.remove('playing')
    this.playing = false
  }

  // private

  highlightCurrentSong() {
    const songRows = document.querySelectorAll('.track-list-row')
    songRows.forEach((songRow) => { songRow.classList.remove('playing') })

    const currentSongRow = document.querySelector(`tr[data-id='${this.currentSong.id}']`)
    currentSongRow.classList.add('playing')
  }

  updateTrackBar() {
    const duration = players.youtube.getDuration()
    const currentTime = players.youtube.getMediaReferenceTime()
    const currentPercentage = ((currentTime * 100) / duration) || 0

    this.controls.trackBar.style.width = `${currentPercentage}%`

    if(this.playing) setTimeout(() => { this.updateTrackBar() }, 500)
  }

  queryControls() {
    return {
      play: this.element.querySelector('.u-player-play'),
      pause: this.element.querySelector('.u-player-pause'),
      previous: this.element.querySelector('.u-player-previous'),
      next: this.element.querySelector('.u-player-next'),
      trackBar: this.element.querySelector('.progress-purple')
    }
  }

  initButtonHandlers() {
    this.controls.play.addEventListener('click', () => { this.playSong() })
    this.controls.pause.addEventListener('click', () => { this.pauseSong() })
    this.controls.previous.addEventListener('click', () => { this.previousSong() })
    this.controls.next.addEventListener('click', () => { this.nextSong() })
  }
}

const initUsiczPlayer = () => {
  const usiczPlayer = document.querySelector('.usicz-player')
  if(usiczPlayer) {
    window.uPlayer = new UsiczPlayer(usiczPlayer)
  }
}

export { initUsiczPlayer }
