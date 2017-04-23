function reqListener () {
		
	}

	var request = new XMLHttpRequest();
	request.addEventListener("load", reqListener);
	request.open("GET", "https://api.spotify.com/v1/127374711/top/artists");
	request.send();

console.log()