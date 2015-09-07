
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
           ];
    return dominoImages;
};
var dominoImages = makeDominoImages();
var makeFrontEndHand = function(hand,dominoImages){
  var frontEndHand = [];
  hand.forEach(function(domino){
    dominoImages.forEach(function(dominoImage){
      if(domino.id === dominoImage.id){
        frontEndHand.push(dominoImage);
      }
    });
  });
  return frontEndHand;
};

var scaleDomino = function(domino){
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	var dominoWidth = (windowWidth/10);
	var dominoHeight = 2*dominoWidth;
	domino.width = dominoWidth;
	domino.height = dominoHeight;
};

var player = null;
var serverHand = null;
var frontEndHand = null;
var currentPlayerHand = null;
var playerNum = null;
var idBoard = null;

var drawFirstDomino = function(){
	var dominoImages = makeDominoImages();
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	var dominoWidth = (windowWidth/10);
	var dominoHeight = 2*dominoWidth;
	var placedDominoWidth = dominoWidth / 2;
	var placedDominoHeight = 2 * placedDominoWidth;
	var topHeight =  (windowHeight/2 - 1.5*placedDominoHeight) + "px";
	var leftWide = windowWidth/2 - placedDominoWidth/2 + "px";
	var dominoImage = dominoImages[27];
	dominoImage.style.width = placedDominoWidth + "px";
	dominoImage.style.height = placedDominoHeight + "px";
	dominoImage.style.position = "absolute";
	dominoImage.style.top = topHeight;
	dominoImage.style.left = leftWide;
	var board = $("#board");
	board.append(dominoImage);
};

var drawDominoOnRightSide = function(domino){
	var dominoImages = makeDominoImages();
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
	var scalers = createScalersRight(rightSide);
	var dominoId = domino[0].id;
	var rightSideLength = rightSide.length;
	var dominoImage = findDominoImage(dominoId,dominoImages);
	dominoImage = setDominoImage(dominoImage,placedDominoWidth,placedDominoHeight,topHeight);
	var adjuster = createAdjusterRight(scalers,placedDominoWidth);
	var newLeft = leftWide + adjuster - placedDominoWidth/2;
	if(idBoard.changed.indexOf(dominoID) !== -1){
		if(dominoId[1] !== dominoId[3]){
			dominoImage.className = "rotated90";
		}else{
			newLeft = leftWide + adjuster;
		}
	}else if(idBoard.notChanged.indexOf(dominoID) !== -1){
		if(dominoId[1] !== dominoId[3]){
			dominoImage.className = "rotate270";
		}else{
			newLeft = leftWide + adjuster;
		}
	}
	if(dominoId[1] != dominoId[3]){
		if(newLeft + placedDominoHeight > windowWidth){
			var dominosOnRight = rightSideLength;
			var lastDominoOnRight = rightSide[rightSideLength-2];
			if(idBoard[3].length === 0){
				idBoard[3].push(dominosOnRight);
				idBoard[3].push(newLeft);
				idBoard[3].push(lastDominoOnRight);
			}
			drawDominosUp(domino,idBoard);
		}else{
			dominoImage.style.left = newLeft + "px";
			board.append(dominoImage);
		}
	}else{
		if(newLeft + placedDominoWidth > windowWidth){
			var dominosOnRight = rightSideLength;
			var lastDominoOnRight = rightSide[rightSideLength-2];
			if(idBoard[3].length === 0){
				idBoard[3].push(dominosOnRight);
				idBoard[3].push(newLeft);
				idBoard[3].push(lastDominoOnRight);
			}
			drawDominosUp(domino,idBoard);
		}else{
			dominoImage.style.left = newLeft + "px";
			board.append(dominoImage);
		}
	}
};

var createScalersRight = function(rightSide){
	var scalers = [];
	for(var x = 0; x < rightSide.length; x++){
		var currentDominoId = rightSide[x];
		if(currentDominoId[1] == currentDominoId[3]){
			scalers.push(1);
		}else{
			scalers.push(2);
		}
	}
	return scalers;
};

var createAdjusterRight = function(scalers,placedDominoWidth){
	var adjuster = 0;
	for(var x=1;x<scalers.length;x++){
		var newWide = scalers[x]*placedDominoWidth;
		adjuster += newWide;
	}
	return adjuster;
};

var drawBoard = function(){
  //drawFirstDomino(board);
  console.log(idBoard);
};

var currentDomino = null;

