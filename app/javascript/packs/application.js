import "bootstrap";
import { datenovo } from './test';
import { playernovo } from './player_two';
import { initSweetalert } from '../plugins/init_sweetalert';

datenovo();
playernovo();

initSweetalert('#MusicIcon', {
  title: "You library is empty",
  text: "You don’t have any songs yet. To play songs, import them first",
  icon: "info",
  buttons: ["import", "ok"],
  closeOnClickOutside: true
});




