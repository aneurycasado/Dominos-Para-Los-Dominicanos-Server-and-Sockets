function checkDomino(dominoID,idBoard){
	if(idBoard[0].length === 0){
		if(dominoID === "(6,6)"){
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
		var dominoFirstNumber = dominoID[1];
		var dominoSecondNumber = dominoID[3];
		if(dominoFirstNumber  === firstNumber)
		{
			return true;
		}else if(dominoFirstNumber  === secondNumber){
			return true;
		}else if(dominoSecondNumber === firstNumber){
			return true;
		}else if (dominoSecondNumber === secondNumber){
		   return true;
		}else{
			return false;
		}
	}
}

function addFirstDominoToBoard(dominoID){
	addDominoToTheLeft(dominoID);
	addDominoToTheRight(dominoID);
}

function addDominoToTheLeft(dominoID){
	var newDominoID = orientIdLeft(dominoID);
	idBoard[0].unshift(newDominoID);
}

function addDominoToTheRight(dominoID){
	var newDominoID = orientIdRight(dominoID);
	idBoard[1].push(newDominoID);
}

function orientIdLeft(dominoID){
	if(idBoard[0].length === 0){
		return dominoID;
	}else{
		var newDominoId = "";
		var lastLeftDomino = idBoard[0][0];
		var dominoFirstNumber = dominoID[1];
		var dominoSecondNumber = dominoID[3];
		var firstNumber = lastLeftDomino[1];
		if(dominoFirstNumber === firstNumber){
			changed.push(dominoID);
			newDominoId = "(" + dominoSecondNumber +","+dominoFirstNumber+")";
			idBoard[7] = changed;
      return newDominoId;
		}else if(dominoSecondNumber === firstNumber){
			notChanged.push(dominoID);
			idBoard[6] = notChanged;
      return dominoID;
		}
	}
}


function orientIdRight(dominoID){
	if(idBoard[1].length === 0){
		return dominoID;
	}else{
		var newDominoId = "";
		var numberOfDominosOnRight = idBoard[1].length-1;
		var lastRightDomino = idBoard[1][numberOfDominosOnRight];
		var dominoFirstNumber = dominoID[1];
		var dominoSecondNumber = dominoID[3];
		var secondNumber = lastRightDomino[3];
		if(dominoFirstNumber == secondNumber){
			notChanged.push(dominoID);
			idBoard[6] = notChanged;
      return dominoID;
		}else if(dominoSecondNumber == secondNumber){
			changed.push(dominoID);
			newDominoId = "(" + dominoSecondNumber +","+dominoFirstNumber+")";
			idBoard[7] = changed;
      return newDominoId;
		}else{
			console.log("Houston, we have a problem.");
		}
	}
}

function validOnlyOnRight(dominoID){
	var lastLeftDomino = idBoard[0][0];
	var firstNumber = lastLeftDomino[1];
	var dominoFirstNumber = dominoID[1];
	var dominoSecondNumber = dominoID[3];
	if(dominoFirstNumber != firstNumber && dominoSecondNumber != firstNumber){
		return true;
	}else{
		return false;
	}
}

function validOnlyOnLeft(dominoID){
	var numberOfDominosOnRight = idBoard[1].length-1;
	var lastRightDomino = idBoard[1][numberOfDominosOnRight];
	var secondNumber = lastRightDomino[3];
	var dominoFirstNumber = dominoID[1];
	var dominoSecondNumber = dominoID[3];
	if(dominoFirstNumber !== secondNumber && dominoSecondNumber !== secondNumber){
		return true;
	}else{
		return false;
	}
}

function nextPlayerCanPlay(nextPlayer){
	if(idBoard[0].length === 0){
    return true;
	}else{
		var nextPlayerHand = players[nextPlayer].hand;
    var canPlay = false;
    nextPlayerHand.forEach(function(domino){
      var dominoID = domino.id;
      if(checkDomino(dominoID,idBoard)){
        canPlay = true;
			}
    });
		return canPlay;
	}
}

function removeDomino(dominoID){
  var theCurrentPlayer = players[currentPlayer];
  var removalIndex = -1;
  theCurrentPlayer.hand.forEach(function(domino,index){
    if(domino.id === dominoID){
      removalIndex = index;
    }
  });
  if(removalIndex > -1) theCurrentPlayer.hand.splice(removalIndex,1);
  players[currentPlayer] = theCurrentPlayer;
}

var gameLogic = {
  checkDomino: checkDomino,
  addFirstDominoToBoard: addFirstDominoToBoard,
  addDominoToTheLeft: addDominoToTheLeft,
  addDominoToTheRight: addDominoToTheRight,
  orientIdLeft: orientIdLeft,
  orientIdRight: orientIdRight,
  validOnlyOnLeft: validOnlyOnLeft,
  validOnlyOnRight: validOnlyOnRight,
  nextPlayerCanPlay: nextPlayerCanPlay,
  removeDomino: removeDomino
};

module.exports = gameLogic;
