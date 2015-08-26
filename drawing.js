var drawFirstDomino = function(idBoard){
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
	var board = $("#board")
	board.append(dominoImage);
}

var drawDominoOnRightSide = function(domino,idBoard){
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
	var scalers = createScalersRight(rightSide)
	var dominoId = domino[0].id
	var rightSideLength = rightSide.length
	var dominoImage = findDominoImage(dominoId,dominoImages)
	dominoImage = setDominoImage(dominoImage,placedDominoWidth,placedDominoHeight,topHeight)
	var adjuster = createAdjusterRight(scalers,placedDominoWidth);
	var newLeft = leftWide + adjuster - placedDominoWidth/2;
	if(domino.hasClass("changed")){
		if(dominoId[1] != dominoId[3]){
			dominoImage.className = "rotated90";
		}else{
			newLeft = leftWide + adjuster
		}
	}else if(domino.hasClass("notChanged")){
		if(dominoId[1] != dominoId[3]){
			dominoImage.className = "rotate270";
		}else{
			newLeft = leftWide + adjuster
		}
	}
	if(dominoId[1] != dominoId[3]){
		if(newLeft + placedDominoHeight > windowWidth){
			var dominosOnRight = rightSideLength
			var lastDominoOnRight = rightSide[rightSideLength-2]
			if(idBoard[3].length == 0){
				idBoard[3].push(dominosOnRight)
				idBoard[3].push(newLeft)
				idBoard[3].push(lastDominoOnRight)
			}
			drawDominosUp(domino,idBoard)
		}else{
			dominoImage.style.left = newLeft + "px";
			board.append(dominoImage);
		}
	}else{
		if(newLeft + placedDominoWidth > windowWidth){
			var dominosOnRight = rightSideLength
			var lastDominoOnRight = rightSide[rightSideLength-2]
			if(idBoard[3].length == 0){
				idBoard[3].push(dominosOnRight)
				idBoard[3].push(newLeft)
				idBoard[3].push(lastDominoOnRight)
			}
			drawDominosUp(domino,idBoard)
		}else{
			dominoImage.style.left = newLeft + "px";
			board.append(dominoImage);
		}
	}
}

var createScalersRight = function(rightSide){
	var scalers = []
	for(var x = 0; x < rightSide.length; x++){
		var currentDominoId = rightSide[x]
		if(currentDominoId[1] == currentDominoId[3]){
			scalers.push(1)
		}else{
			scalers.push(2)
		}
	}
	return scalers
}

var createAdjusterRight = function(scalers,placedDominoWidth){
	var adjuster = 0
	for(var x=1;x<scalers.length;x++){
		var newWide = scalers[x]*placedDominoWidth;
		adjuster += newWide;
	}
	return adjuster
}

