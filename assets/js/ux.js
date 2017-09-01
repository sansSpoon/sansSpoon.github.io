
var	controlButton = document.querySelector('.polygon'),
	controlStrip = document.querySelector('.strip');

controlButton.onclick = function() {
	controlStrip.classList.toggle('stripClosed');
};
