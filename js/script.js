// 'setInterval' will repeatedly call the function every 1 second
setInterval(function() {
    let today = new Date();
    let hour = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    // Display a greeting accordingly to the current time
    if (hour >= 0 && hour < 12) {
        document.getElementById('greeting').innerHTML = 'Good morning!';
    } else if (hour >= 12 && hour < 18) {
        document.getElementById('greeting').innerHTML = 'Good afternoon!';
    } else {
        document.getElementById('greeting').innerHTML = 'Good evening!';
    }

    // If the number of hours/minutes/seconds is less than 10, this will add a '0' at the beginning
    // so the number will be a proper hexadecimal code with a total of 6 digits
    hexHour = (hour < 10 ? '0' : '') + hour + ':' +
        (minutes < 10 ? '0' : '') + minutes + ':' +
        (seconds < 10 ? '0' : '') + seconds;

    hexColor = "#" + (hour < 10 ? '0' : '') + hour +
        (minutes < 10 ? '0' : '') + minutes +
        (seconds < 10 ? '0' : '') + seconds;

    window.document.getElementById('clock').innerHTML = hexHour;
    window.document.getElementById('hex').innerHTML = hexColor;
    window.document.getElementById('hex').style.color = hexColor;
    window.document.body.style.backgroundColor = hexColor;
}, 1)