var drawDominosUp = function(domino,idBoard){
	var newLeft = idBoard[3][1]
	var dominoImages = makeDominoImages();
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	var dominoWidth = (windowWidth/10);
	var dominoHeight = 2*dominoWidth;
	var placedDominoWidth = dominoWidth / 2;
	var placedDominoHeight = 2 * placedDominoWidth;
	var topHeight =  (windowHeight/2 - 1.5*placedDominoHeight);
	var leftWide = newLeft;
	var rightSide = idBoard[1];
	var board = $("#board");
	var dominosOnRight = idBoard[3][0]
	var scalers = createScalersUp(rightSide,dominosOnRight)
	var dominoId = domino[0].id
	var rightSideLength = rightSide.length
	var dominoImage = findDominoImage(dominoId,dominoImages)
	dominoImage.style.width = placedDominoWidth + "px";
	dominoImage.style.height = placedDominoHeight + "px";
	dominoImage.style.position = "absolute";
	dominoImage.style.left = newLeft - placedDominoHeight + placedDominoWidth/2 + "px"
	var adjuster = createAdjusterUp(scalers,placedDominoHeight)
	var lastDominoOnRight = idBoard[3][2]
	if(lastDominoOnRight[1] == lastDominoOnRight[3]){
		var newTop = topHeight - placedDominoHeight  - placedDominoWidth/2 - adjuster
	}else{
		var newTop = topHeight - placedDominoHeight - adjuster;
	}
	if(domino.hasClass("changed")){
		if(dominoId[1] != dominoId[3]){
			dominoImage.className = "none";
		}else{
			dominoImage.className = "rotated90";
		}
	}else{
		if(dominoId[1] != dominoId[3]){
			dominoImage.className = "rotate180";
		}else{
			dominoImage.className = "rotated90";
		}
	}
	if(dominoId[1] != dominoId[3]){
		if(newTop -placedDominoHeight < 0 ){
			var dominosUp = scalers.length
			var dominosRight = idBoard[3][0]
			var lastDominoUp = rightSide[rightSideLength-2]
			var newLeft = newLeft - placedDominoHeight - placedDominoWidth
			var newTop = newTop + placedDominoHeight
			if(idBoard[5].length == 0){
				idBoard[5].push(dominosUp)
				idBoard[5].push(newLeft)
				idBoard[5].push(newTop)
				idBoard[5].push(lastDominoUp)
			}
			drawDominoOnLeftAgain(domino,idBoard)
		}else{
			dominoImage.style.top = newTop + placedDominoWidth/2 + "px";
			board.append(dominoImage);
		}
	}else{
		if(newTop - placedDominoHeight < 0 ){
			var dominosUp = scalers.length
			var dominosRight = idBoard[3][0]
			var lastDominoUp = rightSide[rightSideLength-2]
			var newLeft = newLeft - placedDominoHeight
			var newTop = newTop + placedDominoHeight
			if(idBoard[5].length == 0){
				idBoard[5].push(dominosUp)
				idBoard[5].push(newLeft)
				idBoard[5].push(newTop)
				idBoard[5].push(lastDominoUp)
			}
			drawDominoOnLeftAgain(domino,idBoard)
		}else{
			dominoImage.style.top = newTop + "px";
			board.append(dominoImage);
		}
	}

}

var createScalersUp = function(rightSide,dominosOnRight){
	var scalers = []
	for(x = dominosOnRight; x < rightSide.length; x++){
		var currentDominoId = rightSide[x]
		if(currentDominoId[1] == currentDominoId[3]){
			scalers.push(.5)
		}else{
			scalers.push(1)
		}
	}
	return scalers
}

var createAdjusterUp = function(scalers,placedDominoHeight){
	adjuster = 0
	for(x=0;x<scalers.length;x++){
		var newHeight = scalers[x]*placedDominoHeight;
		adjuster += newHeight;
	}
	return adjuster
}

var drawDominoOnLeftAgain = function(domino,idBoard){
	var dominosOnRight = idBoard[3][0]
	var dominosUp = idBoard[5][0]
	var newLeft = idBoard[5][1]
	var newTop = idBoard[5][2]
	var lastDominoUp = idBoard[5][3]
	var rightSide = idBoard[1]
	var dominoImages = makeDominoImages();
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	var dominoWidth = (windowWidth/10);
	var dominoHeight = 2*dominoWidth;
	var placedDominoWidth = dominoWidth / 2;
	var placedDominoHeight = 2 * placedDominoWidth;
	if(lastDominoUp[1] == lastDominoUp[3]){
		console.log("The last domino is" + lastDominoUp)
		newLeft = newLeft - placedDominoWidth/2
		newTop = newTop
	}
	var board = $("#board");
	var scalers = createScalersLeftAgain(rightSide,dominosOnRight + dominosUp)
	var dominoId = domino[0].id
	var dominoImage = findDominoImage(dominoId,dominoImages)
	dominoImage.style.width = placedDominoWidth + "px";
	dominoImage.style.height = placedDominoHeight + "px";
	dominoImage.style.position = "absolute";
	dominoImage.style.top = newTop + "px";
	var adjuster = createAdjusterLeftAgain(scalers,placedDominoWidth);
	var newLeft = newLeft - adjuster
	console.log("This is the newLeft after scalers" + newLeft)
	if(domino.hasClass("changed")){
		if(dominoId[1] != dominoId[3]){
			console.log("1")
			dominoImage.className = "rotate270";
		}
	}else if(domino.hasClass("notChanged")){
		if(dominoId[1] != dominoId[3]){
			console.log("3")
			dominoImage.className = "rotated90";
		}
	}
	if(dominoId[1] != dominoId[3]){
			dominoImage.style.left = newLeft + "px";
			board.append(dominoImage);
	}else{
			dominoImage.style.left = newLeft - placedDominoWidth/2 + "px";
			board.append(dominoImage);
	}
}

