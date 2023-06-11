// ==UserScript==
// @name         Hide Codeforces Sidebar and center problem statement
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hide the sidebar and center the problem statement on the Codeforces website
// @match        https://codeforces.com/*
// @grant        none
// ==/UserScript==
(function () {
    var check = false;
    'use strict';
    const sidebar = document.getElementById("sidebar");
    const problemindexholder = document.getElementsByClassName("problemindexholder");
    const problemindexholderPC = document.getElementsByClassName("content-with-sidebar");
    const body = document.querySelector('body');
    let currentUrl = window.location.href;

    function adjustLayout() {
        if (window.matchMedia("(max-width: 600px)").matches) {
            sidebar.style.display = "none";
            for (let i = 0; i < problemindexholder.length; i++) {
                problemindexholder[i].style.width = "100%";
                problemindexholder[i].style.margin = "0";
            }
            body.style.fontSize = "14px";
        } else if (window.matchMedia("(max-width: 400px)").matches) {
            sidebar.style.display = "none";
            for (let i = 0; i < problemindexholder.length; i++) {
                problemindexholder[i].style.width = "100%";
                problemindexholder[i].style.margin = "0";
            }
            body.style.fontSize = "12px";
        } else {
            if (currentUrl !== "https://codeforces.com/contests") {
                if (currentUrl !== "https://codeforces.com/problemset") {
                    sidebar.style.display = "none";
                }
            } else {
                sidebar.style.display = "block";
            }
            for (let j = 0; j < problemindexholder.length; j++) {
                problemindexholder[j].style.width = "135%";
                problemindexholder[j].style.margin = "0 auto";
                check = true;
            }
            if (!check) {
                if (currentUrl !== "https://codeforces.com/problemset") {
                    for (let j = 0; j < problemindexholderPC.length; j++) {
                        problemindexholderPC[j].style.width = "95%";
                        problemindexholderPC[j].style.margin = "0 auto";
                    }
                }
            }
            body.style.fontSize = "16px";
        }
    }

    adjustLayout();
    window.addEventListener("resize", adjustLayout);
})();

