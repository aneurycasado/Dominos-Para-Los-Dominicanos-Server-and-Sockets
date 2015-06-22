function makeHand(player,dominoImages){
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

function randomInt(number){
    return Math.floor(Math.random()*number);
}

function scaleDomino(domino){
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	var dominoWidth = (windowWidth/10);
	var dominoHeight = 2*dominoWidth;
	domino.width = dominoWidth;
	domino.height = dominoHeight;
}

function setUpStartScreen(windowWidth,windowHeight){
	var startScreen = $("#notPressed");
	startScreen.css({"width":windowWidth.toString(),"height":windowHeight.toString()});
	return startScreen;
}

function setUpStartScreenPreesed(windowWidth,windowHeight){
	var startScreenPressed = $("#pressed");
	startScreenPressed.css({"width":windowWidth.toString(),"height":windowHeight.toString()});
	startScreenPressed.hide();
	return startScreenPressed;
}

function setUpBoard(windowWidth,windowHeight){
	var board = $("#board img");
	var dominoWidth = (windowWidth/10);
	var dominoHeight = 2*dominoWidth;
	var windowHeight = windowHeight - dominoHeight;
	board.css({"width":windowWidth.toString(),"height":windowHeight.toString()});
	board.hide();
	return board;
}

function setUpLeftButton(windowWidth,windowHeight){
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

function setUpRightButton(windowWidth,windowHeight){
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

function setUpWrongMoveButton(windowWidth,windowHeight){
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

function setUpPassButton(windowWidth,windowHeight){
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

function setUpGameOverButton(windowWidth,windowHeight){
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

function hideHands(player1,player2,player3,player4){
	player1.hide();
	player2.hide();
	player3.hide();
	player4.hide();
}
