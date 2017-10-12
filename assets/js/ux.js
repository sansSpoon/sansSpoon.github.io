
var	controlButton = document.getElementById('neo-n-s'),
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

// throttle windows resizing events
(function() {
	var throttle = function(type, name, obj) {
		obj = obj || window;
		var running = false;
		var func = function() {
			if (running) { return; }
			running = true;
			requestAnimationFrame(function() {
				obj.dispatchEvent(new CustomEvent(name));
				running = false;
			});
		};
		obj.addEventListener(type, func);
	};

	/* init - you can init any event */
	throttle("resize", "optimizedResize");
})();

// handle window resizing
window.addEventListener("optimizedResize", function() {
	csWidth = controlStrip.getBoundingClientRect().width;
	if (csState == "closed") {
		csClose();
	}	
});


var pTags = document.querySelector('.post-tags');
if (pTags) {
	tags = pTags.getElementsByTagName('li');
	
	for (var i=0; i<tags.length; i++) {
		tags[i].firstChild.addEventListener('mouseover', tagExpand, false);
		tags[i].firstChild.addEventListener('mouseout', tagExpand, false);
	}
	
	function tagExpand(event) {
		if (this.dataset.tag) {
			if (event.type == 'mouseover') {
				myTag = this.innerHTML;
				this.innerHTML = this.dataset.tag;
			} else if (event.type == 'mouseout') {
				this.innerHTML = myTag;
			}
		}
	}
}

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