$(document).ready(function(){

		window.resizeTo(1000,1000);
 		var windowWidth = $(window).width();
 		var windowHeight = $(window).height();
 		var startScreen = setUpStartScreen(windowWidth, windowHeight);
 		var startScreenPressed = setUpStartScreenPreesed(windowWidth, windowHeight);
 		var loadingScreen = setUpLoadingScreen(windowWidth,windowHeight);
    var boardImg = setUpBoard(windowWidth, windowHeight);
 		var leftButton = setUpLeftButton(windowWidth,windowHeight);
 		var rightButton = setUpRightButton(windowWidth,windowHeight);
 		var wrongMoveButton = setUpWrongMoveButton(windowWidth,windowHeight);
 		var passButton = setUpPassButton(windowWidth,windowHeight);
 		var gameOverButton = setUpGameOverButton(windowWidth,windowHeight);



		startScreen.hover(function(){
 			$(this).hide();
 			startScreenPressed.show();
 		});



		startScreenPressed.click(function(){
        var self = this;
        var socket = io(window.location.origin);



				socket.on('connect', function () {
          socket.on('yourHand', function(newPlayer,num){
            player = newPlayer;
						playerNum = num;
            serverHand = player.hand;
            frontEndHand = makeFrontEndHand(serverHand,dominoImages);
          });
        });



        socket.on('playersAreAllHere',function(){
          $(self).fadeOut("slow",function(){
   				     boardImg.show("slow",function(){
   					         currentPlayer = "player" + player.num;
                     currentPlayerHand = $("#"+currentPlayer + " #hand");
                     frontEndHand.forEach(function(dominoImage){
                       scaleDomino(dominoImage);
                       currentPlayerHand.append(dominoImage);
                     });
   				    });
   			  });
          socket.emit("preparationFinished",{});
   		   });



         socket.on('makeFirstMove',function(){
					 if(player.first){
						 console.log("MakeFirstMove");
             var selector = "#"+"player" + player.num + " #hand img";
             $(document).on("click",selector, function(){
               currentDomino = this;
               socket.emit("firstMoveMade",this.id,playerNum);
             });
						 //Make an else statement for other players.
						 //Animations for waiting
           }
         });



				 socket.on('firstMoveSaved', function(board){
					 idBoard = board;
					 drawFirstDomino();
					 $(currentDomino).remove();
					 $(document).off("click");
					 socket.emit('firstPlayerDone',playerNum);
				 });

				 socket.on('wrongFirstMove',function(){
					//Module window needed
					if(player.first){
						 console.log("wrongMove");
						 var selector = "#"+"player" + player.num + " #hand img";
						 $(document).off("click");
						 $(document).on("click",selector, function(){
							 currentDomino = this;
							 socket.emit("firstMoveMade",this.id,playerNum);
						 });
					 }
				 });


				 socket.on("nextPlayer", function(nextPlayer){
					 if(nextPlayer === playerNum){
						 console.log("The nextPlayer " +playerNum);
						 var selector = "#"+"player" + player.num + " #hand img";
							$(document).on("click",selector, function(){
								currentDomino = this;
								socket.emit("nextMoveMade",this.id,playerNum);
							});
					 }
				 });



				 socket.on("youCanNotPlay",function(currentPlayer){
					 if(currentPlayer === playerNum){
						 console.log("Can not play");
						 socket.emit("iCantPlay", playerNum);
					 }
				 });



				 socket.on("wrongNextMove", function(nextPlayer){
					 //Module Window to notify player here
					 if(nextPlayer === playerNum){
						 console.log("Wrongmove " +playerNum);
						 var selector = "#"+"player" + player.num + " #hand img";
             $(document).off("click");
						 $(document).on("click",selector, function(){
               currentDomino = this;
               socket.emit("nextMoveMade",this.id,playerNum);
             });
					 }
				 });

				 socket.on("nextMoveSaved", function(board,direction,dominoID){
						idBoard = board;
						drawBoard();
						var selector = "#"+"player" + player.num + " #hand img";
						$(document).off("click");
						if(direction === "both"){
							leftButton.show();
							rightButton.show();
							$(document).on('click','#leftButton', function(){
								leftButton.hide();
								rightButton.hide();
								socket.emit('sideChosen',"left",dominoID);
							});
							$(document).on('click','#rightButton', function(){
								leftButton.hide();
								rightButton.hide();
								socket.emit('sideChosen',"right",dominoID);
							});
						}else if(direction === "left"){
							$(currentDomino).remove();
							socket.emit('nextPlayerDone',{});
						}else if(direction === "right"){
							$(currentDomino).remove();
							socket.emit('nextPlayerDone',{});
						}
				 });
    });
});
