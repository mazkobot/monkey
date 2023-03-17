// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://gist.github.com/mazkobot*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if (window.location.href == 'https://gist.github.com/mazkobot'){

        var urls = document.querySelectorAll("div.gist-snippet a");
        console.log(urls);

        for (var url in urls) {
            var href = urls[url].href;
            if (href && href.length == 65){
                console.log ( href );
                window.location.href = href;}

        }
    } else {
        document.querySelector("#gist-pjax-container details > ul > li:nth-child(2) > form").submit();
    }
    // Your code here...
})();
