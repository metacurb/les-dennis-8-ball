var intro = new Audio('audio/our%20survey%20said.ogg');
var ballShake = new Audio('audio/ball%20shake.ogg');

var soundBank = [
	'a game you can play in bed',
	'buzzer',
	'definitely pills',
	'from burglar to married man',
	'hes a bit of a character',
	'i went ooh',
	'im very good',
	'let me think about it',
	'mumble',
	'this is a wind up',
	'we had a fight once',
	'you wouldnt expect to meet a nun'
];

Array.prototype.soundSelector = function () {
    return this[Math.floor(Math.random() * this.length)]
}

var soundPlayer = {};

var soundLoader = function () {
	var selectSound = soundBank.soundSelector();
	var convertToUrl = 'audio/' + selectSound.replace(/\s+/g, '%20') + '.ogg';
	soundPlayer.loadSound = new Audio(convertToUrl);
}

$(document).ready(function() {
	soundLoader();
	$('.container').click(function() {
		intro.play();
		$('.les').addClass('active').delay(1100).queue(function(next){
			$(this).removeClass('active');
			ballShake.play();
			$('.eight-ball').addClass('active').delay(1100).queue(function(next){
				$(this).removeClass('active');
				soundPlayer.loadSound.play();
				soundLoader();
				next();
			});
			next();
		});
	});
});