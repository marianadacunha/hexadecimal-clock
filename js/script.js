function load() {
    var msg = window.document.getElementById('msg)
    var date = new Date()
    var hour = date.getHours()
    msg.innerHTML = ${hour}

    if (hour >= 0 && hour < 12) {
        // Good morning!
    } else if (hour >= 12 && hour < 18) {
        // Good afternoon!
    } else {
        // Good evening!
    }
}