import '../assets/_sprite.svg'
import '../styles/style.scss'
import './polyfills/forEach'
import smoothscroll from 'smoothscroll-polyfill'
import scrollAnimate from "./modules/scrollAnimate"
import initAnchors from "./modules/anchors"
import initHomeButton from "./modules/homeButton"
import DropdownsBlock from './modules/dropdown';
import Tabs from './modules/tabs'
import Request from "./services/request"

window.addEventListener('DOMContentLoaded', function () {
  smoothscroll.polyfill()
  scrollAnimate()
  initAnchors()
  initHomeButton('.button-to-home')

  //test requesting
  // new Request('https://jsonplaceholder.typicode.com/todos/1')
  //   .getData()
  //   .then(resp => resp.json())
  //   .then(json => console.log(json))

  // new Request('https://jsonplaceholder.typicode.com/posts/')
  //   .postData({title: 'Helloo!!!!'}, 'json')
  //   .then(resp => resp.json())
  //   .then(json => console.log(json))
})