import "bootstrap";

import { initSmoothscroll } from '../plugins/init_smoothscroll';
import { initSweetalert } from '../plugins/init_sweetalert';
import { SweetalertDelete } from '../plugins/init_sweetalert';
// import { SweetalertClearAll } from '../plugins/init_sweetalert';
import { playlistImported } from '../plugins/init_sweetalert';
import { trackListRowInit } from '../components/yt-player';
import { loaderHandledInit } from '../components/loaderHandledInit';

import { initUsiczPlayer } from '../components/usicz_player';

initSmoothscroll();
loaderHandledInit();
trackListRowInit();

initUsiczPlayer();


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

// SweetalertClearAll('.clear-button', {
//   title: "You are about to clear your entire playlist!",
//   text: "This action cannot be undone. Are you sure?",
//   icon: "warning",
//   buttons: {
//     delete: {
//       text: "Yes, clear everything!",
//       value: true,

//     },
//     no: {
//       text: "Cancel",
//       value: false,
//     }
//   },
//   closeOnClickOutside: true
// });

playlistImported('#display-import-message', {
  title: "Success!",
  text: "You have imported a playlist!",
  button: "Awesome!",
  icon: "success",
  timer: 2000,
  closeOnClickOutside: true
} );
