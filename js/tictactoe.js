//This function takes the player moves and returns an array
var player1Move = function(value){
  var moves = [];
  moves.push(value);
  return moves;
};

//This function takes the player moves and returns an array
var player2Move = function(value){
  var moves = [];
  moves.push(value);
  return moves;
};

//This is the object which has array of elements of winning combinations
var threeObject = {
  totalMoves: {one: "0",two: '1',
               three: '2', four: '3',
               five: '4', six: '5',
               seven: '6',eight: '7',
               nine: '8'}
  };
var winPos = [[0,1,2], [0, 3, 6], [0, 4, 8], [3, 4, 5], [6, 7, 8], [2, 4, 7], [2, 5, 8], [2, 4, 6]];
//This function iterates through the object array and compares the player move array and
//returns the winner
// var winCombination = function(){
//   for(var i=0; i<threeObject.wins.length; i++){
//
//   if(player1Move().length===3 || player2Move.length===3)
//   {
//     if((threeObject.wins[i].split(",").join()===player1Move.split(".").join()) || (threeObject.wins[i].split(",").join()===player1Move.arrayReverse().split(".").join()))
//     {
//       return 'Player1';
//     }
//     else if((threeObject.wins[i].split(",").join()===player2Move.split(".").join()) || (threeObject.wins[i].split(",").join()===player2Move.arrayReverse().split(".").join())){
//       return 'Player2';
//     }
//     else {
//       return 'Draw';
//     }
//   }
//
// }
// };

//This function reverses the array input
var arrayReverse = function(array){
  return array.reverse();
};

//

var getPlayer = function(){
var count;
var player1='X';
var player2='O';
var player;

for(count=0; count<10; count++){
  if(count%2===0){
    player = player1;
  }
  else{
    player = player2;
  }
return player;
}
};


var position = function(){
$('.box').on('click', function(){
    var position = $(this).attr('Id');
    console.log(position);
    return position;

    // playSquare(x, y);
});
};

var playerMark = function(player){
  var position = position();
  var playerArr = [];
  playerArr[threeObject.totalMoves.position]=playerName;
  console.log(playerArr);
};
