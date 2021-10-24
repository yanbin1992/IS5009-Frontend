export function isMobile() {
    console.log("TestMobile")

    if (window.innerHeight > window.innerWidth && window.innerWidth < 575) {
        console.log("isMobile", true)
        return true
    }
    else return false
}