var createScalersLeftAgain = function(rightSide,start){
	var scalers = []
	for(var x = start; x < rightSide.length;x++){
		var currentDominoId = rightSide[x]
		if(currentDominoId[1] == currentDominoId[3]){
			scalers.push(1)
		}else{
			scalers.push(2)
		}
	}
	return scalers
}

var createAdjusterLeftAgain = function(scalers,placedDominoWidth){
	var adjuster = 0
	for(var x =0; x<scalers.length;x++){
		var newWide = scalers[x]*placedDominoWidth;
		adjuster += newWide;
	}
	return adjuster
}

var drawDominoOnLeftSide = function(domino,idBoard){
	var dominoImages = makeDominoImages();
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	var dominoWidth = (windowWidth/10);
	var dominoHeight = 2*dominoWidth;
	var placedDominoWidth = dominoWidth / 2;
	var placedDominoHeight = 2 * placedDominoWidth;
	var topHeight =  (windowHeight/2 - 1.5*placedDominoHeight) + "px";
	var leftWide = windowWidth/2 - placedDominoWidth/2;
	var leftSide = idBoard[0];
	var board = $("#board");
	var scalers = createScalersLeft(leftSide)
	var dominoId = domino[0].id
	var leftSideLength = leftSide.length
	var dominoImage = findDominoImage(dominoId,dominoImages)
	dominoImage = setDominoImage(dominoImage,placedDominoWidth,placedDominoHeight,topHeight)
	var adjuster = createAdjusterLeft(scalers,placedDominoWidth)
	var newLeft = leftWide - adjuster + placedDominoWidth/2;
	if(domino.hasClass("changed")){
		if(dominoId[1] != dominoId[3]){
			dominoImage.className = "rotated90";
		}else{
			newLeft = leftWide - adjuster
		}
	}else if(domino.hasClass("notChanged")){
		if(dominoId[1] != dominoId[3]){
			dominoImage.className = "rotate270";
		}else{
			newLeft = leftWide - adjuster
		}
	}
	if(dominoId[1] != dominoId[3]){
		if(newLeft - (placedDominoHeight/2) < 0){
			var dominosOnLeft = scalers.length;
			var lastDominoOnLeft = leftSide[1]
			newLeft = newLeft + placedDominoHeight/2
			if(idBoard[2].length == 0){
				idBoard[2].push(dominosOnLeft)
				idBoard[2].push(newLeft)
				idBoard[2].push(lastDominoOnLeft)
			}
			drawDominoDown(domino,idBoard);
		}else{
			dominoImage.style.left = newLeft + "px";
			board.append(dominoImage);
		}
	}else{
		if(newLeft - (placedDominoWidth/2) < 0){
			var dominosOnLeft = scalers.length;
			var lastDominoOnLeft = leftSide[1]
			newLeft = newLeft + placedDominoWidth
			if(idBoard[2].length == 0){
				idBoard[2].push(dominosOnLeft)
				idBoard[2].push(newLeft)
				idBoard[2].push(lastDominoOnLeft)
			}
			drawDominoDown(domino,idBoard);
		}else{
			dominoImage.style.left = newLeft + "px";
			board.append(dominoImage);
		}
	}
}

var createScalersLeft = function(leftSide){
	var scalers = []
	for(x = leftSide.length-1; x > -1; x--){
		var currentDominoId = leftSide[x]
		if(currentDominoId[1] == currentDominoId[3]){
			scalers.push(1)
		}else{
			scalers.push(2)
		}
	}
	return scalers
}

