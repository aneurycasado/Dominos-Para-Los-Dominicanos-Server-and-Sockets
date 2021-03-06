function makeDominoImages(){
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
}

//For each on dominosImages and then pick a random player and assign them
//the domino

function randomInt(number){
    return Math.floor(Math.random()*number);
}

function makeHand(dominoImages){
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
}

function createPlayers(){
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
}

var setUp = {
  makeDominoImages: makeDominoImages,
  randomInt: randomInt,
  makeHand: makeHand,
  createPlayers: createPlayers
}

module.exports = setUp;
