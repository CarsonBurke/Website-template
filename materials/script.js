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

    let sideBarAnchors = navSideBar.getElementsByTagName("a")

    function sideBarAnchorValid() {

        let result = false

        for (let i = 0; i < sideBarAnchors.length; i++) {

            if (element.target == sideBarAnchors[i]) {

                result = true
                break
            }
            if (i == sideBarAnchors.length) {

                result = false
            }
        }

        return result
    }

    if (element.target != navSideBar && element.target != navSideBarButton && element.target != bar1 && element.target != bar2 && element.target != bar3 && sideBarAnchorValid() == false) {

        navSideBar.classList.remove("navSideBarActive")

        bar1.classList.remove("barActive1")

        bar2.classList.remove("barActive2")

        bar3.classList.remove("barActive3")
    }
}

let sliderParent = document.getElementsByClassName("sliderParent")[0]

let slides = document.getElementsByClassName("slideParent")

let slidesIndex = -1

window.addEventListener("load", slideForward)

function slideForward() {

    if (slidesIndex < slides.length - 1) {

        slidesIndex++
    } else {

        slidesIndex = 0
    }

    for (let i = 0; i < slides.length; i++) {

        let slide = slides[i]

        if (i == slidesIndex) {

            slide.classList.add("slideActive")
        } else {

            slide.classList.remove("slideActive")
        }
    }
    console.log(slidesIndex)
}

function slideBack() {

    if (slidesIndex > 0) {

        slidesIndex--
    } else {

        slidesIndex = slides.length - 1
    }

    for (let i = 0; i < slides.length; i++) {

        let slide = slides[i]

        if (i == slidesIndex) {

            slide.classList.add("slideActive")
        } else {

            slide.classList.remove("slideActive")
        }
    }
    console.log(slidesIndex)
}