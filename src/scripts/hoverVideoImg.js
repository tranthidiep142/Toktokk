import classNames from 'classnames/bind';
const cx = classNames.bind();

var video = document.getElementsById(cx('video'));
var image = document.getElementsById(cx('video'));

image.onmouseover = function () {
    video.style.display = 'block';
    image.style.display = 'none';
    video.play();
    setTimeout(function () {
        video.pause();
        video.currentTime = 0;
        video.style.display = 'none';
        image.style.display = 'block';
    }, 3000);
};
