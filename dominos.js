var makeDominoImages = function(){
	domino00 = new Image(); domino00.src = "images/Dominos/[0,0].png";domino00.id ="(0,0)";
	domino01 = new Image(); domino01.src = "images/Dominos/[0,1].png";domino01.id ="(0,1)";
	domino02 = new Image(); domino02.src = "images/Dominos/[0,2].png";domino02.id ="(0,2)";
	domino03 = new Image(); domino03.src = "images/Dominos/[0,3].png";domino03.id ="(0,3)";
	domino04 = new Image(); domino04.src = "images/Dominos/[0,4].png";domino04.id ="(0,4)";
	domino05 = new Image(); domino05.src = "images/Dominos/[0,5].png";domino05.id ="(0,5)";
	domino06 = new Image(); domino06.src = "images/Dominos/[0,6].png";domino06.id ="(0,6)";
	domino11 = new Image(); domino11.src = "images/Dominos/[1,1].png";domino11.id ="(1,1)";
	domino12 = new Image(); domino12.src = "images/Dominos/[1,2].png";domino12.id ="(1,2)";
	domino13 = new Image(); domino13.src = "images/Dominos/[1,3].png";domino13.id ="(1,3)";
	domino14 = new Image(); domino14.src = "images/Dominos/[1,4].png";domino14.id ="(1,4)";
	domino15 = new Image(); domino15.src = "images/Dominos/[1,5].png";domino15.id ="(1,5)";
	domino16 = new Image(); domino16.src = "images/Dominos/[1,6].png";domino16.id ="(1,6)";
	domino22 = new Image(); domino22.src = "images/Dominos/[2,2].png";domino22.id ="(2,2)";
	domino23 = new Image(); domino23.src = "images/Dominos/[2,3].png";domino23.id ="(2,3)";
	domino24 = new Image(); domino24.src = "images/Dominos/[2,4].png";domino24.id ="(2,4)";
	domino25 = new Image(); domino25.src = "images/Dominos/[2,5].png";domino25.id ="(2,5)";
	domino26 = new Image(); domino26.src = "images/Dominos/[2,6].png";domino26.id ="(2,6)";
	domino33 = new Image(); domino33.src = "images/Dominos/[3,3].png";domino33.id ="(3,3)";
	domino34 = new Image(); domino34.src = "images/Dominos/[3,4].png";domino34.id ="(3,4)";
	domino35 = new Image(); domino35.src = "images/Dominos/[3,5].png";domino35.id ="(3,5)";
	domino36 = new Image(); domino36.src = "images/Dominos/[3,6].png";domino36.id ="(3,6)";
	domino44 = new Image(); domino44.src = "images/Dominos/[4,4].png";domino44.id ="(4,4)";
	domino45 = new Image(); domino45.src = "images/Dominos/[4,5].png";domino45.id ="(4,5)";
	domino46 = new Image(); domino46.src = "images/Dominos/[4,6].png";domino46.id ="(4,6)";
	domino55 = new Image(); domino55.src = "images/Dominos/[5,5].png";domino55.id ="(5,5)";
	domino56 = new Image(); domino56.src = "images/Dominos/[5,6].png";domino56.id ="(5,6)";
	domino66 = new Image(); domino66.src = "images/Dominos/[6,6].png";domino66.id ="(6,6)";

	dominoImages = [ domino00,domino01,domino02,domino03,domino04,domino05,domino06,
				 	 domino11,domino12,domino13,domino14,domino15,domino16,
				 	 domino22,domino23,domino24,domino25,domino26,
				     domino33,domino34,domino35,domino36,
				     domino44,domino45,domino46,
				     domino55,domino56,
				     domino66
			       ]

    return dominoImages;
}

var pickSide = function(domino){
	var leftButton = $("#left");
	var rightButton = $("#right");
	leftButton.show();
	rightButton.show();
	leftButton.click(function(){
		$("#board #placed #totheLeft").append(domino)
		$(this).hide()
		rightButton.hide()
	});
	rightButton.click(function(){
		$("#board #placed #totheRight").append(domino)
		$(this).hide();
		leftButton.hide();
		return true;
	});
}

var wrongMove = function(domino,dominosPlaced,currentPlayer,player1,player2,player3,player4){
	var display = $(window)
	var width = (display.width()/4).toString();
	var height =(display.height()/3).toString();
	var top =  display.height()/2 - height/2;
	var left = display.width()/2 - width/2;
	var fontSize = (display.width()/10).toString();
	var wrongMove = $("#wrongMove");
	wrongMove.css({"font-size" : "large","width": width, "height": height, "position": "absolute", "top" : top, "left": left, }); 
	wrongMove.show()
	wrongMove.click(function(){
		$(this).hide();
		console.log("I am in wrongMove")
		return currentPlayer;
		//runGame(domino,dominosPlaced,currentPlayer,player1,player2,player3,player4);
	});
}

