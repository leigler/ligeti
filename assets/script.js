var Site = {};

Site.ambientBackground = function(){
	var s = Snap("#background");
	
	var svgArcs = ["assets/arcs/ligeti-arc-all.svg"];

	var animationCycle = function(svgArc){
		Snap.load(svgArc, function(arc){
			//svg loaded
			var viewBox = s.attr("viewBox"),
					paths = arc.selectAll("path");

			var mostRecentColorIndex = 0;

			var loadAndSlide = function(speed, index){

				var thisPath = paths[index];
				var colors = ["#340053", "#004F2A", "#A67B00", "#34339D", "#AC0000", "#00014F", "#6D0000", "#2B00AC"]

				var currentPath = s.path(thisPath.attr("d"))
				var randomColorIndex = Math.round(Math.random()*(colors.length-1));

				randomColorIndex = (randomColorIndex == mostRecentColorIndex) ? (colors.length - 1) - randomColorIndex : randomColorIndex;

				currentPath.transform('translate(0 900)').attr({ fill: colors[randomColorIndex] });
				mostRecentColorIndex = randomColorIndex;

				s.append(currentPath)
				// console.log(Snap.parsePathString(thisPath))
				currentPath.animate({
					transform: 'translate(0 -900)'
				}, speed, mina.linear, function(){
					currentPath.remove()
				})
			}
			loadAndSlide(30000, 0)
			setInterval(function(){
				var randomPath = Math.round(Math.random()*(paths.length-1));
				
				loadAndSlide(30000 + Math.round(Math.random()*4000), randomPath)
			}, 4000)

		})
	}

	animationCycle(svgArcs[0])
	
}


Site.menu = function(){
	
	$("nav").on('click', function(){

		$(this).toggleClass("open")

	})

	$("a.menu_items").on('click', function(event){
		event.preventDefault();
		var target = $(this).attr("href");
		var targetOffset = $(target).offset().top;

		$("body, html").delay(500).animate({
			scrollTop: targetOffset - 75
		}, 1000)


	})

}

window.onload = function(){
	console.log("Lukas Ligeti\nSite by Lukas Eigler-Harding")
	Site.ambientBackground()
	Site.menu()
}