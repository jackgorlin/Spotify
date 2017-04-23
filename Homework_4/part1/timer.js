/*
	TODO: Store references to the DOM objects in variables below
*/
var timerDiv  = document.querySelector("#timer");		// Where we will display the time
var startBtn = document.querySelector("[data-btn='start']");		// When clicked, start or resume timer
var pauseBtn = document.querySelector("[data-btn='pause']");		// When clicked, pause timer
var resetBtn = document.querySelector("[data-btn='reset']");		// When clicked, reset timer to original status
var tickAudio = document.querySelector("[data-audio='tick']");		// Play once per second while the timer counts down
var alarmAudio = document.querySelector("[data-audio='alarm']");		// Play repeatedly when timer reaches 00:00:00, 
					// until pause or reset is pressed (for simplicity)

/*
	TODO: Set initial values to the variables below
*/
var secDuration = 10;	// How long the timer is set, in seconds
var running = false;		// A boolean

/*
	TODO: Figure what this one may be used for (later)
*/
var timerInterval;

/*
	TODO: getTimeString takes in a number of seconds and return
	a time string in the format "hh+:mm:ss" (2 or more digits for hours,
	2 digits for minutes, 2 digits for seconds)

	Example: 	getTimeString(10) => "00:00:10"
				getTimeString(12000) => "03:36:45"
*/
function getTimeString(totalSeconds) {
	var date = new Date(null)
	date.setSeconds(totalSeconds); // specify value for SECONDS here
	var result = date.toISOString().substr(11, 8);

	return result;

}

/*
	TODO: render(displayDiv, totalSeconds) displays the totalSeconds
	in "hh+:mm:ss" format in the browser where displayDiv is
*/
function render(displayDiv, totalSeconds) {
	displayDiv.innerHTML = getTimeString(totalSeconds);
}

/*
	TODO: Write functions that correspond to the specs of our buttons
*/

startBtn.addEventListener("click", function(e) {
	if (secDuration != 0) {
	e.preventDefault();
	running=true;
	}
});


pauseBtn.addEventListener("click", function(e) {
	e.preventDefault();
	running=false;
});



resetBtn.addEventListener("click", function(e) {
	e.preventDefault();
	running=false;
	secDuration=10;
	render(timerDiv, secDuration);
});

var intervalID = window.setInterval(myCallback, 1000);

function myCallback() {	

	if (running) {
		secDuration = secDuration - 1;	
		console.log(secDuration)
		tickAudio.play();
	}

	if (secDuration == 0) {
		running=false;
		alarmAudio.play();
	}

	render(timerDiv, secDuration);

	
}


/*
	TODO: Uncomment the line below when you have implemented render
*/
window.onload = render(timerDiv, secDuration);
