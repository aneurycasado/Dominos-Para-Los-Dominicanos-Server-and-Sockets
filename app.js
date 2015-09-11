var path = require('path');
var http = require('http');
var express = require('express');
var socketio = require('socket.io');
var session = require('express-session');
var setUp = require('./setUpServerSide');
var gameLogic = require('./gameLogicServerSide');
var server = http.createServer();
var app = express();
server.on('request', app);
var io = socketio(server);
server.listen(1337, function () {
    console.log('The server is listening on port 1337!');
});

var idBoard = [[],[],[],[],[],[],[],[]];
var players = setUp.createPlayers();
var changed = [];
var notChanged = [];
var num = 0;
var currentPlayer = null;

app.use(express.static(path.join(__dirname, '/')));
app.get("/",function(req,res){
  res.sendfile(__dirname + '/index.html');
});
io.on('connection', function (socket) {
    num++;
    console.log("connected");
    console.log("hand ", players[num-1]);
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
      var validMove = gameLogic.checkDomino(dominoID, idBoard);
      if(validMove){
          currentPlayer = firstPlayer;
          gameLogic.addFirstDominoToBoard(dominoID);
          io.sockets.emit("firstMoveSaved",idBoard);
        }else{
          io.sockets.emit("wrongFirstMove", {});
        }
    });



    socket.on("firstPlayerDone", function(num){
      gameLogic.removeDomino("(6,6)");
      var nextPlayer = (currentPlayer + 1) % 2;
      if(gameLogic.nextPlayerCanPlay(nextPlayer,idBoard)){
        io.sockets.emit("nextPlayer",nextPlayer);
      }else{
        io.sockets.emit('youCanNotPlay',nextPlayer);
      }
    });



    socket.on("nextMoveMade", function(dominoID,nextPlayer){
      currentPlayer = nextPlayer;
      var validMove = gameLogic.checkDomino(dominoID, idBoard);
      var direction = null;
      if(validMove){
        gameLogic.removeDomino(dominoID);
        if(gameLogic.validOnlyOnLeft(dominoID)){
          direction = "left";
          gameLogic.addDominoToTheLeft(dominoID);
        }else if(gameLogic.validOnlyOnRight(dominoID)){
          direction = "right";
          gameLogic.addDominoToTheRight(dominoID);
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
        gameLogic.addDominoToTheLeft(dominoID);
      }
      else if(direction === "right"){
        gameLogic.addDominoToTheRight(dominoID);
      }
      socket.emit('nextMoveSaved', idBoard, direction,dominoID);
    });

    socket.on('nextPlayerDone', function(dominoID,direction,board){
      io.sockets.emit('updateBoard',dominoID,direction,board);
      var nextPlayer = (currentPlayer + 1) % 2;
      if(gameLogic.nextPlayerCanPlay(nextPlayer,idBoard)){
        io.sockets.emit("nextPlayer",nextPlayer);
      }else{
        io.sockets.emit('youCanNotPlay',nextPlayer);
      }
    });



    socket.on('iCantPlay', function(nextPlayer){
      var nextPlayer = (nextPlayer +1) %2;
      if(gameLogic.nextPlayerCanPlay(nextPlayer,idBoard)){
        io.sockets.emit("nextPlayer",nextPlayer);
      }else{
        io.sockets.emit('youCanNotPlay',nextPlayer);
      }
    });

});
