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


var showCurrentHand = function(currentPlayer,player1,player2,player3,player4){
	if(currentPlayer == "player1"){
		player1.show();
		player2.hide();
		player3.hide();
		player4.hide();
	}else if(currentPlayer == "player2"){
		player1.hide();
		player2.show();
		player3.hide();
		player4.hide();
	}else if(currentPlayer == "player3"){
		player1.hide();
		player2.hide();
		player3.show();
		player4.hide();
	}else if(currentPlayer == "player4"){
		player1.hide();
		player2.hide();
		player3.hide();
		player4.show();
	}else{
		player1.hide();
		player2.hide();
		player3.hide();
		player4.hide();
	}
}

var hideCurrentHand = function(currentPlayer){
	if(currentPlayer == "player1"){
		$("#player1").hide();
	}else if(currentPlayer == "player2"){
		$("#player2").hide();
	}else if(currentPlayer == "player3"){
		$("#player3").hide();
	}else{
		$("#player4").hide();
	};

}

var wrongMove = function(currentPlayer){
	var wrongMoveButton = $("#wrongMoveButton"); 
	wrongMoveButton.show()
	wrongMoveButton.click(function(){
		$(this).hide();
	});
}

var choseNextPlayer = function(currentPlayer){
	if(currentPlayer == "player1"){
		return "player2";
	}else if(currentPlayer == "player2"){
		return "player3";
	}else if(currentPlayer == "player3"){
		return "player4";
	}else{
		return "player1";
	};
}


var pickDirection = function(domino,dominosPlaced){
	var leftButton = $("#leftButton");
	var rightButton = $("#rightButton");
	leftButton.show();
	rightButton.show();
	var dominoClone = realDomino.clone();
	leftButton.click(function(){
		$("#board #placed").prepend(dominoClone);
		dominoClone.addClass("left");
		$(this).hide();
		rightButton.hide();
	});
	rightButton.click(function(){
		$("#board #placed").append(dominoClone);
		dominoClone.addClass("right");
		$(this).hide();
		leftButton.hide();
	});
}

var checkDomino = function(domino,dominosPlaced){
	var dominosPlaced = $("#board #placed #totheLeft")
	numberOfDominosPlaced = dominosPlaced.children().size()
	//The minus 2 is to exclude the two divs to keep track of left and right
	if(numberOfDominosPlaced == 0){
		if(domino[0].id == "(6,6)"){
			return true;
		}else{
			return false;
		}
	}else{
		var lastLeftDomino = $("#board #placed #totheLeft").find("img:last")[0].id
		var lastRightDomino = $("#board #placed #totheRight").find("img:last")[0].id
		var firstNumber = lastLeftDomino[1];
		var secondNumber = lastLeftDomino[3];
		var thirdNumber = lastRightDomino[1];
		var fourthNumber = lastRightDomino[3];
		var dominoFirstNumber = domino[0].id[1];
		var dominoSecondNumber = domino[0].id[3];
		console.log("1:"+firstNumber);
		console.log("2:"+secondNumber);
		console.log("3:"+thirdNumber);
		console.log("4:"+fourthNumber);
		console.log("5:"+dominoFirstNumber);
		console.log("6:"+dominoSecondNumber);
		if(dominoFirstNumber  == firstNumber)
		{
			console.log("First");
			return true;
		}else if(dominoFirstNumber  == secondNumber){
			console.log("Second");
			return true;
		}else if(dominoFirstNumber  == thirdNumber){
			console.log("Third");
			return true;
		}else if(dominoFirstNumber  == fourthNumber){
			console.log("Fourth");
			return true;
		}else if(dominoSecondNumber == firstNumber){
			console.log("Fifth");
			return true;
		}else if (dominoSecondNumber == secondNumber){
			console.log("Sixth");
		   return true;
		}else if(dominoSecondNumber == thirdNumber){
			console.log("Seventh");
			return true;
		}else if(dominoSecondNumber == fourthNumber){
			console.log("Eight");
			return true;
		}else{
			console.log("None");
			return false;
		};
	};
}

