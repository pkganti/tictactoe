//This is the object which has array of elements of winning combinations

var playerArr = ['-','-','-','-','-','-','-','-','-'];
var count=0;
var threeObject = {
    winPos: [[0,1,2], [0, 3, 6], [0, 4, 8], [3, 4, 5], [6, 7, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6]]
  };

//This function takes an argument of player type and displays which player has won
var getWinner = function(player){
  // console.log(player);
if(player!==null){
  var winner = null;
  main: for(var i=0; i<threeObject.winPos.length; i++){
    var matchingMoves = 0;
    for(var j=0; j<threeObject.winPos[i].length; j++){
      if(playerArr[threeObject.winPos[i][j]]===player){
        matchingMoves += 1;
      }
      
    }
    if (matchingMoves === 3) {
        // console.log("Player " + player + " wins");
        winner = player;
        break main;
    }
  }
  return winner;
}
else {
  return null;
}

};

//This function iterates for 9 times and return a player name each time
var getPlayer = function(){

  var player1='X';
  var player2='O';
  var currentplayer;

  if(count%2===0 && count<9){
      currentplayer = player1;
    }
    else if(count%2!==0 && count<9){
      currentplayer = player2;
    }
    else{
      currentplayer = null;
    }
    count=count+1;

  return currentplayer;
};

//This function marks the position returned by the above function with the player name

var playerMark = function(position, player){
  if(player!==null){
  playerArr[position]=player;
  // return playerArr;
  }
};
