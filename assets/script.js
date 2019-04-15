var Site = {};

Site.ambientBackground = function(){
	var s = Snap("#background");
	Snap.load("/assets/arcs/ligeti-arc.svg", function(arc){
		//svg loaded
		var viewBox = s.attr("viewBox"),
				paths = arc.selectAll("path");

		paths.forEach(function(thisPath, index){
			s.append(thisPath)

			thisPath.animate({
				fill: "#fff"
			}, 1000)

		}) // end of forEach
	})
}


Site.menu = function(){
	console.log("menu")
}

window.onload = function(){
	console.log("Lukas Ligeti\nSite by Lukas Eigler-Harding")
	Site.ambientBackground()
}