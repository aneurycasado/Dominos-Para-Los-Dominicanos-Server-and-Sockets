
domino00 = new Image(); 
domino00.src = "images/Dominos/[0,0].png"
domino01 = new Image(); 
domino01.src = "images/Dominos/[0,1].png"
domino02 = new Image(); 
domino02.src = "images/Dominos/[0,2].png"
domino03 = new Image(); 
domino03.src = "images/Dominos/[0,3].png"
domino04 = new Image(); 
domino04.src = "images/Dominos/[0,4].png"
domino05 = new Image(); 
domino05.src = "images/Dominos/[0,5].png"
domino06 = new Image(); 
domino06.src = "images/Dominos/[0,6].png"
domino11 = new Image(); 
domino11.src = "images/Dominos/[1,1].png"
domino12 = new Image(); 
domino12.src = "images/Dominos/[1,2].png"
domino13 = new Image(); 
domino13.src = "images/Dominos/[1,3].png"
domino14 = new Image(); 
domino14.src = "images/Dominos/[1,4].png"
domino15 = new Image(); 
domino15.src = "images/Dominos/[1,5].png"
domino16 = new Image(); 
domino16.src = "images/Dominos/[1,6].png"
domino22 = new Image(); 
domino22.src = "images/Dominos/[2,2].png"
domino23 = new Image(); 
domino23.src = "images/Dominos/[2,3].png"
domino24 = new Image(); 
domino24.src = "images/Dominos/[2,4].png"
domino25 = new Image(); 
domino25.src = "images/Dominos/[2,5].png"
domino26 = new Image(); 
domino26.src = "images/Dominos/[2,6].png"
domino33 = new Image(); 
domino33.src = "images/Dominos/[3,3].png"
domino34 = new Image(); 
domino34.src = "images/Dominos/[3,4].png"
domino35 = new Image(); 
domino35.src = "images/Dominos/[3,5].png"
domino36 = new Image(); 
domino36.src = "images/Dominos/[3,6].png"
domino44 = new Image(); 
domino44.src = "images/Dominos/[4,4].png"
domino45 = new Image(); 
domino45.src = "images/Dominos/[4,5].png"
domino46 = new Image(); 
domino46.src = "images/Dominos/[4,6].png"
domino55 = new Image(); 
domino55.src = "images/Dominos/[5,5].png"
domino56 = new Image(); 
domino56.src = "images/Dominos/[5,6].png"
domino66 = new Image(); 
domino66.src = "images/Dominos/[6,6].png"

dominoImages = [ domino00,domino01,domino02,domino03,domino04,domino05,domino06,
				 domino11,domino12,domino13,domino14,domino15,domino16,
				 domino22,domino23,domino24,domino25,domino26,
				 domino33,domino34,domino35,domino36,
				 domino44,domino45,domino46,
				 domino55,domino56,
				 domino66
			   ]


var drawDominoOnBoard = function(initalXposition,initalYposition,dominoNumber){
	var initalXposition = ($(window).width()/2) + "px";
	var initalYposition = ($(window).height()/2 -100) + "px";
	var domino = $("#board #notPlaced img");
	domino.css({"position": "absolute", "top": initalYposition, "left": initalXposition});
	var domino2 = domino.clone();
	$("#board #placed").append(domino2);
	domino.remove();
}

var playTurn = function(player,  player1, player2,
						player3, player4, dominosPlaced){
	player = choseNextPlayer(player,player1,player2,player3,player4);
	$('#'+player+" #hand img").click(function(){
		var domino = $(this);
		addDominoToBoard(domino,dominosPlaced);
		$(this).remove();
		$(this).unbind("click");
		playTurn(player,player1,player2,player3,player4,dominosPlaced);
	});	
}

var choseNextPlayer = function(player,player1,player2,player3,player4){
	//console.log("This is the player at the beginning of choseNextPlayer:"+player);
	if(player == "player1"){
		//console.log("This is the previous player in choseNextPlayer. Should be the same as the player above:" + player);
		//console.log("This is the next player. Should follow the sequence" + "player2");
		player1.hide();
		player2.show();
		return "player2";
	}else if(player == "player2"){
		//console.log("This is the previous player in choseNextPlayer. Should be the same as the player above:" + player);
		//console.log("This is the next player. Should follow the sequence" + "player3");
		player2.hide();
		player3.show();
		return "player3";
	}else if(player == "player3"){
		//console.log("This is the previous player in choseNextPlayer. Should be the same as the player above:" + player);
		//console.log("This is the next player. Should follow the sequence" + "player4");
		player3.hide();
		player4.show();
		return "player4";
	}else{
		//console.log("This is the previous player in choseNextPlayer. Should be the same as the player above:" + player);
		//console.log("This is the next player. Should follow the sequence" + "player1");
		player4.hide();
		player1.show();
		return "player1";
	};
}

var addDominoToBoard = function(domino,dominoPlaced){
	var dominoClone = domino.clone();
	dominoPlaced.append(dominoClone);
	drawDominoOnBoard(dominoPlaced);
}

var choseFirstPlayer = function(player1,player2,player3,player4){
	//console.log("I def shouldnt be here");
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

var makeHand = function(player){
	var hand = [];
	var player = $(player);
	var src = domino66.src
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

var loadGame = function(){
	makeHand("#player1 #hand");
	makeHand("#player2 #hand");
	makeHand("#player3 #hand");
	makeHand("#player4 #hand");
}

$(document).ready(function(){
	loadGame();
	var windowWidth = $(window).width() - $(window).width()/10; 
	var windowHeight = $(window).height() - $(window).height()/6;
	var gameOn = true;
	var boardImg = $("#board img");
	var dominosPlaced = $("#board #placed");
	var pressed = $("#pressed");
	var notPressed = $("#notPressed");
	var player1 = $("#player1");
	var player2 = $("#player2");
	var player3 = $("#player3");
	var player4 = $("#player4");
	hideHands(player1,player2,player3,player4);
	var player = ""
	boardImg.css({"width":windowWidth.toString(),"height":windowHeight.toString()}).hide();
	pressed.hide();
	notPressed.hover(function(){
		$(this).hide();
		pressed.show();
	});
	pressed.click(function(){
		$(this).fadeOut("slow",function(){
			boardImg.show("slow",function(){			
				player = choseFirstPlayer(player1,player2,player3,player4);
			});
		});
	});
	$("#player1 #hand img").click(function(){
					var domino = $(this);
					addDominoToBoard(domino,dominosPlaced);
					$(this).remove();
					player = choseNextPlayer(player,player1,player2,player3,player4)
	}); 
	$("#player2 #hand img").click(function(){
					var domino = $(this);
					addDominoToBoard(domino,dominosPlaced);
					$(this).remove();
					player = choseNextPlayer(player,player1,player2,player3,player4)
	}); 
	$("#player3 #hand img").click(function(){
					var domino = $(this);
					addDominoToBoard(domino,dominosPlaced);
					$(this).remove();
					player = choseNextPlayer(player,player1,player2,player3,player4)
	}); 
	$("#player4 #hand img").click(function(){
					var domino = $(this);
					addDominoToBoard(domino,dominosPlaced);
					$(this).remove();
					player = choseNextPlayer(player,player1,player2,player3,player4)
	}); 
});