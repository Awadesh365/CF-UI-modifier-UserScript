## UserScript for Customization of Codeforces Website: Hide Sidebar, Center Problem Statement and much more.

**Step 1: Install Tampermonkey**

1. Go to the [Tampermonkey website](https://www.tampermonkey.net/).
2. Click on the "Download" button to download Tampermonkey for your browser.
3. Follow the installation instructions specific to your browser to install Tampermonkey.

**Step 2: Create a New Script**

1. Once Tampermonkey is installed, you should see its icon in your browser's toolbar.
2. Click on the Tampermonkey icon and select "Create a new script" from the menu.
3. The Tampermonkey script editor will open in a new tab.

**Step 3: Configure the Script**

1. Clear the template script from the editor.
2. Copy the script
```md
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
            if (currentUrl !== "https://codeforces.com/apiHelp") {
                if (currentUrl !== "https://codeforces.com/edu/courses") {
                    if (currentUrl !== "https://codeforces.com/gyms") {
                        if (currentUrl !== "https://codeforces.com/contests") {
                            if (currentUrl !== "https://codeforces.com/problemset") {
                                sidebar.style.display = "none";
                            }
                        }
                    }
                }
            }

            else {
                sidebar.style.display = "block";
            }

            for (let j = 0; j < problemindexholder.length; j++) {
                problemindexholder[j].style.width = "135%";
                problemindexholder[j].style.margin = "0 auto";
                check = true;
            }
            if (!check) {
                if (currentUrl !== "https://codeforces.com/apiHelp") {
                    if (currentUrl !== "https://codeforces.com/edu/courses") {
                        if (currentUrl !== "https://codeforces.com/gyms") {
                            if (currentUrl !== "https://codeforces.com/contests") {
                                if (currentUrl !== "https://codeforces.com/problemset") {
                                    for (let j = 0; j < problemindexholderPC.length; j++) {
                                        problemindexholderPC[j].style.width = "95%";
                                        problemindexholderPC[j].style.margin = "0 auto";
                                    }
                                }
                            }
                        }
                    }
                }
            }
            body.style.fontSize = "16px";
        }
    }

    adjustLayout();
    window.addEventListener("resize", adjustLayout);
})();

```

**Step 4: Save and Enable the Script**

1. Click on the "Save" button in the Tampermonkey script editor to save your changes.
2. Once saved, the script will be enabled by default. You can confirm this by checking the Tampermonkey menu.

**Step 5: Visit the Codeforces Website**

Open a new tab or window in your browser and navigate to the [Codeforces website](https://codeforces.com/).
The script will automatically run on the Codeforces website, hiding the sidebar and centering the problem statement based on the screen size.

**Step 6: Observe the Script in Action**

If your browser's window is wider than 600 pixels, the script will hide the sidebar, center the problem statement, and adjust the font size accordingly.

If your browser's window is narrower than 600 pixels, the script will hide the sidebar, center the problem statement, and adjust the font size accordingly.
