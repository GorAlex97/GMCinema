// Event called when a service is hovered
function hoverService() {
	console.log( "RUNLUA: surface.PlaySound('garrysmod/ui_hover.wav');" );
}

// Event called when a service is selected
function selectService(name, url) {
	console.log( "RUNLUA: surface.PlaySound('garrysmod/ui_click.wav');" );

	ga('send', 'event', 'services', 'visit', name);
	setTimeout(function(){
		window.location.href = url;
	}, 100);
}

// Set a random tip on DOM load
/*document.addEventListener('DOMContentLoaded', function() {
	var tips = [
		'Did you know that Cinema is open source?<br /><a href="https://github.com/pixeltailgames/cinema">View the code on GitHub.</a>',
		'Fluent in a non-English language? Interested in helping translate the Cinema gamemode?<br /><a href="http://steamcommunity.com/workshop/filedetails/discussion/118824086/864970587165565470/">Click here to read more.</a>',
		'Interested in making your own map for Cinema?<br /><a href="http://steamcommunity.com/sharedfiles/filedetails/?id=147037972">View the Cinema mapping tutorial here.</a>'
	];

	return function() {
		var node = document.getElementById('tip'),
			tip = tips[Math.floor(Math.random() * tips.length)];

		node.innerHTML = tip;
	};
}());*/