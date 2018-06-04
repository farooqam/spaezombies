'use strict';

$(window).load(function() {
    var ratio;
    var newWidth;
    
    var div = $(window);
    
    ratio = (div.width() / 1024);
    newWidth = div.width();

    setup(ratio);
});