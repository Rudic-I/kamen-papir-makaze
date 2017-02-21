var options = ["http://orig07.deviantart.net/a801/f/2015/218/a/4/pebble_pose_by_yearsanimations-d94fbwg.png", 
				"http://www.clker.com/cliparts/3/6/1/6/135055741013610297331194984476257642059parchment_paper_landsca_.svg.hi-hi.png", 
				"https://image.flaticon.com/icons/png/128/230/230235.png"];
var player;
var computer;
var score = 0;
function move1(image){
	player = Number(image.getAttribute("data-target"));
	var playersChoice = $("#players-choice");
	playersChoice.css({
		"background-image" : "url("+options[player]+")",
		"background-size" : "contain",
		"background-position" : "center",
		"background-repeat" : "no-repeat"
	});
	setTimeout(move2, 1000);
}
function move2(){
	var computersChoice = $("#computers-choice");
	computer = Math.floor(Math.random()*3);
	computersChoice.css({
		"background-image" : "url("+options[computer]+")",
		"background-size" : "contain",
		"background-position" : "center",
		"background-repeat" : "no-repeat",
	});
	setTimeout(result, 1000);
}
function result(){
	var h2 = $("h2");
	var p = $("p");
	if (player == computer) {
	 	h2.text("Nerešeno, igraj ponovo!");
	}
	else if (player == 0) {
		if (computer == 1) {
			h2.text("Izgubio si, više sreće drugi put!");
			score -= 1;
		}
		else {
			h2.text("Pobedio si. I ćorava koka ubode koje zrno!");
			score += 1;
		}
	}
	else if (player == 1) {
		if (computer == 2) {
			h2.text("Izgubio si, više sreće drugi put!");
			score -= 1;
		}
		else {
			h2.text("Pobedio si. I ćorava koka ubode koje zrno!");
			score += 1;
		}
	}
	else if (player == 2) {
		if (computer == 0) {
			h2.text("Izgubio si, više sreće drugi put!");
			score -= 1;
		}
		else {
			h2.text("Pobedio si. I ćorava koka ubode koje zrno!");
			score += 1;
		}
	}
	p.text("Rezultat: " + score);
}