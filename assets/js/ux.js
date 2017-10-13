
var	controlButton = document.getElementById('neo-n-s'),
	controlStrip = document.querySelector('.strip'),
	csWidth = controlStrip.getBoundingClientRect().width,
	csState = "open",
	apTags = document.getElementsByClassName('post-tags');

function csOpen() {
	controlStrip.style.removeProperty('transform');
	csState = "open";
}

function csClose() {
	controlStrip.style.WebkitTransform = 'translate(-' + csWidth + 'px)';
	controlStrip.style.transform = 'translate(-' + csWidth + 'px)';
	csState = "closed";
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

function alignTags(apTags) {
	console.log(apTags);
	for (var i=0; i<apTags.length; i++) { 
		
		postTagsLoc = apTags[i].offsetLeft;
		console.log(postTagsLoc);
		if (postTagsLoc == 0) {
			apTags[i].getElementsByTagName('li')[0].className = 'first-tag';
		} else {
			console.log(apTags[i]);
			apTags[i].getElementsByTagName('li')[0].className = 'tag';
		}
	}
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
	
	alignTags(apTags);
	
	
});

if (apTags) {
	for (var i=0; i<apTags.length; i++) { 
		
		tags = apTags[i].getElementsByTagName('li');
		
		for (var j=0; j<tags.length; j++) {
			tags[j].firstChild.addEventListener('mouseover', tagExpand, false);
			tags[j].firstChild.addEventListener('mouseout', tagExpand, false);
		}
		
	}
}

/*
var childPos = obj.offset();
var parentPos = obj.parent().offset();
var childOffset = {
    top: childPos.top - parentPos.top,
    left: childPos.left - parentPos.left
}
*/


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