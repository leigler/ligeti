var Site = {};

Site.ambientBackground = function(){
	var s = Snap("#background");
	
	var svgArcs = ["/assets/arcs/ligeti-arc-all.svg"];

	var animationCycle = function(svgArc){
		Snap.load(svgArc, function(arc){
			//svg loaded
			var viewBox = s.attr("viewBox"),
					paths = arc.selectAll("path");

			var loadAndSlide = function(paths, speed, index){

				var thisPath = paths[index];
				var colors = ["#692E5C", "#8BDEFF", "#FFFA2E", "#FF5CE5", "#692EA5", "#A2004D", "#692EFF", "#00E733"]

				thisPath.transform('translate(0 900)').attr({ fill: colors[index] });

				s.append(thisPath)
				// console.log(Snap.parsePathString(thisPath))
				thisPath.animate({
					transform: 'translate(0 -900)'
				}, speed, mina.linear, function(){
					console.log(thisPath.attr("class"))
					// remove path?
					thisPath.remove()
					var randomPath = Math.round(Math.random()*(paths.length-1));
					loadAndSlide(paths, speed, randomPath)
				})

			}
			
			// bugs include if it's the same class on both animations, it deletes itself
			// also need to figure out how to allow for consistent overlap (negative transform)

			loadAndSlide(paths, 4000, 0)
			// setTimeout(function(){
			// 	loadAndSlide(paths, 4000, 0)				
			// }, 2000)

		})
	}

	animationCycle(svgArcs[0])
	
}


Site.menu = function(){
	console.log("menu")
}

window.onload = function(){
	console.log("Lukas Ligeti\nSite by Lukas Eigler-Harding")
	Site.ambientBackground()
}