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
	var idBoard = [[],[]];
	var domino = "";
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
			console.log("Please press submit");
		}else{
			if(gameLocked(idBoard)){
				gameOverLocked();
			}else{
				if(youCanPlay(currentPlayer,idBoard)){
					domino = $(this);
					currentPlayer = runGame(domino,currentPlayer,idBoard);									
					if((leftButton[0].style.display != "none") || (rightButton[0].style.display != "none")){
						console.log("Press a button");
					}else{
						showCurrentHand(currentPlayer,player1,player2,player3,player4);
					}
				}else{
					passButton.show();
				};
			}
		};
	}); 
	$("#player2 #hand img").click(function(){
		if(wrongMoveButton[0].style.display != "none"){
			console.log("Please press submit");
		}else{
			if(gameLocked(idBoard)){
				gameOverLocked();
			}else{
				if(youCanPlay(currentPlayer,idBoard)){
					domino = $(this);
					currentPlayer = runGame(domino,currentPlayer,idBoard);									
					if((leftButton[0].style.display != "none") || (rightButton[0].style.display != "none")){
						console.log("Press a button");
					}else{
						showCurrentHand(currentPlayer,player1,player2,player3,player4);
					}
				}else{
					passButton.show();
				};
			}
		};
	});
	$("#player3 #hand img").click(function(){
		if(wrongMoveButton[0].style.display != "none"){
			console.log("Please press submit");
		}else{
			if(gameLocked(idBoard)){
				gameOverLocked();
			}else{
				if(youCanPlay(currentPlayer,idBoard)){
					domino = $(this);
					currentPlayer = runGame(domino,currentPlayer,idBoard);									
					if((leftButton[0].style.display != "none") || (rightButton[0].style.display != "none")){
						console.log("Press a button");
					}else{
						showCurrentHand(currentPlayer,player1,player2,player3,player4);
					}
				}else{
					passButton.show();
				};
			}
		}
	});
	$("#player4 #hand img").click(function(){
		if(wrongMoveButton[0].style.display != "none"){
			console.log("Please press submit");
		}else{
			if(gameLocked(idBoard)){
				gameOverLocked();
			}else{
				if(youCanPlay(currentPlayer,idBoard)){
					domino = $(this);
					currentPlayer = runGame(domino,currentPlayer,idBoard);									
					if((leftButton[0].style.display != "none") || (rightButton[0].style.display != "none")){
						console.log("Press a button");
					}else{
						showCurrentHand(currentPlayer,player1,player2,player3,player4);
					}
				}else{
					passButton.show();
				};
			}
		};
	});
	leftButton.click(function(){
		addDominoToTheLeft(domino,idBoard);
		domino.remove();
		$(this).hide();
		rightButton.hide();
		showCurrentHand(currentPlayer,player1,player2,player3,player4);
	});
	rightButton.click(function(){
		addDominoToTheRight(domino,idBoard);
		domino.remove();
		$(this).hide();
		leftButton.hide();
		showCurrentHand(currentPlayer,player1,player2,player3,player4);
	});
	passButton.click(function(){
		$(this).hide();
		currentPlayer = choseNextPlayer(currentPlayer);
		showCurrentHand(currentPlayer,player1,player2,player3,player4);
	})
});

var createHands = function(){
	var dominoImages = makeDominoImages();
	makeHand("#player1 #hand",dominoImages);
	makeHand("#player2 #hand",dominoImages);
	makeHand("#player3 #hand",dominoImages);
	makeHand("#player4 #hand",dominoImages);
}

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

var randomInt = function(number){
    return Math.floor(Math.random()*number);
}

var setUpStartScreen = function(windowWidth,windowHeight){
	var startScreen = $("#notPressed");
	startScreen.css({"width":windowWidth.toString(),"height":windowHeight.toString()});
	return startScreen;
}

var setUpStartScreenPreesed = function(windowWidth,windowHeight){
	var startScreenPressed = $("#pressed");
	startScreenPressed.css({"width":windowWidth.toString(),"height":windowHeight.toString()});
	startScreenPressed.hide();
	return startScreenPressed;
}

