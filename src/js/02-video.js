
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// Додаємо бібліотеку Vimeo
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

persistedCurrentTime ();

player.on('timeupdate', throttle(timeupdateVideo, 1000));

// Зберігаємо час відтворення відео в локальному сховищі
function timeupdateVideo (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
}

// Збереження часу відтворення при перезавантаженні сторінки
function persistedCurrentTime () {
    let currentTime = localStorage.getItem('videoplayer-current-time');

    if (currentTime) {
        player.setCurrentTime(currentTime).then(function(currentTime) {
           return currentTime;
        })
    }
}