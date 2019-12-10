const trackListRowInit = () => {
  const footerPlayer = document.querySelector('.usicz-player');
  const youtubeListRows = document.querySelectorAll('.track-list-row.youtube');

  youtubeListRows.forEach((trackRow) => {
    const tableDisplays = trackRow.querySelectorAll('td.playable')
    tableDisplays.forEach((td) => {
      td.addEventListener('click', (event) => {
        const externalId = trackRow.dataset.id;
        const platform = trackRow.dataset.platform;

        window.uPlayer.switchSong({ id: externalId, platform: platform })
      })
    })
  });
};

export { trackListRowInit };
