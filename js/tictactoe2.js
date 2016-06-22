$(document).ready(function(){

var player1Count = 0;
var player2Count = 0;

$('player1').on('click', function(){
  src+=$(this).attr('src');
  return src;
});

$('.box').on('click', function(){
  if ($(this).hasClass('played')) {
    return; // already played here
  }
  $(this).addClass('played');

//The below function checks for the class with gameover and displays the message
  var player = getPlayer();
  var position = $(this).attr('Id');
// console.log(position);
// console.log(playerArr);
  playerMark(position, player);
  $(this).text(player);

  if(getWinner(player)!==null) {
    if(player==='X'){
      player1Count+=1;
    }
    else{
      player2Count+=1;
    }
    $('#boxgrid').addClass('gameover');
    alert('Game won by : '+player);
    $('.player1').attr('placeholder',player1Count);
    $('.player2').attr('placeholder',player2Count);
    $('.box').empty();
    $('#boxgrid').removeClass('gameover');
    $('.box').removeClass('played');
    playerArr = ['-','-','-','-','-','-','-','-','-'];
    count=0;
    }
  // if ( $(this).closest('#boxgrid.gameover').length > 0 ) {
    // alert('Game won by : '+player);
    // $('.box').empty();
    // $('#boxgrid').removeClass('gameover');
    // $('.box').removeClass('played');
    // playerArr = ['-','-','-','-','-','-','-','-','-'];
    // count=0;
// }
// }
  if(count===9){
    $('#boxgrid').addClass('gamedrawn');
    alert("The game is drawn");
    $('.box').empty();
    $('#boxgrid').removeClass('gamedrawn');
    $('.box').removeClass('played');
    playerArr = ['-','-','-','-','-','-','-','-','-'];
    count=0;
  }
// });
});
});
