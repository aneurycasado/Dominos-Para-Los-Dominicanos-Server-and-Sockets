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
	var gameOverButton = setUpGameOverButton(windowWidth,windowHeight);
	var player1 = $("#player1");
	var player2 = $("#player2");
	var player3 = $("#player3");
	var player4 = $("#player4");
	var currentPlayer = ""
	var idBoard = [[],[],[],[],[],[]];
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
			//console.log("Please press submit");
		}else{
			if(gameLocked(idBoard)){
				gameOverLocked();
			}else{
				if(youCanPlay(currentPlayer,idBoard)){
					domino = $(this);
					currentPlayer = runGame(domino,currentPlayer,idBoard);
					if((leftButton[0].style.display != "none") || (rightButton[0].style.display != "none")){
						//console.log("Press a button");
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
			//console.log("Please press submit");
		}else{
			if(gameLocked(idBoard)){
				gameOverLocked();
			}else{
				if(youCanPlay(currentPlayer,idBoard)){
					domino = $(this);
					currentPlayer = runGame(domino,currentPlayer,idBoard);
					if((leftButton[0].style.display != "none") || (rightButton[0].style.display != "none")){
						//console.log("Press a button");
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
			//console.log("Please press submit");
		}else{
			if(gameLocked(idBoard)){
				gameOverLocked();
			}else{
				if(youCanPlay(currentPlayer,idBoard)){
					domino = $(this);
					currentPlayer = runGame(domino,currentPlayer,idBoard);
					if((leftButton[0].style.display != "none") || (rightButton[0].style.display != "none")){
						//console.log("Press a button");
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
			//console.log("Please press submit");
		}else{
			if(gameLocked(idBoard)){
				gameOverLocked();
			}else{
				if(youCanPlay(currentPlayer,idBoard)){
					domino = $(this);
					currentPlayer = runGame(domino,currentPlayer,idBoard);
					if((leftButton[0].style.display != "none") || (rightButton[0].style.display != "none")){
						//console.log("Press a button");
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
	});
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
		scaleDomino(domino);
		player.append(domino);
		dominoImages.splice(ranInt,1);
	}
	return hand;
}

var randomInt = function(number){
    return Math.floor(Math.random()*number);
}

var scaleDomino = function(domino){
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	var dominoWidth = (windowWidth/10);
	var dominoHeight = 2*dominoWidth;
	domino.width = dominoWidth;
	domino.height = dominoHeight;
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
	var dominoWidth = (windowWidth/10);
	var dominoHeight = 2*dominoWidth;
	var windowHeight = windowHeight - dominoHeight;
	board.css({"width":windowWidth.toString(),"height":windowHeight.toString()});
	board.hide();
	return board;
}

var setUpLeftButton = function(windowWidth,windowHeight){
	var leftButton = $("#leftButton");
	var width = (windowWidth/4).toString();
	var height = (windowHeight/3).toString();
	var dominoWidth = (windowWidth/10);
	var dominoHeight = 2*dominoWidth;
	var top = (windowHeight*.80 - height/2) - dominoHeight;
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
	var dominoWidth = (windowWidth/10);
	var dominoHeight = 2*dominoWidth;
	var top = (windowHeight*.80 - height/2) - dominoHeight;
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
	var dominoWidth = (windowWidth/10);
	var dominoHeight = 2*dominoWidth;
	var top =  windowHeight/2 - height/2 - dominoHeight;
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
	var dominoWidth = (windowWidth/10);
	var dominoHeight = 2*dominoWidth;
	var top =  windowHeight/2 - height/2 - dominoHeight;
	var left = windowWidth/2 - width/2;
	var fontSize = (windowWidth/25).toString()+"px";
	passButton.css({"position": "absolute","fontSize": fontSize, "width": width, "height": height, "top": top, "left": left});
	passButton.hide();
	return passButton;
}

var setUpGameOverButton = function(windowWidth,windowHeight){
	var gameOverButton = $("#gameOverButton");
	var width = (windowWidth/4).toString();
	var height =(windowHeight/3).toString();
	var dominoWidth = (windowWidth/10);
	var dominoHeight = 2*dominoWidth;
	var top =  windowHeight/2 - height/2 - dominoHeight;
	var left = windowWidth/2 - width/2;
	var fontSize = (windowWidth/25).toString()+"px";
	gameOverButton.css({"position": "absolute","fontSize": fontSize, "width": width, "height": height, "top": top, "left": left});
	gameOverButton.hide();
	return gameOverButton;
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
	drawFirstDomino(idBoard);
}

var addDominoToTheLeft = function(domino,idBoard){
	var dominoId = orientIdLeft(domino,idBoard);
	idBoard[0].unshift(dominoId);
	drawDominoOnLeftSide(domino,idBoard);
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
			domino.addClass("changed");
			newDominoId = "(" + dominoSecondNumber +","+dominoFirstNumber+")";
			return newDominoId;
		}else if(dominoSecondNumber == firstNumber){
			domino.addClass("notChanged");
			return dominoId;
		}else{
			console.log("Houston, we have a problem.");
		}
	};
}

var addDominoToTheRight = function(domino,idBoard){
	var dominoId = orientIdRight(domino,idBoard);
	idBoard[1].push(dominoId);
	drawDominoOnRightSide(domino,idBoard);
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
			domino.addClass("notChanged");
			return dominoId;
		}else if(dominoSecondNumber == secondNumber){
			domino.addClass("changed");
			newDominoId = "(" + dominoSecondNumber +","+dominoFirstNumber+")";
			return newDominoId;
		}else{
			console.log("Houston, we have a problem.");
		}
	};
}


var drawFirstDomino = function(idBoard){
	var dominoImages = makeDominoImages();
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	var dominoWidth = (windowWidth/10);
	var dominoHeight = 2*dominoWidth;
	var placedDominoWidth = dominoWidth / 2;
	var placedDominoHeight = 2 * placedDominoWidth;
	var topHeight =  (windowHeight/2 - 1.5*placedDominoHeight) + "px";
	var leftWide = windowWidth/2 - placedDominoWidth/2 + "px";
	var domino = dominoImages[27];
	domino.style.width = placedDominoWidth + "px";
	domino.style.height = placedDominoHeight + "px";
	domino.style.position = "absolute";
	domino.style.top = topHeight;
	domino.style.left = leftWide;
	var board = $("#board")
	board.append(domino);
}

var drawDominoOnRightSide = function(domino,idBoard){
	if(idBoard[1].length > 1){
		var dominoImages = makeDominoImages();
		var dominoImage = "";
		var windowWidth = $(window).width();
		var windowHeight = $(window).height();
		var dominoWidth = (windowWidth/10);
		var dominoHeight = 2*dominoWidth;
		var placedDominoWidth = dominoWidth / 2;
		var placedDominoHeight = 2 * placedDominoWidth;
		var topHeight =  (windowHeight/2 - 1.5*placedDominoHeight) + "px";
		var leftWide = windowWidth/2 - placedDominoWidth/2;
		var rightSide = idBoard[1];
		var board = $("#board");
		var scalers = createScalersRight(rightSide)
		var dominoId = domino[0].id
		var rightSideLength = rightSide.length
		var dominoImage = findDominoImage(dominoId,dominoImages)
		dominoImage = setDominoImage(dominoImage,placedDominoWidth,placedDominoHeight,topHeight)
		var adjuster = createAdjusterRight(scalers,placedDominoWidth);
		var newLeft = leftWide + adjuster - placedDominoWidth/2;
		if(domino.hasClass("changed")){
			if(dominoId[1] != dominoId[3]){
				dominoImage.className = "rotated90";
			}else{
				newLeft = leftWide + adjuster
			}
		}else if(domino.hasClass("notChanged")){
			if(dominoId[1] != dominoId[3]){
				dominoImage.className = "rotate270";
			}else{
				newLeft = leftWide + adjuster
			}
		}
		if(dominoId[1] != dominoId[3]){
			if(newLeft + placedDominoHeight > windowWidth ){
				var dominosOnRight = rightSideLength
				var lastDominoOnRight = rightSide[rightSideLength-2]
				if(idBoard[3].length == 0){
					idBoard[3].push(dominosOnRight)
					idBoard[3].push(newLeft)
					idBoard[3].push(lastDominoOnRight)
				}
				drawDominosUp(domino,idBoard)
			}else{
				dominoImage.style.left = newLeft + "px";
				board.append(dominoImage);
			}
		}else{
			if(newLeft + placedDominoWidth > windowWidth){
				console.log("A double and time to drawUp")
				var dominosOnRight = rightSideLength
				var lastDominoOnRight = rightSide[rightSideLength-2]
				if(idBoard[3].length == 0){
					idBoard[3].push(dominosOnRight)
					idBoard[3].push(newLeft)
					idBoard[3].push(lastDominoOnRight)
				}
				drawDominosUp(domino,idBoard)
			}else{
				dominoImage.style.left = newLeft + "px";
				console.log(dominoImage.style.top)
				board.append(dominoImage);
			}
		}
	}
}

var createScalersRight = function(rightSide){
	var scalers = []
	for(var x = 0; x < rightSide.length; x++){
		var currentDominoId = rightSide[x]
		if(currentDominoId[1] == currentDominoId[3]){
			scalers.push(1)
		}else{
			scalers.push(2)
		}
	}
	return scalers
}

var createAdjusterRight = function(scalers,placedDominoWidth){
	var adjuster = 0
	for(var x=1;x<scalers.length;x++){
		var newWide = scalers[x]*placedDominoWidth;
		adjuster += newWide;
	}
	return adjuster
}

var drawDominosUp = function(domino,idBoard){
	console.log("In drawDominoUp")
	var newLeft = idBoard[3][1]
	console.log("newLeft in beginning drawDominoUp:" + newLeft);
	var dominoImages = makeDominoImages();
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	var dominoWidth = (windowWidth/10);
	var dominoHeight = 2*dominoWidth;
	var placedDominoWidth = dominoWidth / 2;
	var placedDominoHeight = 2 * placedDominoWidth;
	var topHeight =  (windowHeight/2 - 1.5*placedDominoHeight);
	var leftWide = newLeft;
	var rightSide = idBoard[1];
	var board = $("#board");
	var dominosOnRight = idBoard[3][0]
	var scalers = createScalersUp(rightSide,dominosOnRight)
	var dominoId = domino[0].id
	var rightSideLength = rightSide.length
	var dominoImage = findDominoImage(dominoId,dominoImages)
	dominoImage.style.width = placedDominoWidth + "px";
	dominoImage.style.height = placedDominoHeight + "px";
	dominoImage.style.position = "absolute";
	dominoImage.style.left = newLeft - placedDominoHeight + placedDominoWidth/2 + "px"
	var adjuster = createAdjusterUp(scalers,placedDominoHeight)
	var lastDominoOnRight = idBoard[3][2]
	if(lastDominoOnRight[1] == lastDominoOnRight[3]){
		var newTop = topHeight - placedDominoHeight  - placedDominoWidth/2 - adjuster
	}else{
		var newTop = topHeight - placedDominoHeight - adjuster;
	}
	if(domino.hasClass("changed")){
		if(dominoId[1] != dominoId[3]){
			console.log("This is the domino")
			console.log("Do not rotate");
			dominoImage.className = "none";
		}else{
			console.log("Problem"+dominoId)
			dominoImage.className = "rotated90";
		}
	}else{
		if(dominoId[1] != dominoId[3]){
			console.log('rotate180');
			dominoImage.className = "rotate180";
		}else{
			console.log('rotate90');
			dominoImage.className = "rotated90";
		}
	}
	if(dominoId[1] != dominoId[3]){
		if(newTop < 0 ){
			console.log("Less than zero and not a double")
		}else{
			dominoImage.style.top = newTop + placedDominoWidth/2 + "px";
			board.append(dominoImage);
		}
	}else{
		if(newTop < 0){
			console.log("Less than zero and a double");
		}else{
			console.log("This is the newTop in the end: " +newTop);
			dominoImage.style.top = newTop + "px";
			board.append(dominoImage);
		}
	}

}

var createScalersUp = function(rightSide,dominosOnRight){
	var scalers = []
	for(x = dominosOnRight; x < rightSide.length; x++){
		var currentDominoId = rightSide[x]
		if(currentDominoId[1] == currentDominoId[3]){
			scalers.push(.5)
		}else{
			scalers.push(1)
		}
	}
	return scalers
}

var createAdjusterUp = function(scalers,placedDominoHeight){
	adjuster = 0
	for(x=0;x<scalers.length;x++){
		var newHeight = scalers[x]*placedDominoHeight;
		adjuster += newHeight;
	}
	return adjuster
}


var drawDominoOnLeftSide = function(domino,idBoard){
	if(idBoard[0].length > 1){
		var dominoImages = makeDominoImages();
		var dominoImage = "";
		var windowWidth = $(window).width();
		var windowHeight = $(window).height();
		var dominoWidth = (windowWidth/10);
		var dominoHeight = 2*dominoWidth;
		var placedDominoWidth = dominoWidth / 2;
		var placedDominoHeight = 2 * placedDominoWidth;
		var topHeight =  (windowHeight/2 - 1.5*placedDominoHeight) + "px";
		var leftWide = windowWidth/2 - placedDominoWidth/2;
		var leftSide = idBoard[0];
		var board = $("#board");
		var scalers = createScalersLeft(leftSide)
		var dominoId = domino[0].id
		var leftSideLength = leftSide.length
		var dominoImage = findDominoImage(dominoId,dominoImages)
		dominoImage = setDominoImage(dominoImage,placedDominoWidth,placedDominoHeight,topHeight)
		var adjuster = createAdjusterLeft(scalers,placedDominoWidth)
		var newLeft = leftWide - adjuster + placedDominoWidth/2;
		if(domino.hasClass("changed")){
			if(dominoId[1] != dominoId[3]){
				dominoImage.className = "rotated90";
			}else{
				newLeft = leftWide - adjuster
			}
		}else if(domino.hasClass("notChanged")){
			if(dominoId[1] != dominoId[3]){
				dominoImage.className = "rotate270";
			}else{
				newLeft = leftWide - adjuster
			}
		}
		if(dominoId[1] != dominoId[3]){
			if(newLeft - (placedDominoHeight/2) < 0){
				var dominosOnLeft = scalers.length;
				var lastDominoOnLeft = leftSide[1]
				newLeft = newLeft + placedDominoHeight/2
				if(idBoard[2].length == 0){
					idBoard[2].push(dominosOnLeft)
					idBoard[2].push(newLeft)
					idBoard[2].push(lastDominoOnLeft)
				}
				drawDominoDown(domino,idBoard);
			}else{
				dominoImage.style.left = newLeft + "px";
				board.append(dominoImage);
			}
		}else{
			if(newLeft - (placedDominoWidth/2) < 0){
				var dominosOnLeft = scalers.length;
				var lastDominoOnLeft = leftSide[1]
				newLeft = newLeft + placedDominoWidth
				if(idBoard[2].length == 0){
					idBoard[2].push(dominosOnLeft)
					idBoard[2].push(newLeft)
					idBoard[2].push(lastDominoOnLeft)
				}
				drawDominoDown(domino,idBoard);
			}else{
				dominoImage.style.left = newLeft + "px";
				board.append(dominoImage);
			}
		}
	}
}

var createScalersLeft = function(leftSide){
	var scalers = []
	for(x = leftSide.length-1; x > -1; x--){
		var currentDominoId = leftSide[x]
		if(currentDominoId[1] == currentDominoId[3]){
			scalers.push(1)
		}else{
			scalers.push(2)
		}
	}
	return scalers
}

var findDominoImage = function(dominoId,dominoImages){
	var dominoImage = ""
	for(y = 0; y < dominoImages.length; y++){
		var dominoImageId = dominoImages[y].id;
		if(dominoId == dominoImageId){
			dominoImage = dominoImages[y];
		}
	}
	return dominoImage
}

var setDominoImage = function(dominoImage,placedDominoWidth,placedDominoHeight,topHeight){
	dominoImage.style.width = placedDominoWidth + "px";
	dominoImage.style.height = placedDominoHeight + "px";
	dominoImage.style.position = "absolute";
	dominoImage.style.top = topHeight;
	return dominoImage
}

var createAdjusterLeft = function(scalers,placedDominoWidth){
	var adjuster = 0
	for(x=1;x<scalers.length;x++){
		var newWide = scalers[x]*placedDominoWidth;
		adjuster += newWide;
	}
	return adjuster
}


var drawDominoDown = function(domino,idBoard){
	var newLeft = idBoard[2][1]
	var dominoImages = makeDominoImages();
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	var dominoWidth = (windowWidth/10);
	var dominoHeight = 2*dominoWidth;
	var placedDominoWidth = dominoWidth / 2;
	var placedDominoHeight = 2 * placedDominoWidth;
	var topHeight =  (windowHeight/2 - 1.5*placedDominoHeight);
	var leftWide = newLeft;
	var leftSide = idBoard[0];
	var board = $("#board");
	var dominosOnLeft = idBoard[2][0]
	var scalers = createScalersDown(leftSide,dominosOnLeft)
	var dominoId = domino[0].id
	var leftSideLength = leftSide.length
	var dominoImage = findDominoImage(dominoId,dominoImages)
	dominoImage.style.width = placedDominoWidth + "px";
	dominoImage.style.height = placedDominoHeight + "px";
	dominoImage.style.position = "absolute";
	dominoImage.style.left = newLeft + placedDominoWidth/2 + "px"
	var adjuster = createAdjusterDown(scalers,placedDominoHeight)
	var lastDominoOnLeft = idBoard[2][2]
	if(lastDominoOnLeft[1] == lastDominoOnLeft[3]){
		var newTop = topHeight +placedDominoWidth/2 +adjuster
	}else{
		var newTop = topHeight +adjuster;
	}
	if(domino.hasClass("changed")){
		if(dominoId[1] != dominoId[3]){
			dominoImage.className = "none";
		}else{
			dominoImage.className = "rotated90";
		}
	}else{
		if(dominoId[1] != dominoId[3]){
			dominoImage.className = "rotate180";
		}else{
			dominoImage.className = "rotated90";
		}
	}
	if(dominoId[1] != dominoId[3]){
		if(newTop + placedDominoHeight > windowHeight - dominoHeight){
			var dominosDown = scalers.length
			var dominosLeft = idBoard[2][0]
			var lastDominoDown = leftSide[1]
			var newLeft = newLeft + placedDominoHeight
			var newTop = newTop - placedDominoHeight
			if(idBoard[4].length == 0){
				idBoard[4].push(dominosDown)
				idBoard[4].push(newLeft)
				idBoard[4].push(newTop)
				idBoard[4].push(lastDominoDown)
			}
			drawDominoRightAgain(domino,idBoard)
		}else{
			dominoImage.style.top = newTop - placedDominoWidth/2  + "px";
			board.append(dominoImage);
		}
	}else{
		if(newTop + placedDominoHeight > windowHeight - dominoHeight){
			var dominosDown = scalers.length - 1
			var dominosLeft = idBoard[2][0] - 1
			var lastDominoDown = leftSide[1]
			var newLeft = newLeft + placedDominoWidth
			var newTop = newTop - placedDominoHeight + placedDominoWidth
			if(idBoard[4].length == 0){
				idBoard[4].push(dominosDown)
				idBoard[4].push(newLeft)
				idBoard[4].push(newTop)
				idBoard[4].push(lastDominoDown)
			}
			drawDominoRightAgain(domino,idBoard)
		}else{
			dominoImage.style.top = newTop + "px";
			board.append(dominoImage);
		}
	}
}

var createScalersDown = function(leftSide,dominosOnLeft){
	var scalers = []
	var length = leftSide.length - dominosOnLeft
	for(x = length; x > -1; x--){
		var currentDominoId = leftSide[x]
		if(currentDominoId[1] == currentDominoId[3]){
			scalers.push(.5)
		}else{
			scalers.push(1)
		}
	}
	return scalers
}

var createAdjusterDown = function(scalers,placedDominoHeight){
	adjuster = 0
	for(x=0;x<scalers.length;x++){
		var newHeight = scalers[x]*placedDominoHeight;
		adjuster += newHeight;
	}
	return adjuster
}

var drawDominoRightAgain = function(domino,idBoard){
	var dominosOnLeft = idBoard[2][0]
	var dominosDown = idBoard[4][0]
	var newLeft = idBoard[4][1]
	var newTop = idBoard[4][2]
	var lastDominoDown = idBoard[4][3]
	var leftSide = idBoard[0]
	var dominoImages = makeDominoImages();
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	var dominoWidth = (windowWidth/10);
	var dominoHeight = 2*dominoWidth;
	var placedDominoWidth = dominoWidth / 2;
	var placedDominoHeight = 2 * placedDominoWidth;
	console.log("LastDominoDown" + lastDominoDown)
	if(lastDominoDown[1] == lastDominoDown[3]){
		console.log("I am here")
		newLeft = newLeft + placedDominoWidth/2
		newTop = newTop
	}
	var board = $("#board");
	var scalers = createScalersRightAgain(leftSide,dominosOnLeft + dominosDown)
	var dominoId = domino[0].id
	var dominoImage = findDominoImage(dominoId,dominoImages)
	dominoImage.style.width = placedDominoWidth + "px";
	dominoImage.style.height = placedDominoHeight + "px";
	dominoImage.style.position = "absolute";
	dominoImage.style.top = newTop + "px";
	console.log("This is the newTop in drowDominoRightAgain" + newTop)
	var adjuster = createAdjusterRightAgain(scalers,placedDominoWidth);
	var newLeft = newLeft + adjuster
	console.log("This is the newLeft after scalers" + newLeft)
	if(domino.hasClass("changed")){
		if(dominoId[1] != dominoId[3]){
			console.log("1")
			dominoImage.className = "rotate270";
		}
	}else if(domino.hasClass("notChanged")){
		if(dominoId[1] != dominoId[3]){
			console.log("3")
			dominoImage.className = "rotated90";
		}
	}
	if(dominoId[1] != dominoId[3]){
			dominoImage.style.left = newLeft + "px";
			board.append(dominoImage);
	}else{
			dominoImage.style.left = newLeft + placedDominoWidth/2 + "px";
			board.append(dominoImage);
	}
}

var createScalersRightAgain = function(leftSide,dominosUncounted){
	var scalers = []
	var length = leftSide.length - dominosUncounted
	console.log("This is the total number of dominos on the left" + leftSide.length)
	console.log("This is the total number of dominos in play" + dominosUncounted)
	for(var x = length; x > -1; x--){
		var currentDominoId = leftSide[x]
		console.log(currentDominoId)
		if(currentDominoId[1] == currentDominoId[3]){
			scalers.push(1)
		}else{
			scalers.push(2)
		}
	}
	return scalers
}

var createAdjusterRightAgain = function(scalers,placedDominoWidth){
	var adjuster = 0
	for(var x =0; x<scalers.length;x++){
		var newWide = scalers[x]*placedDominoWidth;
		adjuster += newWide;
	}
	return adjuster
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
	var gameOverButton = $("#gameOverButton");
	var text = "Game Over: " + player + " has won"
	gameOverButton.html(text);
	gameOverButton.show();
	gameOverButton.click(function(){
		window.location.href = "dominos.html"
	});
}
