var counter = 10;

var countdown = function () {
    counter--;
    document.getElementById("time").innerHTML = counter;
    if (counter === 0) {
        clearInterval(startCountdown);
    };
};
var startCountdown = setInterval(countdown, 1000);

document.getElementById("start-quiz").addEventListener("click", hidestart);

function hidestart() {
    document.getElementById("quiz").style.display="none";
}