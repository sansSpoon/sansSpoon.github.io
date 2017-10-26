// ! Global Variables
// --------
var	controlButton = document.getElementById('neo-n-s'),
	controlStrip = document.querySelector('.strip'),
	csWidth = controlStrip.getBoundingClientRect().width,
	csState = "open",
	aTags = document.querySelectorAll('.tag-cloud, .post-tags');

// ! Controls Strip
// --------
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

// ! Tags
// --------
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

function alignTags(aTags) {
	for (var i=0; i<aTags.length; i++) {
		if (aTags[i].className == "post-tags") {
			postTagsLoc = aTags[i].offsetLeft;
			if (postTagsLoc == 0) {
				aTags[i].getElementsByTagName('li')[0].className = 'first-tag';
			} else {
				aTags[i].getElementsByTagName('li')[0].className = 'tag';
			}
			
		} else if (aTags[i].className == "tag-cloud") {
			for (var j=0; j<aTags.length; j++) {
				tags = aTags[j].children;
				for (var k=0; k<tags.length; k++) {
					tagLoc = tags[k].offsetLeft;
					if (tagLoc == 0) {
						tags[k].className = 'first-tag';
					} else {
						tags[k].className = 'tag';
					}
				}
			}
		}
	}
}


// ! Throttle windows resizing events
// --------
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


// ! Handle window resizing
// --------
window.addEventListener("optimizedResize", function() {
	csWidth = controlStrip.getBoundingClientRect().width;
	if (csState == "closed") {
		csClose();
	}
	alignTags(aTags);
});


// ! Do Things
// --------
if (aTags) {
	for (var i=0; i<aTags.length; i++) { 
		tags = aTags[i].getElementsByTagName('li');
		for (var j=0; j<tags.length; j++) {
			tags[j].firstChild.addEventListener('mouseover', tagExpand, false);
			tags[j].firstChild.addEventListener('mouseout', tagExpand, false);
		}
	}
	alignTags(aTags);
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