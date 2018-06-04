'use strict';

function resizeImage(id, dimensions) {
    $(id).css('height', dimensions.height);
    $(id).css('width', dimensions.width);    
}