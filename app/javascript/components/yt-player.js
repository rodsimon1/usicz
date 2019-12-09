const trackListRowInit = () => {
  // Load the IFrame Player API code asynchronously.

  const changesong = (songId) => {
    const player = document.getElementById("youtub");
    player.src = `https://www.youtube.com/embed/${songId}`;
  };

  const youtubeListRows = document.querySelectorAll('.track-list-row.youtube');
                                              // alterar aqui o tracklist para algo mais especifico
  youtubeListRows.forEach((trackRow) => {
    trackRow.addEventListener('click', (event) => {
      const currentRow = event.currentTarget;
      const externalId = currentRow.dataset.id;
      console.log("Playing:", externalId)
      // changesong(externalId);

      window.players.youtube.loadVideoById(externalId);
    })
  });
};

export { trackListRowInit };
