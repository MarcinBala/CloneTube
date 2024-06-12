const wide_menu_wrapper = document.getElementById("wide-menu-container-wrapper");
const wide_menu = document.getElementById("nav-wide-menu-container");
const wide_menu_nav = document.getElementById("nav-wide-menu-container");
const menu_wrapper = document.getElementById("side-menu-container-wrapper");
const menu = document.getElementById("side-menu-container");
const overlay = document.getElementById("overlay");


window.addEventListener('resize', function(event) {
    wide_menu_wrapper.classList.remove("transition");
    hideSidemenu();
}, true);

//menu button
function toggleSidemenu() {
    if(document.documentElement.clientWidth < 1300) {
        //wide menu for small screens
        wide_menu_wrapper.classList.add("transition");
        if(wide_menu_wrapper.classList.contains("show")) {
            wide_menu_wrapper.classList.remove("show");
            overlay.classList.remove("show");
        }
        else {
            wide_menu_wrapper.classList.add("show");
            overlay.classList.add("show");
        }
    }
    else {
        //wide menu
        wide_menu_wrapper.classList.remove("transition");
        if(wide_menu_wrapper.classList.contains("default-layout")) {
            wide_menu_wrapper.classList.remove("default-layout");
            wide_menu_nav.classList.remove("default-layout");
            menu_wrapper.classList.remove("default-layout");
        }
        else {
            wide_menu_wrapper.classList.add("default-layout");
            wide_menu_nav.classList.add("default-layout");
            menu_wrapper.classList.add("default-layout");
        }
    }
}

function hideSidemenu() {
    if(document.documentElement.clientWidth >= 1300) {
        if(wide_menu_wrapper.classList.contains("show")) {
            wide_menu_wrapper.classList.remove("show");
            overlay.classList.remove("show");
        }
    }
}

//hide/show more subscriptions
function toggleSubs() {
    const toggle_label = document.getElementById("subs-toggle-label");
    const toggle_icon = document.getElementById("subs-toggle-icon");
    const items = document.getElementsByClassName("wide-menu-item");

    for (let i = 0; i < items.length; i++) {
        if(items.item(i).classList.contains("hide")) {
            //extend
            items.item(i).classList.remove("hide");
            items.item(i).classList.add("show");
            toggle_label.textContent="Show less";
            toggle_icon.classList.add("rotated");
        } else if (items.item(i).classList.contains("show")) {
            //hide
            items.item(i).classList.add("hide");
            items.item(i).classList.remove("show");
            toggle_label.textContent="Show more";
            toggle_icon.classList.remove("rotated");
        }
    }
}

function showSearchbar() {
    const nav_left = document.getElementById("nav-left-container");
    const nav_center = document.getElementById("nav-center-container");
    const nav_right = document.getElementById("nav-right-container");
    nav_left.style.display = "none";
    nav_center.style.display = "flex";
    nav_right.style.display = "none";
}