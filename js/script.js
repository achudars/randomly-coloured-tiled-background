$(document).ready(function() {

	var width = 0.05 * $("#body").width();
	var height = 0.05 * $("#body").height();
	var area = ($("#body").width() * $("#body").height());
	var unit = width * height;
	var times = area / unit;

	console.log("S(area)=" + area);
	console.log("rows=" + (area / width));
	console.log("columns=" + (area / height));
	console.log("unit=" + (unit));
	console.log("times=" + (times));

	$("#red").click(function() {
		tileBackground("red");
	});

	$("#yellow").click(function() {
		tileBackground("yellow");
	});
	$("#green").click(function() {
		tileBackground("green");
	});

	$("#indigo").click(function() {
		tileBackground("indigo");
	});
	$("#violet").click(function() {
		tileBackground("violet");
	});

	function tileBackground(string) {

		$('#body').empty();

		var color;

		// THIS CODE NEED SERIOUS REFACTORISATIOn. IT IS HORRIBLE =(
		switch (string) {
			case "red":

				for (var i = 0; i < times; i++) {
					var div = $('<div>').css({
						"position" : "relative",
						"display" : "inline-block",
						"margin-bottom" : "-5px",
						"padding" : "0",
						"width" : width + "px",
						"height" : height + "px",
						"background" : randomRED()
					});
					$("#body").append(div);
				}
				break;
			
			case "yellow":
				for (var i = 0; i < times; i++) {
					var div = $('<div>').css({
						"position" : "relative",
						"display" : "inline-block",
						"margin-bottom" : "-5px",
						"padding" : "0",
						"width" : width + "px",
						"height" : height + "px",
						"background" : randomYELLOW()
					});
					$("#body").append(div);
				}
				break;
			case "green":

				for (var i = 0; i < times; i++) {
					var div = $('<div>').css({
						"position" : "relative",
						"display" : "inline-block",
						"margin-bottom" : "-5px",
						"padding" : "0",
						"width" : width + "px",
						"height" : height + "px",
						"background" : randomGREEN()
					});
					$("#body").append(div);
				}
				break;

			case "indigo":

				for (var i = 0; i < times; i++) {
					var div = $('<div>').css({
						"position" : "relative",
						"display" : "inline-block",
						"margin-bottom" : "-5px",
						"padding" : "0",
						"width" : width + "px",
						"height" : height + "px",
						"background" : randomINDIGO()
					});
					$("#body").append(div);
				}
				break;
			case "violet":
				for (var i = 0; i < times; i++) {
					var div = $('<div>').css({
						"position" : "relative",
						"display" : "inline-block",
						"margin-bottom" : "-5px",
						"padding" : "0",
						"width" : width + "px",
						"height" : height + "px",
						"background" : randomVIOLET()
					});
					$("#body").append(div);
				}
				break;
		}

	}

	function randomRED() {
		var r = ('0' + Math.floor(Math.random() * 256).toString(16)).substr(-2); // red
		//var g = ('0' + Math.floor(Math.random() * 256).toString(16)).substr(-2), // green
		var b = ('0' + Math.floor(Math.random() * 256).toString(16)).substr(-2);
		// blue
		//return '#' + r + g + b;
		return "#" + r + "11" + "11";
	}



	function randomYELLOW() {
		//var r = ('0' + Math.floor(Math.random() * 256).toString(16)).substr(-2), // red
		//var g = ('0' + Math.floor(Math.random() * 256).toString(16)).substr(-2), // green
		var b = ('0' + Math.floor(Math.random() * 256).toString(16)).substr(-2);
		// blue
		//return '#' + r + g + b;
		return "#" + "FF" + "FF" + b;
	}

	function randomGREEN() {
		//var r = ('0' + Math.floor(Math.random() * 256).toString(16)).substr(-2), // red
		var g = ('0' + Math.floor(Math.random() * 256).toString(16)).substr(-2); // green
		var b = ('0' + Math.floor(Math.random() * 256).toString(16)).substr(-2);
		// blue
		//return '#' + r + g + b;
		return "#" + "11" + g + "11";
	}


	function randomINDIGO() {
		//var r = ('0' + Math.floor(Math.random() * 256).toString(16)).substr(-2), // red
		//var g = ('0' + Math.floor(Math.random() * 256).toString(16)).substr(-2), // green
		var b = ('0' + Math.floor(Math.random() * 256).toString(16)).substr(-2);
		// blue
		//return '#' + r + g + b;
		return "#" + "22" + "22" + b;
	}

	function randomVIOLET() {
		var r = ('0' + Math.floor(Math.random() * 256).toString(16)).substr(-2); // red
		//var g = ('0' + Math.floor(Math.random() * 256).toString(16)).substr(-2), // green
		var b = ('0' + Math.floor(Math.random() * 256).toString(16)).substr(-2);
		// blue
		//return '#' + r + g + b;
		return "#" + r + "00" + "ff";
	}

})
