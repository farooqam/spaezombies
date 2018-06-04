'use strict';

function setup(ratio) {
    resizeImage('#gun_image', {height: 150 * ratio, width: 133 * ratio});
    resizeImage('#reload_image', {height: 90 * ratio, width: 200 * ratio});
    resizeImage('#score_image', {height: 100 * ratio, width: 235 * ratio});
}