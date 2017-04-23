// TODO: Store reference to the circle, all element with class .container, and the audio source
// This time, use the querySelector method
var circle = document.querySelector(".circle"); 
var containers = document.querySelectorAll(".container");
var audio = document.querySelector("#rick-roll");

// TODO: Make a function that toggles the class .active on all containers, 
// thus sliding in the two halves of the text
function slideText() {
	/* if you do all don't need to array*/
	containers.forEach(function(container) {
		container.classList.toggle("active")
	});
}

//TODO: On mouseover, slide the text in and play audio
circle.addEventListener('mouseover', function(e) {
	slideText();
	audio.currentTime = 0;
	audio.play();
});

//TODO: On mouseout, slide the text out, stop audio, AND reset audio
circle.addEventListener('mouseout', function(e) {
	slideText();
	aduio.pause();
});