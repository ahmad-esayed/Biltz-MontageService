

// Show-hide links
var barsIcon = document.querySelector("header .container div");
var links = document.querySelector("header .container div .links");


// document.onclick = () => {
//     links.style.display = "none";
// }

barsIcon.onclick = function () {

    if (links.style.display === "none") {
        links.style.display = "block";
    } else {
        links.style.display = "none";
    }
};



// slide between images for Electrical Panels and Tools

let arrowR = document.querySelectorAll(".elc-panel .container i.right");
let arrowL = document.querySelectorAll(".elc-panel .container i.left");
let myPanel = document.querySelector(".elc-panel .container .panel .pan-imgs");
let myTools = document.querySelector(".elc-panel .container .tools .tools-imgs");

arrowR[0].onclick = () => myPanel.scrollBy({ left: 500, top: 0, behavior: "smooth" });
arrowL[0].onclick = () => myPanel.scrollBy({ left: -500, top: 0, behavior: "smooth" });

arrowR[1].addEventListener("click", () => myTools.scrollBy({ left: 660, top: 0, behavior: "smooth" }));
arrowL[1].addEventListener("click", () => myTools.scrollBy({ left: -660, top: 0, behavior: "smooth" }));

