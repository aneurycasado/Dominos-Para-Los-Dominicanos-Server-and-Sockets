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
var randomInt = function(number){
    return Math.floor(Math.random()*number);
};

var makeHand = function(dominoImages){
	var player = {hand:[],first:false};
	var doubleSix = "(6,6)"
	for(x = 0;x<7;x++){
		var ranInt = randomInt(dominoImages.length);
		var domino = dominoImages[ranInt];
		if(domino.id == doubleSix){
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
var num = 0;
var sockets = [];
var players = createPlayers();
var idBoard = [[],[],[],[],[],[]];
app.use(express.static(path.join(__dirname, '/')));
app.get("/",function(req,res){
  res.sendfile(__dirname + '/index.html');
});
io.on('connection', function (socket) {
    console.log("connected");
    num++;
    socket.emit("yourHand",players[num-1]);
    socket.on('disconnect', function () {
        console.log("Peace, don't come back");
    });
    if(num === 2){
      io.sockets.emit("playersAreAllHere",{});
    }
    socket.on("preparationFinished", function(){
      console.log("prep works");
      socket.emit("makeFirstMove",{});
    });
    socket.on("moveMade", function(dominoID){
      // var validMove = checkDomino(dominoId, idBoard);
      // if(validMove){
      //   if(idBoard[0].length == 0){
    	// 		addFirstDominoToBoard(domino,idBoard);
    	// 	 }else if(validOnlyOnRight(domino,idBoard)){
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
      console.log(dominoID);
    });
    //socket.emit("playerNum",num);
});
// io.on("preparationFinished",function(){
//   console.log("preps work");
//   io.sockets.emit("makeFirstMove",{});
// });
