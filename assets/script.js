var Site = {};

Site.ambientBackground = function(){
	var s = Snap("#background");
	Snap.load("/assets/arcs/ligeti-arc.svg", function(arc){
		//svg loaded
		s.append(arc)


	})


}


Site.menu = function(){
	console.log("menu")
}

window.onload = function(){
	console.log("Lukas Ligeti\nSite by Lukas Eigler-Harding")
	Site.ambientBackground()
}