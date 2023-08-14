// function clickShowMeBelow() {

//     const showItemsBelowElements = document.querySelector("#sub-items-below");

//     if (showItemsBelowElements.classList.contains("hide")) {
//         showItemsBelowElements.classList.remove("hide");
//         showItemsBelowElements.classList.add("show");

//     } else {
//         showItemsBelowElements.classList.remove("show");
//         showItemsBelowElements.classList.add("hide");
//     }

// }

// function clickShowMeRight() {
//     const showItemsBelowElements = document.querySelector("#sub-items-below");
//     const showItemsRightElements = document.querySelector("#sub-items-in-right");

//     if (showItemsBelowElements.classList.contains("hide")) {
//         showItemsRightElements.classList.remove("with-feature");
//         showItemsRightElements.classList.add("without-feature");
//     } else {
//         showItemsRightElements.classList.add("with-feature");
//         showItemsRightElements.classList.remove("without-feature");
//     }

//     if (showItemsRightElements.classList.contains("hide")) {
//         showItemsRightElements.classList.remove("hide");
//         showItemsRightElements.classList.add("show");
//     } else {
//         showItemsRightElements.classList.remove("show");
//         showItemsRightElements.classList.add("hide");
//     }
// }


const btnMobile = document.getElementById("btn-mobile");


function toggleMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
}


btnMobile.addEventListener('click', toggleMenu);