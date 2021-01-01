"use strict";
var toggles = document.querySelectorAll('.toggle');
var good = document.querySelector('#good');
var cheep = document.querySelector('#cheep');
var fast = document.querySelector('#fast');
function doTheTrick(theClickedOne) {
    if (good.checked && cheep.checked && fast.checked) {
        if (good === theClickedOne) {
            fast.checked = false;
        }
        if (cheep === theClickedOne) {
            good.checked = false;
        }
        if (fast === theClickedOne) {
            cheep.checked = false;
        }
    }
}
toggles.forEach(function (toggle) {
    toggle.addEventListener('change', function (e) { return doTheTrick(e.target); });
});
