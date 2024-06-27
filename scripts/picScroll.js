// Gracefully degrade logging
if (!window.console) console = {};
console.log = console.log || function(){};
console.warn = console.warn || function(){};
console.error = console.error || function(){};
console.info = console.info || function(){};


var divList = new Array();

var bodyElem;

var posForObj = function(obj) {
    if (($(window).height() - obj.outerHeight()) > 0) {
        var pos = obj.offset().top - 1/2 * ($(window).height() - obj.outerHeight());
    } else {
        var pos = obj.offset().top - 1 * ($(window).height() - obj.outerHeight());
    }
    return Math.round(pos);
}


var getII = function() {
    //var curPos = $("html,body").scrollTop();
    var curPos = bodyElem.scrollTop();
    var bestII = -.5;
    for (var ii = 0; ii < divList.length; ii+=1) {
        var posThisObj = posForObj(divList[ii]);
        //console.log('evaluating ' + ii + ', ' + curPos + ' vs. ' + posThisObj);
        if (curPos > (posThisObj - 10) && curPos < (posThisObj + 10)) {
            bestII = ii;
            break;              // We're at an image
        } else if (curPos < posThisObj - 10) {
            break;              // Already past
        } else {
            bestII = ii + .5;   // We're at least between ii and ii+1
        }
    }
    //console.log('  location: ' + bestII);
    return bestII;
}


$(document).ready(function() {
    // JBY broken in jquery 1.9
    // re-enabled next 5 lines
    if (($.browser.safari) || ($.browser.chrome)) {
        bodyElem = $("body")
    } else {
        bodyElem = $("html,body")
    }
    //bodyElem = $("html,body")

    $('p.story, div.flickr_img, div.flickr_vid').each(function() {
        divList.push($(this));
    })

    $(document).bind(
        "keypress",
        "j",
        function (evt) {
            curII = getII();
            nextII = Math.min(Math.ceil(curII + .1), divList.length-1);
            $("html,body").scrollTop(posForObj(divList[nextII]));
            return false;
        });

    $(document).bind(
        "keypress",
        "k",
        function (evt) {
            curII = getII();
            if (curII <= 0) {
                $("html,body").scrollTop(0);
            } else {
                nextII = Math.max(0, Math.floor(curII - .1));
                $("html,body").scrollTop(posForObj(divList[nextII]));
            }
            return false;
        });

});
