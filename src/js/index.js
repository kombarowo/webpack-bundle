import '../assets/_sprite.svg';
import '../styles/style.scss';
import scrollAnimate from "./modules/scrollAnimate";
import initAnchors from "./modules/anchors";
import initHomeButton from "./modules/homeButton";

window.addEventListener('DOMContentLoaded', function () {
  scrollAnimate();
  initAnchors();
  initHomeButton('.button--to-home');
})