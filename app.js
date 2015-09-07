var path = require('path');
var http = require('http');
var server = http.createServer();
var express = require('express');
var app = express();
var socketio = require('socket.io');
server.on('request', app);
var io = socketio(server);
server.listen(1337, function () {
    console.log('The server is listening on port 1337!');
});
var makeDominoImages = function(){
  domino00 = {};domino00.id ="(0,0)";
  domino01 = {};domino01.id ="(0,1)";
  domino02 = {};domino02.id ="(0,2)";
  domino03 = {};domino03.id ="(0,3)";
  domino04 = {};domino04.id ="(0,4)";
  domino05 = {};domino05.id ="(0,5)";
  domino06 = {};domino06.id ="(0,6)";
  domino11 = {};domino11.id ="(1,1)";
  domino12 = {};domino12.id ="(1,2)";
  domino13 = {};domino13.id ="(1,3)";
  domino14 = {};domino14.id ="(1,4)";
  domino15 = {};domino15.id ="(1,5)";
  domino16 = {};domino16.id ="(1,6)";
  domino22 = {};domino22.id ="(2,2)";
  domino23 = {};domino23.id ="(2,3)";
  domino24 = {};domino24.id ="(2,4)";
  domino25 = {};domino25.id ="(2,5)";
  domino26 = {};domino26.id ="(2,6)";
  domino33 = {};domino33.id ="(3,3)";
  domino34 = {};domino34.id ="(3,4)";
  domino35 = {};domino35.id ="(3,5)";
  domino36 = {};domino36.id ="(3,6)";
  domino44 = {};domino44.id ="(4,4)";
  domino45 = {};domino45.id ="(4,5)";
  domino46 = {};domino46.id ="(4,6)";
  domino55 = {};domino55.id ="(5,5)";
  domino56 = {};domino56.id ="(5,6)";
  domino66 = {};domino66.id ="(6,6)";
	dominoImages = [ domino00,domino01,domino02,domino03,domino04,domino05,domino06,
				 	 domino11,domino12,domino13,domino14,domino15,domino16,
				 	 domino22,domino23,domino24,domino25,domino26,
				     domino33,domino34,domino35,domino36,
				     domino44,domino45,domino46,
				     domino55,domino56,
				     domino66
           ];
    return dominoImages;
};

//For each on dominosImages and then pick a random player and assign them
//the domino

var randomInt = function(number){
    return Math.floor(Math.random()*number);
};

var makeHand = function(dominoImages){
	var player = {hand:[],first:false};
	var doubleSix = "(6,6)";
	for(x = 0;x<7;x++){
		var ranInt = randomInt(dominoImages.length);
		var domino = dominoImages[ranInt];
		if(domino.id === doubleSix){
			player.first = true;
		}
    player.hand.push(domino);
		dominoImages.splice(ranInt,1);
	}
	return player;
};

var createPlayers = function(){
	var players = [];
	var dominoImages = makeDominoImages();
	var player1 = makeHand(dominoImages);
	var player2 = makeHand(dominoImages);
	var player3 = makeHand(dominoImages);
	var player4 = makeHand(dominoImages);
  player1.num = "1";
  player2.num = "2";
  player3.num = "3";
  player4.num = "4";
	players.push(player1);
	players.push(player2);
	players.push(player3);
	players.push(player4);
  return players;
};

var checkDomino = function(dominoID,idBoard){
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
};

var addFirstDominoToBoard = function(dominoID){
	addDominoToTheLeft(dominoID);
	addDominoToTheRight(dominoID);
};

var addDominoToTheLeft = function(dominoID){
	var newDominoID = orientIdLeft(dominoID);
	idBoard[0].unshift(newDominoID);
};

var orientIdLeft = function(dominoID){
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
};


var addDominoToTheRight = function(dominoID){
	var newDominoID = orientIdRight(dominoID);
	idBoard[1].push(newDominoID);
};

var changed = [];
var notChanged = [];

var orientIdRight = function(dominoID){
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
};

var validOnlyOnRight = function(dominoID){
	var lastLeftDomino = idBoard[0][0];
	var firstNumber = lastLeftDomino[1];
	var dominoFirstNumber = dominoID[1];
	var dominoSecondNumber = dominoID[3];
	if(dominoFirstNumber != firstNumber && dominoSecondNumber != firstNumber){
		return true;
	}else{
		return false;
	}
};

var validOnlyOnLeft = function(dominoID){
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
};

