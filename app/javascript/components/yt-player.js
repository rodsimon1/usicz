const trackListRowInit = () => {
  // Load the IFrame Player API code asynchronously.

  const changesong = (songId) => {
    const player = document.getElementById("youtub");
    player.src = `https://www.youtube.com/embed/${songId}`;
  };

  const youtubeListRows = document.querySelectorAll('.track-list-row.youtube');

  youtubeListRows.forEach((trackRow) => {
    const tableDisplays = trackRow.querySelectorAll('td.playable')
    tableDisplays.forEach((td) => {
      td.addEventListener('click', (event) => {
        const externalId = trackRow.dataset.id;
        console.log("Playing:", externalId)
        // changesong(externalId);
        window.players.youtube.loadVideoById(externalId);
      })
    })
  });
};

export { trackListRowInit };
