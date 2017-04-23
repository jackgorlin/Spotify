var sec1 = $('#sec-1');
var highscoreDiv = $('#sec-1 > .highscore');
var startBtn = $('#sec-1 > button');

var sec2 = $('#sec-2');
var curScoreDiv = $('#sec-2 > .score');
var curKeyDiv = $('#sec-2 > .key');

var sec3 = $('#sec-3');
var endMessageDiv = $('#sec-3 > .message');
var restartBtn = $('#sec-3 > button');

var audio = $('#sound')[0];
audio.playbackRate = 2;

var gameKeys = 'qwertyuiopasdfghjklzxcvbnm1234567890';
gameKeys = gameKeys.split('');
var curKey;

var curScore = 0;
var highscore = getHighScoreFromStorage() || 0;

var interval;
var playing = false;

var DURATION = 15000;
var STEP = 1000;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function saveHighScoreToStorage(highscore) {
	localStorage.setItem('highscore', highscore);
}

function getHighScoreFromStorage() {
	return JSON.parse(localStorage.getItem('highscore'));
}

function randKey() {
	var randomKeyIndex = getRandomInt(0, gameKeys.length - 1);
	curKey = gameKeys[randomKeyIndex];
	curKeyDiv.text(curKey);
}

function check(e) {
	if (!playing || e.key !== curKey) return;
	curScore++;
	audio.currentTime = 0;
	audio.play();
	curScoreDiv.text(`Score: ${curScore}`);
}

function startGame() {
	sec1.hide();
	sec2.show();
	randKey();
	playing = true;
	interval = setInterval(randKey, STEP);
	setTimeout(endGame, DURATION);
}

function endGame() {
	clearInterval(interval);
	sec2.hide();
	sec3.show();
	if (curScore > highscore) {
		highscore = curScore;
		endMessageDiv.text(`New Highscore: ${highscore}`);
		saveHighScoreToStorage(highscore);
	}
	else {
		endMessageDiv.text(`Your score is ${curScore}. Try again next time!`);
	}
	playing = false;
}

function restartGame() {
	sec3.hide();
	sec1.show();
	curScore = 0;
	highscoreDiv.text(`Highscore is ${highscore}`);
}

startBtn.on('click', startGame);
restartBtn.on('click', restartGame);
$(window).on('keydown', check);

highscoreDiv.text(`Highscore is ${highscore}`);