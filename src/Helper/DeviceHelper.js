export function isMobile() {
    if (window.innerHeight > window.innerWidth && window.innerWidth < 575) {
        return true
    }
    else return false
}