var setUpBoard = function(windowWidth,windowHeight){
	var board = $("#board img");
	board.css({"width":windowWidth.toString(),"height":windowHeight.toString()});
	board.hide();
	return board;
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

var hideHands = function(player1,player2,player3,player4){
	player1.hide();
	player2.hide();
	player3.hide();
	player4.hide();
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

var gameLocked = function(idBoard){
	if(idBoard[0].length == 0){
		return false;
	}else{
		var player1 = "player1";
		var player2 = "player2";
		var player3 = "player3";
		var player4 = "player4";
		var player1canPlay = youCanPlay(player1,idBoard);
		var player2canPlay = youCanPlay(player2,idBoard);
		var player3canPlay = youCanPlay(player3,idBoard);
		var player4canPlay = youCanPlay(player4,idBoard);
		if(((!player1canPlay) && (!player2canPlay) && (!player3canPlay) && (!player4canPlay))){
			return true;
		}else{
			return false;
		};
	}
}

var gameOverLocked = function(){
	var player1Hand = createArrayOfIds("player1");
	var player2Hand = createArrayOfIds("player2");
	var player3Hand = createArrayOfIds("player3");
	var player4Hand = createArrayOfIds("player4");
	var totalHand1 = getSum(player1Hand);
	var totalHand2 = getSum(player2Hand);
	var totalHand3 = getSum(player3Hand);
	var totalHand4 = getSum(player4Hand);
	var minimum = Math.min(totalHand1,totalHand2,totalHand3,totalHand4);
	if(minimum == totalHand1){
		gameOverScreen("player1");
	}else if(minimum == totalHand2){
		gameOverScreen("player2");
	}else if(minimum == totalHand3){
		gameOverScreen("player3");
	}else if(minimum == totalHand4){
		gameOverScreen("player4");
	}else{
		console.log("Houston We have a problem");
		console.log("this is the minimum:" + minimum);
		console.log("this is player1Hand Sum:" + totalHand1);
		console.log("this is player1Hand Sum:" + totalHand2);
		console.log("this is player1Hand Sum:" + totalHand3);
		console.log("this is player1Hand Sum:" + totalHand4);
	}
}

var getSum = function(hand){
	var handLength = hand.length;
	var sum = 0;
	for(x = 0;x<handLength;x++){
		var dominoId = hand[x];
		var firstNumberString = dominoId[1];
		var secondNumberString = dominoId[3];
		var firstNumber = parseInt(firstNumberString,10);
		var secondNumber = parseInt(secondNumberString,10);
		sum = sum + firstNumber + secondNumber;
	}
	return sum;
}

var youCanPlay = function(currentPlayer,idBoard){
	var arrayOfIds = createArrayOfIds(currentPlayer);
	if(idBoard[0].length == 0){
		return true;
	}else{
		for(x =0; x<arrayOfIds.length;x++){
			var dominoId = arrayOfIds[x];
			if(checkDomino(dominoId,idBoard)){
				return true;
			};
		};
		return false;
	}
}

var createArrayOfIds = function(currentPlayer){
	var playerString = "#"+currentPlayer+" #hand img"
	var playerHand = $(playerString);
	var arrayOfIds = [];
	playerHand.each(function(index){
		var domino = $(this);
		var id = domino.attr('id'); 
		arrayOfIds.push(id);
	});
	return arrayOfIds;
}

var checkDomino = function(dominoId,idBoard){
	if(idBoard[0].length == 0){
		if(dominoId == "(6,6)"){
			return true;
		}else{
			return false;
		}
	}else{
		var numberOfDominosOnRight = idBoard[1].length-1;
		var lastLeftDomino = idBoard[0][0]; 
		var lastRightDomino = idBoard[1][numberOfDominosOnRight];
		var firstNumber = lastLeftDomino[1];
		var secondNumber = lastRightDomino[3];
		var dominoFirstNumber = dominoId[1];
		var dominoSecondNumber = dominoId[3];
		if(dominoFirstNumber  == firstNumber)
		{
			return true;
		}else if(dominoFirstNumber  == secondNumber){
			return true;
		}else if(dominoSecondNumber == firstNumber){
			return true;
		}else if (dominoSecondNumber == secondNumber){
		   return true;
		}else{
			return false;
		};
	};
}

var runGame = function(domino,currentPlayer,idBoard){
	var dominoId = domino[0].id
	var validMove = checkDomino(dominoId,idBoard);
	if(validMove){
		if(idBoard[0].length == 0){
			addFirstDominoToBoard(domino,idBoard);
			domino.remove();
			currentPlayer = choseNextPlayer(currentPlayer);
			return currentPlayer;
		 }else if(validOnlyOnRight(domino,idBoard)){
		 	addDominoToTheRight(domino,idBoard);
		 	domino.remove();
			currentPlayer = choseNextPlayer(currentPlayer);
			return currentPlayer;
		 }else if(validOnlyOnLeft(domino,idBoard)){
		 	addDominoToTheLeft(domino,idBoard);
		 	domino.remove();
			currentPlayer = choseNextPlayer(currentPlayer);
			return currentPlayer;
		 }else{
		 	pickDirection(domino,idBoard);
			currentPlayer = choseNextPlayer(currentPlayer);
			return currentPlayer;
		 };
	}else{
		wrongMove(currentPlayer);
		return currentPlayer;
	};
}

var addFirstDominoToBoard = function(domino,idBoard){
	addDominoToTheLeft(domino,idBoard);
	addDominoToTheRight(domino,idBoard);
	drawBoard(idBoard);
}

var addDominoToTheLeft = function(domino,idBoard){
	var dominoId = orientIdLeft(domino,idBoard);
	idBoard[0].unshift(dominoId);
	drawBoard(idBoard);
}

var orientIdLeft = function(domino,idBoard){
	var dominoId = domino[0].id;
	if(idBoard[0].length == 0){
		return dominoId;
	}else{
		var newDominoId = ""
		var lastLeftDomino = idBoard[0][0];
		var dominoFirstNumber = dominoId[1];
		var dominoSecondNumber = dominoId[3];
		var firstNumber = lastLeftDomino[1];
		if(dominoFirstNumber == firstNumber){
			newDominoId = "(" + dominoSecondNumber +","+dominoFirstNumber+")";
			return newDominoId;
		}else if(dominoSecondNumber == firstNumber){
			return dominoId;
		}else{
			console.log("Houston, we have a problem.We are in orientIdLeft");
			console.log("This is the domino:"+dominoId);
			drawBoard(idBoard);
		}
	};
}

var drawBoard = function(idBoard){
	var player1Hand = createArrayOfIds("player1");
	var player2Hand = createArrayOfIds("player2");
	var player3Hand = createArrayOfIds("player3");
	var player4Hand = createArrayOfIds("player4");
	console.log("Left Side:"+idBoard[0]);
	console.log("Right Side:" +idBoard[1]);
	console.log("player1Hand:"+player1Hand +"length"+player1Hand.length);
	console.log("player2Hand:"+player2Hand +"length"+player2Hand.length);
	console.log("player3Hand:"+player3Hand +"length"+player3Hand.length);
	console.log("player4Hand:"+player4Hand +"length"+player4Hand.length);
}

var addDominoToTheRight = function(domino,idBoard){
	var dominoId = orientIdRight(domino,idBoard);
	idBoard[1].push(dominoId);
	drawBoard(idBoard);
}

var orientIdRight = function(domino,idBoard){
	var dominoId = domino[0].id;
	if(idBoard[1].length == 0){
		return dominoId;
	}else{
		var newDominoId = ""
		var numberOfDominosOnRight = idBoard[1].length-1;
		var lastRightDomino = idBoard[1][numberOfDominosOnRight];
		var dominoFirstNumber = dominoId[1];
		var dominoSecondNumber = dominoId[3];
		var secondNumber = lastRightDomino[3];
		if(dominoFirstNumber == secondNumber){
			return dominoId;
		}else if(dominoSecondNumber == secondNumber){
			newDominoId = "(" + dominoSecondNumber +","+dominoFirstNumber+")";
			return newDominoId; 
		}else{
			drawBoard(idBoard);
		}
	};
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

var validOnlyOnRight = function(domino,idBoard){
	var lastLeftDomino = idBoard[0][0]; 
	var firstNumber = lastLeftDomino[1];
	var dominoId = domino[0].id;
	var dominoFirstNumber = dominoId[1];
	var dominoSecondNumber = dominoId[3];
	if(dominoFirstNumber != firstNumber && dominoSecondNumber != firstNumber){
		return true;
	}else{
		return false;
	}; 
}

var validOnlyOnLeft = function(domino,idBoard){
	var numberOfDominosOnRight = idBoard[1].length-1;
	var lastRightDomino = idBoard[1][numberOfDominosOnRight];
	var secondNumber = lastRightDomino[3];
	var dominoId = domino[0].id;
	var dominoFirstNumber = dominoId[1];
	var dominoSecondNumber = dominoId[3];
	if(dominoFirstNumber != secondNumber && dominoSecondNumber != secondNumber){
		return true;
	}else{
		return false;
	}; 
}

var pickDirection = function(domino,idBoard){
	var leftButton = $("#leftButton");
	var rightButton = $("#rightButton");
	leftButton.show();
	rightButton.show();
}

var wrongMove = function(currentPlayer){
	var wrongMoveButton = $("#wrongMoveButton"); 
	wrongMoveButton.show()
	wrongMoveButton.click(function(){
		$(this).hide();
	});
}

var showCurrentHand = function(currentPlayer,player1,player2,player3,player4){
	if (gameOver()){
		hideHands(player1,player2,player3,player4);
	}else{
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
}

var gameOver = function(){
	var player1Hand = createArrayOfIds("player1");
	var player2Hand = createArrayOfIds("player2");
	var player3Hand = createArrayOfIds("player3");
	var player4Hand = createArrayOfIds("player4");
	if(player1Hand.length == 0){
		gameOverScreen("player1");
		return true;
	}else if(player2Hand.length == 0){
		gameOverScreen("player2");
		return true;
	}else if(player3Hand.length == 0){
		gameOverScreen("player3");
		return true;
	}else if(player4Hand.length == 0){
		gameOverScreen("player4");
		return true; 
	}
}

var gameOverScreen = function(player){
	console.log(player+ " has won the game congratulations");
}











































