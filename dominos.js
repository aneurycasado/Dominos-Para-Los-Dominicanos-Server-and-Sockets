var makeBoard = function(){
	var totalkeys = [
						[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],
						[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],
						[2,2],[2,3],[2,4],[2,5],[2,6],
						[3,3],[3,4],[3,5],[3,6],
						[4,4],[4,5],[4,6],
						[5,5],[5,6],
						[6,6]
					];
	return totalkeys;
}

var randomInt = function(min,max)
{
    return Math.floor(Math.random()*(max-min)+min);
}

var makeHand = function(board){
	var hand = [];
	for(x = 0;x<7;x++){
		var ranInt = randomInt(0,board.length);
		var key = board[ranInt];
		hand.push(key);
		board.splice(ranInt,1);
	}
	return hand;
}

var hideItems = function(){
	if($("#player1").hasClass('first')){
		$("#player2").hide();
		$("#player3").hide();
		$("#player4").hide();
	}else if ($("#player2").hasClass('first')){
		$("#player1").hide();
		$("#player3").hide();
		$("#player4").hide();
	}else if($("#player3").hasClass('first')){
		$("#player2").hide();
		$("#player1").hide();
		$("#player4").hide();
	}else{
		$("#player2").hide();
		$("#player3").hide();
		$("#player1").hide();
	};	
}

var loadGame = function(){
	var board = makeBoard();
	var player1Hand = makeHand(board);
	var player2Hand = makeHand(board);
	var player3Hand = makeHand(board);
	var player4Hand = makeHand(board);
	createHands(player1Hand,player2Hand,player3Hand,player4Hand);
	hideItems()
	
}

var createHands = function(player1Hand,player2Hand,player3Hand,player4Hand){
	for(x = 0; x < player1Hand.length;x++){
		var domino = player1Hand[x].toString();
		if(domino == "6,6"){
			$("#player1").addClass("first")
		};
		var src = ' src =images/Dominos/['+domino+'].png>';
		$('#player1 #hand').append('<img class = "domino" id ='+domino+src);
	};
	for(x = 0; x < player2Hand.length;x++){
		var domino = player2Hand[x].toString();
		if(domino == "6,6"){
			$("#player2").addClass("first")
		};
		var src = ' src =images/Dominos/['+domino+'].png>';
		$('#player2 #hand').append('<img class = "domino" id ='+domino+src);
	};
	for(x = 0; x < player3Hand.length;x++){
		var domino = player3Hand[x].toString();
		if(domino == "6,6"){
			$("#player3").addClass("first")
		};
		var src = ' src =images/Dominos/['+domino+'].png>';
		$('#player3 #hand').append('<img id ='+domino+src);
	};
	for(x = 0; x < player4Hand.length;x++){
		var domino = player4Hand[x].toString();
		if(domino == "6,6"){
			$("#player4").addClass("first")
		};
		var src = ' src =images/Dominos/['+domino+'].png>';
		$('#player4 #hand').append('<img id ='+domino+src);
	};
}


var choseFirstPlayer = function(){
	//console.log("I def shouldnt be here");
	if($("#player1").hasClass('first')){
		return "player1";
	}else if ($("#player2").hasClass('first')){
		return "player2";
	}else if($("#player3").hasClass('first')){
		return "player3";
	}else{
		return "player4";
	};
}

var playTurn = function(player){
	player = choseNextPlayer(player);
	$('#'+player+" #hand img").click(function(){
		var dominoSrc = $(this).attr('src');
		var dominoNumber = $(this).attr('id');
		addDominoToBoard(dominoSrc,dominoNumber);
		$(this).remove();
		//console.log("This is the player after calling choseNextPlayer. This should be the same as the next player:"+player);
		playTurn(player);
	});
	
}

var choseNextPlayer = function(player){
	//console.log("This is the player at the beginning of choseNextPlayer:"+player);
	if(player == "player1"){
		//console.log("This is the previous player in choseNextPlayer. Should be the same as the player above:" + player);
		//console.log("This is the next player. Should follow the sequence" + "player2");
		$("#player1").hide();
		$("#player2").show();
		return "player2";
	}else if(player == "player2"){
		//console.log("This is the previous player in choseNextPlayer. Should be the same as the player above:" + player);
		//console.log("This is the next player. Should follow the sequence" + "player3");
		$("#player2").hide();
		$("#player3").show();
		return "player3";
	}else if(player == "player3"){
		//console.log("This is the previous player in choseNextPlayer. Should be the same as the player above:" + player);
		//console.log("This is the next player. Should follow the sequence" + "player4");
		$("#player3").hide();
		$("#player4").show();
		return "player4";
	}else{
		//console.log("This is the previous player in choseNextPlayer. Should be the same as the player above:" + player);
		//console.log("This is the next player. Should follow the sequence" + "player1");
		$("#player4").hide();
		$("#player1").show();
		return "player1";
	};
}

var checkGame = function(){
	return true;
}

var addDominoToBoard = function(dominoSrc,dominoNumber){
		$("#board #notPlaced").append("<img id =" + dominoNumber + " src ="+dominoSrc+">");
		drawDominoOnBoard(dominoNumber);
}

var drawDominoOnBoard = function(initalXposition,initalYposition,dominoNumber){
	var initalXposition = ($(window).width()/2) + "px";
	var initalYposition = ($(window).height()/2 -100) + "px";
	var domino = $("#board #notPlaced img");
	domino.css({"position": "absolute", "top": initalYposition, "left": initalXposition});
	var domino2 = domino.clone();
	$("#board #placed").append(domino2);
	domino.remove();
}

$(document).ready(function(){
	var windowWidth = $(window).width() - $(window).width()/10; 
	var windowHeight = $(window).height() - $(window).height()/6;
	var gameOn = true;
	$("#board img").css({"width":windowWidth.toString(),"height":windowHeight.toString()}).hide();
	$("#pressed").hide();
	$("#notPressed").hover(
		function(){
			$(this).hide();
			$("#pressed").show();
	});
	$("#pressed").click(function(){
		$(this).fadeOut("slow",function(){
			$("#board img").show("slow",function(){
				loadGame();
				//console.log("Here again");
				var player = choseFirstPlayer();
				$('#'+player+" #hand img").click(function(){
					//console.log("I should not be here");
					var dominoSrc = $(this).attr('src');
					var dominoNumber = $(this).attr('id');
					addDominoToBoard(dominoSrc,dominoNumber);
					$(this).remove();
					playTurn(player);
				});
			});
		});
	});
	 
});