function nextPlayerCanPlay(nextPlayer){
	if(idBoard[0].length === 0){
		// console.log("1");
    return true;
	}else{
		var nextPlayerHand = players[nextPlayer].hand;
    // console.log("NextPlayerHand");
    // console.log(nextPlayerHand);
    // console.log("Board");
    // console.log(idBoard);
    var canPlay = false;
    nextPlayerHand.forEach(function(domino){
      var dominoID = domino.id;
      if(checkDomino(dominoID,idBoard)){
				// console.log("Can play with this one");
        // console.log(dominoID);
        canPlay = true;
			}
    });
		return canPlay;
	}
}

var removeDomino = function(dominoID){
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

var num = 0;
var sockets = [];
var players = createPlayers();
var idBoard = [[],[],[],[],[],[],[],[]];
var currentPlayer = null;

app.use(express.static(path.join(__dirname, '/')));
app.get("/",function(req,res){
  res.sendfile(__dirname + '/index.html');
});
io.on('connection', function (socket) {
    console.log("connected");
    num++;
    socket.emit("yourHand",players[num-1],(num-1));



    socket.on('disconnect', function () {
        console.log("Peace, don't come back");
    });



    if(num === 2){
      io.sockets.emit("playersAreAllHere",{});
    }



    socket.on("preparationFinished", function(){
      //console.log("prep works");
      socket.emit("makeFirstMove",{});
    });



    socket.on("firstMoveMade", function(dominoID,firstPlayer){
      var validMove = checkDomino(dominoID, idBoard);
      if(validMove){
          currentPlayer = firstPlayer;
          addFirstDominoToBoard(dominoID);
          io.sockets.emit("firstMoveSaved",idBoard);
        }else{
          io.sockets.emit("wrongFirstMove", {});
        }
    });



    socket.on("firstPlayerDone", function(num){
      removeDomino("(6,6)");
      var nextPlayer = (currentPlayer + 1) % 2;
      if(nextPlayerCanPlay(nextPlayer,idBoard)){
        io.sockets.emit("nextPlayer",nextPlayer);
      }else{
        io.sockets.emit('youCanNotPlay',nextPlayer);
      }
    });



    socket.on("nextMoveMade", function(dominoID,nextPlayer){
      currentPlayer = nextPlayer;
      var validMove = checkDomino(dominoID, idBoard);
      var direction = null;
      if(validMove){
        removeDomino(dominoID);
        if(validOnlyOnLeft(dominoID)){
          direction = "left";
          addDominoToTheLeft(dominoID);
        }else if(validOnlyOnRight(dominoID)){
          direction = "right";
          addDominoToTheRight(dominoID);
        }else{
          direction = "both";
        }
        console.log(idBoard);
        socket.emit('nextMoveSaved',idBoard,direction,dominoID);
      }else{
        io.sockets.emit('wrongNextMove',nextPlayer);
      }
    });

    socket.on("sideChosen", function(direction,dominoID){
      if(direction === "left"){
        addDominoToTheLeft(dominoID);
      }
      else if(direction === "right"){
        addDominoToTheRight(dominoID);
      }
      socket.emit('nextMoveSaved', idBoard, direction,dominoID);
    });

    socket.on('nextPlayerDone', function(dominoID,direction,board){
      io.sockets.emit('updateBoard',dominoID,direction,board);
      var nextPlayer = (currentPlayer + 1) % 2;
      if(nextPlayerCanPlay(nextPlayer,idBoard)){
        io.sockets.emit("nextPlayer",nextPlayer);
      }else{
        io.sockets.emit('youCanNotPlay',nextPlayer);
      }
    });



    socket.on('iCantPlay', function(nextPlayer){
      var nextPlayer = (nextPlayer +1) %2;
      if(nextPlayerCanPlay(nextPlayer,idBoard)){
        io.sockets.emit("nextPlayer",nextPlayer);
      }else{
        io.sockets.emit('youCanNotPlay',nextPlayer);
      }
    });

    // 	 	addDominoToTheRight(domino,idBoard);
    	// 		//currentPlayer = choseNextPlayer(currentPlayer);
    	// 		//return currentPlayer;
    	// 	 }else if(validOnlyOnLeft(domino,idBoard)){
    	// 	 	addDominoToTheLeft(domino,idBoard);
    	// 		//currentPlayer = choseNextPlayer(currentPlayer);
    	// 		//return currentPlayer;
    	// 	 }else{
    	// 	 	pickDirection(domino,idBoard);
    	// 	 };
    	// }else{
    	// 	wrongMove(currentPlayer);
    	// 	//return currentPlayer;
    	// };
    //socket.emit("playerNum",num);
});
// io.on("preparationFinished",function(){
//   console.log("preps work");
//   io.sockets.emit("makeFirstMove",{});
// });