var choseNextPlayer = function(player,player1,player2,player3,player4){
	if(player == "player1"){
		player1.hide();
		player3.hide();
		player4.hide();
		player2.show();
		return "player2";
	}else if(player == "player2"){
		player1.hide();
		player2.hide();
		player4.hide();
		player3.show();
		return "player3";
	}else if(player == "player3"){
		player1.hide();
		player2.hide();
		player3.hide();
		player4.show();
		return "player4";
	}else{
		player2.hide();
		player3.hide();
		player4.hide();
		player1.show();
		return "player1";
	};
}

var addDominoToBoard = function(domino,dominosPlaced){
	var dominoClone = domino.clone();
	dominosPlaced.append(dominoClone);
}

var checkDomino = function(domino,dominosPlaced){
	var numberOfDominosPlaced = dominosPlaced.children().size() - 2;
	//The minus 2 is to exclude the two divs to keep track of left and right
	if(numberOfDominosPlaced == 0){
		if(domino[0].id == "(6,6)"){
			domino.addClass('center');
			return true;
		}else{
			return false;
		}
	}else if(numberOfDominosPlaced == 1){
			if((domino[0].id).indexOf("6")!=-1)
			{
				pickSide(domino);
			}else{
				return false;
			}
	}else{

		return false;
	};
}

var runGame = function(domino,dominosPlaced,currentPlayer,player1,player2,player3,player4){
	var validMove = checkDomino(domino,dominosPlaced);
	if(validMove){
		console.log("I am in runGame:ValidMove");
		addDominoToBoard(domino,dominosPlaced);
		domino.remove();
		currentPlayer = choseNextPlayer(currentPlayer,player1,player2,player3,player4)
		return currentPlayer;
	}else{
		currentPlayer = wrongMove(domino,dominosPlaced,currentPlayer,player1,player2,player3,player4);
		return currentPlayer;
	};
}

var choseFirstPlayer = function(player1,player2,player3,player4){
	if(player1.find("#hand").hasClass('first')){
		player1.show();
		return "player1";
	}else if (player2.find("#hand").hasClass('first')){
		player2.show();
		return "player2";
	}else if(player3.find("#hand").hasClass('first')){
		player3.show();
		return "player3";
	}else{
		player4.show();
		return "player4";
	};
}

var hideHands = function(player1,player2,player3,player4){
	player1.hide();
	player2.hide();
	player3.hide();
	player4.hide();
}

var randomInt = function(number){
    return Math.floor(Math.random()*number);
}

var makeHand = function(player,dominoImages){
	var hand = [];
	var player = $(player);
	var src = dominoImages[dominoImages.length-1].src
	for(x = 0;x<7;x++){
		var ranInt = randomInt(dominoImages.length);
		var domino = dominoImages[ranInt];
		if(domino.src == src){
			player.addClass("first");
		}
		player.append(domino);
		dominoImages.splice(ranInt,1);
	}
	return hand;
}

var hideHands = function(player1,player2,player3,player4){
	player1.hide();
	player2.hide();
	player3.hide();
	player4.hide();
}

var loadGame = function(){
	var dominoImages = makeDominoImages()
	makeHand("#player1 #hand",dominoImages);
	makeHand("#player2 #hand",dominoImages);
	makeHand("#player3 #hand",dominoImages);
	makeHand("#player4 #hand",dominoImages);
}

$(document).ready(function(){
	loadGame();
	var windowWidth = $(window).width(); 
	var windowHeight = $(window).height();
	var gameOn = true;
	var boardImg = $("#board img");
	var dominosPlaced = $("#board #placed");
	var pressed = $("#pressed");
	var notPressed = $("#notPressed");
	var player1 = $("#player1");
	var player2 = $("#player2");
	var player3 = $("#player3");
	var player4 = $("#player4");
	var leftButton = $("#left");
	var rightButton = $("#right"); 
	var wrongMove = $("#wrongMove");
	hideHands(player1,player2,player3,player4);
	var currentPlayer = ""
	boardImg.css({"width":windowWidth.toString(),"height":windowHeight.toString()}).hide();
	pressed.css({"width":windowWidth.toString(),"height":windowHeight.toString()}).hide();
	notPressed.css({"width":windowWidth.toString(),"height":windowHeight.toString()});
	leftButton.hide();
	rightButton.hide();
	wrongMove.hide();
	notPressed.hover(function(){
		$(this).hide();
		pressed.show();
	});
	pressed.click(function(){
		$(this).fadeOut("slow",function(){
			boardImg.show("slow",function(){			
				currentPlayer = choseFirstPlayer(player1,player2,player3,player4);
			});
		});
	});
	$("#player1 #hand img").click(function(){
		var domino = $(this);
		currentPlayer = runGame(domino,dominosPlaced,currentPlayer,
								player1,player2,player3,player4);									
		}); 
	$("#player2 #hand img").click(function(){
		var domino = $(this);
		currentPlayer = runGame(domino,dominosPlaced,currentPlayer,
							   player1,player2,player3,player4);
		}); 
	$("#player3 #hand img").click(function(){
		var domino = $(this);
		currentPlayer = runGame(domino,dominosPlaced,currentPlayer,
							   player1,player2,player3,player4);
		}); 
	$("#player4 #hand img").click(function(){
		var domino = $(this);
		currentPlayer = runGame(domino,dominosPlaced,currentPlayer,
								player1,player2,player3,player4);
		}); 
});