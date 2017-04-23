// TODO: Set up references to the DOM using JQuery
var sec1;
var highscoreDiv;
var startBtn;

var sec2;
var curScoreDiv;
var curKeyDiv;

var sec3;
var endMessageDiv;
var restartBtn;

var audio;
// audio.playbackRate = 2;

// Permitted keys for our game
var gameKeys = 'qwertyuiopasdfghjklzxcvbnm1234567890';
gameKeys = gameKeys.split('');
// The current key in display, the one we must match to get a point
var curKey;

var curScore = 0;
var highscore = 0;

// Variables used to control game end and in-game scoring logic
var interval;
var playing = false;

// The duration of the whole game
var DURATION = 15000;
// The speed at which the current game key changes
var STEP = 1000;

// Returns a random integer in range [min, max]
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function saveHighScoreToStorage(highscore) {
	localStorage.setItem('highscore', highscore);
}

function getHighScoreFromStorage() {
	return JSON.parse(localStorage.getItem('highscore'));
}

// TODO: Generate a random game key
function randKey() {
	var randomKeyIndex = getRandomInt(0, gameKeys.length - 1);
	/* YOUR CODE HERE */
}

// TODO: check if the key the player pressed matches the current game key,
// add a point and update score display if yes
function check(e) {
}

// TODO: startGame will hide sec-1 (intro screen) and show sec-2 (game screen),
// start displaying random keys every STEP and stopping game after DURATION
function startGame() {
	/* YOUR CODE HERE */
	setTimeout(endGame, DURATION);
}

// TODO: endGame will hide sec-2 (game screen) and show sec-3 (game over screen),
// save the new highscore (if player scored higher than the highscore), and display
// different messages depending on whether the record was broken
function endGame() {
	/* YOUR CODE HERE */
	if (curScore > highscore) {
		/* YOUR CODE HERE */
	}
	else {
		/* YOUR CODE HERE */
	}
}

// TODO: restartGame will hide sec-3 (game over screen) and show sec-1 (intro screen),
// and reset any necessary variable
function restartGame() {
	/* YOUR CODE HERE */
}

// TODO: Add listeners to startBtn, restartBtn, and the window object
// to control when game starts, game restarts, and when player presses
// a key

// TODO: Display an initial message in the intro screen that tells the
// current highscore