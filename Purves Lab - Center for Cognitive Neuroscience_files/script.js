// <!--

if(navigator.userAgent.toLowerCase().indexOf('msie') >= 0 && navigator.userAgent.toLowerCase().indexOf('mac') >= 0) {
	Array.prototype.push = function(o) {
		this[this.length] = o;
	}
}

function init()
{
	if(typeof(init_custom) == 'function') {
		init_custom();
	}
	external_links();
}

// init rel="external" for standards compliance
function external_links() 
{ 
	if(!document.getElementsByTagName) return; 
	var anchors = document.getElementsByTagName("a"); 
	for(var i=0; i<anchors.length; i++) { 
		var anchor = anchors[i]; 
		if(anchor.getAttribute("href") && anchor.getAttribute("rel") == "external") 
	 		anchor.target = "_blank";
	}
}

// show/hide large image figures
function do_fig(n)
{
	var figs = document.getElementsByTagName('img');

	if(n == -1) { // close all
		for(var i = 0; i < figs.length; i++) {
			if(figs[i].id.indexOf('fig') == 0) {
				figs[i].style.display = 'none';
			}
		
		}
		return;
	}
	var el = document.getElementById('fig' + n);
	el.style.display = (el.style.display != 'block') ? 'block' : 'none';
}

// -->