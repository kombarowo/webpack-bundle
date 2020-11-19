import '../assets/_sprite.svg';
import '../styles/style.scss';
import './s-lib/lib';
import scrollAnimate from "./modules/scrollAnimate";
import initAnchors from "./modules/anchors";
import initHomeButton from "./modules/homeButton";
import Request from "./services/request";

window.addEventListener('DOMContentLoaded', function () {
  scrollAnimate();
  initAnchors();
  initHomeButton('.button--to-home');

  //test requesting
  new Request('https://jsonplaceholder.typicode.com/todos/1')
    .getData()
    .then(resp => resp.json())
    .then(json => console.log(json));

  new Request('https://jsonplaceholder.typicode.com/posts/')
    .postData({title: 'Helloo!!!!'}, 'json')
    .then(resp => resp.json())
    .then(json => console.log(json));
});