var findDominoImage = function(dominoId,dominoImages){
	var dominoImage = ""
	for(y = 0; y < dominoImages.length; y++){
		var dominoImageId = dominoImages[y].id;
		if(dominoId == dominoImageId){
			dominoImage = dominoImages[y];
		}
	}
	return dominoImage
}

var setDominoImage = function(dominoImage,placedDominoWidth,placedDominoHeight,topHeight){
	dominoImage.style.width = placedDominoWidth + "px";
	dominoImage.style.height = placedDominoHeight + "px";
	dominoImage.style.position = "absolute";
	dominoImage.style.top = topHeight;
	return dominoImage
}

var createAdjusterLeft = function(scalers,placedDominoWidth){
	var adjuster = 0
	for(x=1;x<scalers.length;x++){
		var newWide = scalers[x]*placedDominoWidth;
		adjuster += newWide;
	}
	return adjuster
}


var drawDominoDown = function(domino,idBoard){
	var newLeft = idBoard[2][1]
	var dominoImages = makeDominoImages();
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	var dominoWidth = (windowWidth/10);
	var dominoHeight = 2*dominoWidth;
	var placedDominoWidth = dominoWidth / 2;
	var placedDominoHeight = 2 * placedDominoWidth;
	var topHeight =  (windowHeight/2 - 1.5*placedDominoHeight);
	var leftWide = newLeft;
	var leftSide = idBoard[0];
	var board = $("#board");
	var dominosOnLeft = idBoard[2][0]
	var scalers = createScalersDown(leftSide,dominosOnLeft)
	var dominoId = domino[0].id
	var leftSideLength = leftSide.length
	var dominoImage = findDominoImage(dominoId,dominoImages)
	dominoImage.style.width = placedDominoWidth + "px";
	dominoImage.style.height = placedDominoHeight + "px";
	dominoImage.style.position = "absolute";
	dominoImage.style.left = newLeft + placedDominoWidth/2 + "px"
	var adjuster = createAdjusterDown(scalers,placedDominoHeight)
	var lastDominoOnLeft = idBoard[2][2]
	if(lastDominoOnLeft[1] == lastDominoOnLeft[3]){
		var newTop = topHeight +placedDominoWidth/2 +adjuster
	}else{
		var newTop = topHeight +adjuster;
	}
	if(domino.hasClass("changed")){
		if(dominoId[1] != dominoId[3]){
			dominoImage.className = "none";
		}else{
			dominoImage.className = "rotated90";
		}
	}else{
		if(dominoId[1] != dominoId[3]){
			dominoImage.className = "rotate180";
		}else{
			dominoImage.className = "rotated90";
		}
	}
	if(dominoId[1] != dominoId[3]){
		if(newTop + placedDominoHeight > windowHeight - dominoHeight){
			var dominosDown = scalers.length
			var dominosLeft = idBoard[2][0]
			var lastDominoDown = leftSide[1]
			var newLeft = newLeft + placedDominoHeight
			var newTop = newTop - placedDominoHeight
			if(idBoard[4].length == 0){
				idBoard[4].push(dominosDown)
				idBoard[4].push(newLeft)
				idBoard[4].push(newTop)
				idBoard[4].push(lastDominoDown)
			}
			drawDominoRightAgain(domino,idBoard)
		}else{
			dominoImage.style.top = newTop - placedDominoWidth/2  + "px";
			board.append(dominoImage);
		}
	}else{
		if(newTop + placedDominoHeight > windowHeight - dominoHeight){
			var dominosDown = scalers.length - 1
			var dominosLeft = idBoard[2][0] - 1
			var lastDominoDown = leftSide[1]
			var newLeft = newLeft + placedDominoWidth
			var newTop = newTop - placedDominoHeight + placedDominoWidth
			if(idBoard[4].length == 0){
				idBoard[4].push(dominosDown)
				idBoard[4].push(newLeft)
				idBoard[4].push(newTop)
				idBoard[4].push(lastDominoDown)
			}
			drawDominoRightAgain(domino,idBoard)
		}else{
			dominoImage.style.top = newTop  + "px";
			board.append(dominoImage);
		}
	}
}

