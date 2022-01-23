var counter = 10;

var countdown = function () {
    counter--;
    document.getElementById("time").innerHTML = counter;
    if (counter === 0) {
        clearInterval(startCountdown);
    };
};
var startCountdown = setInterval(countdown, 1000);