'use strict';

function rotateGun(e) {
    var xPct = e.clientX / newWidth;
    var rotateAmt = -15 + (xPct * 50);

    $('#gun_image').css('transform', 'rotate(' + rotateAmt + 'deg');
}