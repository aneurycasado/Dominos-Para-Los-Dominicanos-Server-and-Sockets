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
			//currentPlayer = choseNextPlayer(currentPlayer);
			//return currentPlayer;
		 }else if(validOnlyOnRight(domino,idBoard)){
		 	addDominoToTheRight(domino,idBoard);
		 	domino.remove();
			//currentPlayer = choseNextPlayer(currentPlayer);
			//return currentPlayer;
		 }else if(validOnlyOnLeft(domino,idBoard)){
		 	addDominoToTheLeft(domino,idBoard);
		 	domino.remove();
			//currentPlayer = choseNextPlayer(currentPlayer);
			//return currentPlayer;
		 }else{
		 	pickDirection(domino,idBoard);
			//currentPlayer = choseNextPlayer(currentPlayer);
			//return currentPlayer;
		 };
	}else{
		wrongMove(currentPlayer);
		//return currentPlayer;
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
	if(idBoard[0].length > 1){
		drawDominoOnLeftSide(domino,idBoard);
	}
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
	if(idBoard[1].length > 1){
		drawDominoOnRightSide(domino,idBoard);
	}
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