var runGame = function(domino,dominosPlaced,currentPlayer){
	var validMove = checkDomino(domino,dominosPlaced);
	if(validMove){
		var dominosPlaced = $("#board #placed #totheLeft")
		numberOfDominosPlaced = dominosPlaced.children().size()
		console.log("numberOfDominosPlaced:" + numberOfDominosPlaced);
		if(numberOfDominosPlaced == 0){
			console.log("In here");
			var dominoClone = domino.clone();
			var dominoClone2 = domino.clone();
			$("#board #placed #totheLeft").append(dominoClone);
			$("#board #placed #totheRight").append(dominoClone2)
			dominoClone2.hide();
			domino.remove();
			currentPlayer = choseNextPlayer(currentPlayer);
			return currentPlayer;
		 }else{
		 	pickDirection(domino);
		 	domino.remove();
			currentPlayer = choseNextPlayer(currentPlayer);
			return currentPlayer;
		 }
	}else{
		wrongMove(currentPlayer);
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

var createHands = function(){
	var dominoImages = makeDominoImages()
	makeHand("#player1 #hand",dominoImages);
	makeHand("#player2 #hand",dominoImages);
	makeHand("#player3 #hand",dominoImages);
	makeHand("#player4 #hand",dominoImages);
}



var setUpPassButton = function(windowWidth,windowHeight){
	var passButton = $("#passButton");
	var width = (windowWidth/4).toString();
	var height =(windowHeight/3).toString();
	var top =  windowHeight/2 - height/2;
	var left = windowWidth/2 - width/2;
	var fontSize = (windowWidth/25).toString()+"px";
	passButton.css({"position": "absolute","fontSize": fontSize, "width": width, "height": height, "top": top, "left": left});
	passButton.hide();
	return passButton;
}

var setUpWrongMoveButton = function(windowWidth,windowHeight){
	var wrongMoveButton = $("#wrongMoveButton");
	var width = (windowWidth/4).toString();
	var height =(windowHeight/3).toString();
	var top =  windowHeight/2 - height/2;
	var left = windowWidth/2 - width/2;
	var fontSize = (windowWidth/25).toString()+"px";
	wrongMoveButton.css({"position": "absolute","fontSize": fontSize, "width": width, "height": height, "top": top, "left": left});
	wrongMoveButton.hide();
	return wrongMoveButton;
}

var setUpRightButton = function(windowWidth,windowHeight){
	var rightButton = $("#rightButton");
	var width = (windowWidth/4).toString();
	var height = (windowHeight/3).toString();
	var top = (windowHeight*.80 - height/2);
	var left = (windowWidth*.85 - width/2);
	var fontSize = (windowWidth/35).toString()+"px";
	rightButton.css({"position": "absolute","fontSize": fontSize, "width": width, "height": height, "top": top, "left": left});
	rightButton.hide();
	return rightButton
}

var setUpLeftButton = function(windowWidth,windowHeight){
	var leftButton = $("#leftButton");
	var width = (windowWidth/4).toString();
	var height = (windowHeight/3).toString();
	var top = (windowHeight*.80 - height/2);
	var left = (windowWidth*.15 - width/2);
	var fontSize = (windowWidth/35).toString()+"px";
	leftButton.css({"position": "absolute","fontSize": fontSize, "width": width, "height": height, "top": top, "left": left});
	leftButton.hide();
	return leftButton
}

var setUpBoard = function(windowWidth,windowHeight){
	var board = $("#board img");
	board.css({"width":windowWidth.toString(),"height":windowHeight.toString()});
	board.hide();
	return board;
}

var setUpStartScreenPreesed = function(windowWidth,windowHeight){
	var startScreenPressed = $("#pressed");
	startScreenPressed.css({"width":windowWidth.toString(),"height":windowHeight.toString()});
	startScreenPressed.hide();
	return startScreenPressed;
}

var setUpStartScreen = function(windowWidth,windowHeight){
	var startScreen = $("#notPressed");
	startScreen.css({"width":windowWidth.toString(),"height":windowHeight.toString()});
	return startScreen;
}

$(document).ready(function(){
	createHands();
	var windowWidth = $(window).width(); 
	var windowHeight = $(window).height();
	var startScreen = setUpStartScreen(windowWidth, windowHeight);
	var startScreenPressed = setUpStartScreenPreesed(windowWidth, windowHeight);
	var boardImg = setUpBoard(windowWidth, windowHeight);	
	var leftButton = setUpLeftButton(windowWidth,windowHeight);
	var rightButton = setUpRightButton(windowWidth,windowHeight);
	var wrongMoveButton = setUpWrongMoveButton(windowWidth,windowHeight);
	var passButton = setUpPassButton(windowWidth,windowHeight);
	var player1 = $("#player1");
	var player2 = $("#player2");
	var player3 = $("#player3");
	var player4 = $("#player4");
	var currentPlayer = ""
	var dominosPlaced = $("#board #placed");
	hideHands(player1,player2,player3,player4);
	startScreen.hover(function(){
		$(this).hide();
		startScreenPressed.show();
	});
	startScreenPressed.click(function(){
		$(this).fadeOut("slow",function(){
			boardImg.show("slow",function(){			
				currentPlayer = choseFirstPlayer(player1,player2,player3,player4);
			});
		});
	});
	$("#player1 #hand img").click(function(){
		if(wrongMoveButton[0].style.display != "none"){
			console.log("Please press submit")
		}else if((leftButton[0].style.display != "none") || (rightButton[0].style.display != "none")){
			console.log("Press a button");
		}else{
			var domino = $(this);
			currentPlayer = runGame(domino,dominosPlaced,currentPlayer);									
			showCurrentHand(currentPlayer,player1,player2,player3,player4);
		};
	}); 
	$("#player2 #hand img").click(function(){
		if(wrongMoveButton[0].style.display != "none"){
			console.log("Please press submit")
		}else if((leftButton[0].style.display != "none") || (rightButton[0].style.display != "none")){
			console.log("Press a button");
		}else{
			var domino = $(this);
			currentPlayer = runGame(domino,dominosPlaced,currentPlayer);									
			showCurrentHand(currentPlayer,player1,player2,player3,player4);
		};
	}); 
	$("#player3 #hand img").click(function(){
		if(wrongMoveButton[0].style.display != "none"){
			console.log("Please press submit")
		}else if((leftButton[0].style.display != "none") || (rightButton[0].style.display != "none")){
			console.log("Press a button");
		}else{
			var domino = $(this);
			currentPlayer = runGame(domino,dominosPlaced,currentPlayer);									
			showCurrentHand(currentPlayer,player1,player2,player3,player4);
		};
	}); 
	$("#player4 #hand img").click(function(){
		if(wrongMoveButton[0].style.display != "none"){
			console.log("Please press submit")
		}else if((leftButton[0].style.display != "none") || (rightButton[0].style.display != "none")){
			console.log("Press a button");
		}else{
			var domino = $(this);
			currentPlayer = runGame(domino,dominosPlaced,currentPlayer);									
			showCurrentHand(currentPlayer,player1,player2,player3,player4);
		};
	});
});

