var playerArr = ['-','-','-','-','-','-','-','-','-'];//This is the board position array
var count=0;//Initial count set to 0
//This is the object which has array of elements of winning combinations
var threeObject = {
    winPos: [[0,1,2], [0, 3, 6], [0, 4, 8], [3, 4, 5], [6, 7, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6]]
  };

//This function takes an argument of player and returns which player is winner
var getWinner = function(player){
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

//This function gets player X or O depending on the turn
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

//This function marks the position of the player in the playerArr array as 'X' or 'O'

var playerMark = function(position, player){
  if(player!==null){
  playerArr[position]=player;
  }
};
