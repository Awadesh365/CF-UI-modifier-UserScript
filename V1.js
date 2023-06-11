// ==UserScript==
// @name         Hide Codeforces Sidebar and center problem statement
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hide the sidebar and center the problem statement on the Codeforces website
// @match        https://codeforces.com/*
// @grant        none
// ==/UserScript==
(function () {
    'use strict';
    var sidebar = document.getElementById("sidebar");
    var problemindexholder = document.getElementsByClassName("problemindexholder");

    if (window.matchMedia("(max-width: 600px)").matches) {
        sidebar.style.display = "none";
        for (var i = 0; i < problemindexholder.length; i++) {
            problemindexholder[i].style.width = "100%";
            problemindexholder[i].style.margin = "0";
        }
    } else {
        if (window.location.href !== "https://codeforces.com/problemset") {
            sidebar.style.display = "none";
        }
        for (var j = 0; j < problemindexholder.length; j++) {
            problemindexholder[j].style.width = "135%";
            problemindexholder[j].style.margin = "0 auto";
        }
    }
    window.addEventListener("resize", function () {
        if (window.matchMedia("(max-width: 600px)").matches) {
            sidebar.style.display = "none";
            for (var i = 0; i < problemindexholder.length; i++) {
                problemindexholder[i].style.width = "100%";
                problemindexholder[i].style.margin = "0";
            }
        } else {
            if (window.location.href !== "https://codeforces.com/problemset") {
                sidebar.style.display = "none";
            }
            for (var j = 0; j < problemindexholder.length; j++) {
                problemindexholder[j].style.width = "135%";
                problemindexholder[j].style.margin = "0 auto";
            }
        }
    });
})();

