import "bootstrap";

// import { datenovo } from './test';  // LATER ON THIS LINE CAN BE DELETED
import { playernovo } from './player_two';  // LATER ON THIS LINE CAN BE DELETED

import { initSmoothscroll } from '../plugins/init_smoothscroll';
import { progressMoveInit } from '../components/progressMoveInit';
import { initSweetalert } from '../plugins/init_sweetalert';
import { SweetalertDelete } from '../plugins/init_sweetalert';
import { trackListRowInit } from '../components/yt-player';
import { loaderHandledInit } from '../components/loaderHandledInit';

// datenovo();  // LATER ON THIS LINE CAN BE DELETED
playernovo();  // LATER ON THIS LINE CAN BE DELETED
initSmoothscroll();
progressMoveInit();

trackListRowInit();
loaderHandledInit();


// SWEETALERT TRIGGERS
initSweetalert('#MusicIcon', {
  title: "You library is empty",
  text: "You don’t have any songs yet.\n To play songs, import them first :)",
  icon: "info",
  buttons: {
    import: {
      text: "Import now!",
      value: true,
    },
    ok: {
      text: "Ok",
      value: false,
    }
  },
  closeOnClickOutside: true
}, (value) => {
  if (value) {
    window.location.href = document.querySelector("#MusicIcon").dataset.link;
  }
});

SweetalertDelete('.trashIcon', {
  title: "You are about to delete this song!",
  text: "Are you sure?",
  icon: "warning",
  buttons: {
    delete: {
      text: "Yes, delete",
      value: true,

    },
    no: {
      text: "Cancel",
      value: false,
    }
  },
  closeOnClickOutside: true
});
