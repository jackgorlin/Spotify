var circle = document.querySelector('.circle');
var containers = document.querySelectorAll('.container');
var audio = document.querySelector('#rick-roll');

function slideText() {
	containers.forEach(function(container) {
		container.classList.toggle('active');
	})
}

circle.addEventListener('mouseover', function(e) {
	slideText();
	audio.play();
});

circle.addEventListener('mouseout', function(e) {
	slideText();
	audio.pause();
	audio.currentTime = 0;
});