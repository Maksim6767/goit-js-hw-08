
import throttle from 'lodash.throttle';
import Player from "@vimeo/player";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_TIME = 'videoplayer-current-time';
let parsedTime;

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
 localStorage.setItem(CURRENT_TIME, seconds);
}

player.setCurrentTime(localStorage.getItem(CURRENT_TIME));
setCurrentTime();

function setCurrentTime() {
 if (localStorage.getItem(CURRENT_TIME)) {
   parsedTime = JSON.parse(localStorage.getItem(CURRENT_TIME));
   console.log(parsedTime);
   player.setCurrentTime(parsedTime);
 } else {
   !player.setCurrentTime(parsedTime);
 }
}