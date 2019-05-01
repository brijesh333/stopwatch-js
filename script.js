var seconds = 0,
    minutes = 0,
    hours = 0,
    t;

// This function will increment timer value by 1 on each second
function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }

    document.getElementById('timerLabel').innerHTML = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + " : " + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + " : " + (seconds > 9 ? seconds : "0" + seconds);

    startTimer();
}

// Start timer
function startTimer() {
    t = setTimeout(add, 1000);
}

// Pause Timer
function pauseTimer() {
    clearTimeout(t);
}

// Resume timer after pause
function resumeTimer() {
    startTimer();
}

// Clear timer and reset tot zero
function clearTimer() {
    document.getElementById('timerLabel').innerHTML = "00 : 00 : 00";
    seconds = 0;
    minutes = 0;
    hours = 0;
}