var createScalersDown = function(leftSide,dominosOnLeft){
	var scalers = []
	var length = leftSide.length - dominosOnLeft
	for(x = length; x > -1; x--){
		var currentDominoId = leftSide[x]
		if(currentDominoId[1] == currentDominoId[3]){
			scalers.push(.5)
		}else{
			scalers.push(1)
		}
	}
	return scalers
}

var createAdjusterDown = function(scalers,placedDominoHeight){
	adjuster = 0
	for(x=0;x<scalers.length;x++){
		var newHeight = scalers[x]*placedDominoHeight;
		adjuster += newHeight;
	}
	return adjuster
}

var drawDominoRightAgain = function(domino,idBoard){
	var dominosOnLeft = idBoard[2][0]
	var dominosDown = idBoard[4][0]
	var newLeft = idBoard[4][1]
	var newTop = idBoard[4][2]
	var lastDominoDown = idBoard[4][3]
	var leftSide = idBoard[0]
	var dominoImages = makeDominoImages();
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	var dominoWidth = (windowWidth/10);
	var dominoHeight = 2*dominoWidth;
	var placedDominoWidth = dominoWidth / 2;
	var placedDominoHeight = 2 * placedDominoWidth;
	console.log("LastDominoDown" + lastDominoDown)
	if(lastDominoDown[1] == lastDominoDown[3]){
		console.log("I am here")
		newLeft = newLeft + placedDominoWidth/2
		newTop = newTop
	}
	var board = $("#board");
	var scalers = createScalersRightAgain(leftSide,dominosOnLeft + dominosDown)
	var dominoId = domino[0].id
	var dominoImage = findDominoImage(dominoId,dominoImages)
	dominoImage.style.width = placedDominoWidth + "px";
	dominoImage.style.height = placedDominoHeight + "px";
	dominoImage.style.position = "absolute";
	dominoImage.style.top = newTop + "px";
	console.log("This is the newTop in drowDominoRightAgain" + newTop)
	var adjuster = createAdjusterRightAgain(scalers,placedDominoWidth);
	var newLeft = newLeft + adjuster
	console.log("This is the newLeft after scalers" + newLeft)
	if(domino.hasClass("changed")){
		if(dominoId[1] != dominoId[3]){
			console.log("1")
			dominoImage.className = "rotate270";
		}
	}else if(domino.hasClass("notChanged")){
		if(dominoId[1] != dominoId[3]){
			console.log("3")
			dominoImage.className = "rotated90";
		}
	}
	if(dominoId[1] != dominoId[3]){
			dominoImage.style.left = newLeft + "px";
			board.append(dominoImage);
	}else{
			dominoImage.style.left = newLeft + placedDominoWidth/2 + "px";
			board.append(dominoImage);
	}
}

var createScalersRightAgain = function(leftSide,dominosUncounted){
	var scalers = []
	var length = leftSide.length - dominosUncounted
	console.log("This is the total number of dominos on the left" + leftSide.length)
	console.log("This is the total number of dominos in play" + dominosUncounted)
	for(var x = length; x > -1; x--){
		var currentDominoId = leftSide[x]
		console.log(currentDominoId)
		if(currentDominoId[1] == currentDominoId[3]){
			scalers.push(1)
		}else{
			scalers.push(2)
		}
	}
	return scalers
}

var createAdjusterRightAgain = function(scalers,placedDominoWidth){
	var adjuster = 0
	for(var x =0; x<scalers.length;x++){
		var newWide = scalers[x]*placedDominoWidth;
		adjuster += newWide;
	}
	return adjuster
}

var choseNextPlayer = function(currentPlayer){
	if(currentPlayer == "player1"){
		return "player2";
	}else if(currentPlayer == "player2"){
		return "player3";
	}else if(currentPlayer == "player3"){
		return "player4";
	}else{
		return "player1";
	};
}
