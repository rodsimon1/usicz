const trackListRowInit = () => {
  // Load the IFrame Player API code asynchronously.

  const changesong = (songId) => {
    const player = document.getElementById("youtub");
    player.src = `https://www.youtube.com/embed/${songId}`;
  };

  const trackListRows = document.querySelectorAll('.track-list-row');

  trackListRows.forEach((trackRow) => {
    trackRow.addEventListener('click', (event) => {
      const currentRow = event.currentTarget;
      const externalId = currentRow.dataset.id;
      console.log("Playing:", externalId)
      // changesong(externalId);
      player.loadVideoById(externalId)
    })
  });
};

export { trackListRowInit };
