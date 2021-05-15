window.onscroll = function navParentTop() {

    let navParent = document.getElementsByClassName("navParent")[0]

    let itemPosTop = document.documentElement.scrollTop

    if (itemPosTop == 0) {

        navParent.classList.remove("navParentNotTop")
    } else {

        navParent.classList.add("navParentNotTop")
    }
}