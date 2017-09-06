
var	controlButton = document.querySelector('.polygon'),
	controlStrip = document.querySelector('.strip'),
	csWidth = controlStrip.getBoundingClientRect().width,
	csState = "open";

function csOpen() {
	controlStrip.style.removeProperty('transform');
	csState = "open";
}

function csClose() {
	controlStrip.style.WebkitTransform = 'translate(-' + csWidth + 'px)';
	controlStrip.style.transform = 'translate(-' + csWidth + 'px)';
	csState = "closed";
}

controlButton.onclick = function() {
	if (csState == "open") {
		csClose();
	} else {
		csOpen();
	}
};



//window.onscroll = function() {
//	var viewportOffset = document.querySelector('.post-meta').getBoundingClientRect().top;
//    console.log(viewportOffset);
//};



/*
var myElement = document.querySelector('.post-meta');

function getElementTop(el) {
	var eTop = el.getBoundingClientRect().top;
	return eTop;
}

window.onscroll = function() {
	var scrollingEl = getElementTop(myElement);
	
	if (scrollingEl == 0) {
		console.log("poop");
	}
};
*/