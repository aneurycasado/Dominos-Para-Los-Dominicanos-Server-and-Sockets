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

var loadGame = function(){
	var board = makeBoard();
	var player1Hand = makeHand(board);
	var player2Hand = makeHand(board);
	var player3Hand = makeHand(board);
	var player4Hand = makeHand(board);
	createHands(player1Hand,player2Hand,player3Hand,player4Hand);
}

var createHands = function(player1Hand,player2Hand,player3Hand,player4Hand){
	for(x = 0; x < player1Hand.length;x++){
		var domino = player1Hand[x].toString();
		var src = '<img src =images/Dominos/['+domino+'].png>';
		$('#player1').append(src);
	};
	for(x = 0; x < player2Hand.length;x++){
		var domino = player2Hand[x].toString();
		var src = '<img src =images/Dominos/['+domino+'].png>';
		$('#player2').append(src);
	};
	for(x = 0; x < player3Hand.length;x++){
		var domino = player3Hand[x].toString();
		var src = '<img src =images/Dominos/['+domino+'].png>';
		$('#player3').append(src);
	};
	for(x = 0; x < player4Hand.length;x++){
		var domino = player4Hand[x].toString();
		var src = '<img src =images/Dominos/['+domino+'].png>';
		$('#player4').append(src);
	};	
}


$(document).ready(function(){
	$("#board").click(function(){
		loadGame();
	});
});