
var position = function(){
$('.box').on('click', function(){
    var position = $(this).attr('Id');
    return position;

    // playSquare(x, y);
});
};

var playerMark = function(playerName){
  var position = position();
  var playerArr = [];
  playerArr[threeObject.totalMoves.position]=playerName;
  console.log(playerArr);
};
