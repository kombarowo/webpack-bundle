import '../assets/_sprite.svg';
import '../styles/style.scss';
import scrollAnimate from "./modules/scrollAnimate";
import initAnchors from "./modules/anchors";

window.addEventListener('DOMContentLoaded', function () {
  scrollAnimate();
  initAnchors();
})