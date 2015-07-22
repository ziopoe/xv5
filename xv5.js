(function() {
	// using jquery and "id_video" directly from the webpage
	$.getJSON('http://www.xvideos.com/video_download/' + id_video, function(d) {
		if(!d.LOGGED) {
			//in order to be able to view the download link xvideo ask you to log in
			alert('Please log in to view this video.');
		} else if(typeof(d.ERROR) === "string") {
			alert(d.ERROR); // ctrl-c/ctrl-v xvideo's errors handling
		} else if(typeof(d.URL) !== "string") {
			alert('Unknown error'); // ctrl-c/ctrl-v xvideo's errors handling
		} else {
			//if everythong is fine, go on with the 1337 player

			//get the width of the flash player (so we don't mess the pagination)
			var w = document.getElementById("flash-player-embed").getAttribute("width");
			//remove flash player
			document.getElementById("content").removeChild(document.getElementById("player")); 

			// setting up the player
			var v = document.createElement('video');
			var s = document.createElement('source');
			v.setAttribute('width', w);
			v.setAttribute('controls', '');
			s.setAttribute('src', d.URL); // the actual mp4 video's url
			s.setAttribute('type', 'video/mp4');
			v.appendChild(s);

			// push in the html5 player
			document.getElementById("content").appendChild(v);
		}
	})
})();
