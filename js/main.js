'use strict';

var newWidth;

$(window).load(function() {
    var ratio;    
    var div = $(window);
    
    ratio = (div.width() / 1024);
    newWidth = div.width();

    setup(ratio);
});