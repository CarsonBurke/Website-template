let navTopBar = document.getElementsByClassName("navTopBar")[0]
let navSideBar = document.getElementsByClassName("navSideBar")[0]
let navSideBarButton = document.getElementsByClassName("navSideBarButton")[0]

let bar1 = document.getElementsByClassName("bar1")[0]
let bar2 = document.getElementsByClassName("bar2")[0]
let bar3 = document.getElementsByClassName("bar3")[0]

window.onscroll = function navParentTop() {

    let itemPosTop = document.documentElement.scrollTop

    if (itemPosTop == 0) {

        navTopBar.classList.remove("navTopBarNotTop")
    } else {

        navTopBar.classList.add("navTopBarNotTop")
    }
}

function navSideBarToggle() {

    navTopBar.classList.toggle("navTopBarNotTop")

    navSideBar.classList.toggle("navSideBarActive")

    bar1.classList.toggle("barActive1")

    bar2.classList.toggle("barActive2")

    bar3.classList.toggle("barActive3")
}

window.onclick = element => {

    if (element.target != navSideBar && element.target != navSideBarButton && element.target != bar1 && element.target != bar2 && element.target != bar3) {

        navSideBar.classList.remove("navSideBarActive")

        bar1.classList.remove("barActive1")

        bar2.classList.remove("barActive2")

        bar3.classList.remove("barActive3")
    }
}