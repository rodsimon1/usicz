import "bootstrap";

// import { datenovo } from './test';  // LATER ON THIS LINE CAN BE DELETED
// import { playernovo } from './player_two';  // LATER ON THIS LINE CAN BE DELETED

import { initSweetalert } from '../plugins/init_sweetalert';
import { trackListRowInit } from '../components/yt-player';

// datenovo();  // LATER ON THIS LINE CAN BE DELETED
// playernovo();  // LATER ON THIS LINE CAN BE DELETED

initSweetalert('#MusicIcon', {
  title: "You library is empty",
  text: "You don’t have any songs yet. To play songs, import them first",
  icon: "info",
  buttons: ["import", "ok"],
  closeOnClickOutside: true
});

trackListRowInit();
