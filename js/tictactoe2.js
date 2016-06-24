$(document).ready(function(){

var player1Count = 0;
var player2Count = 0;
var player1Img;
var player2Img;
var userclick=1;

//This event handler returns the source of the image depending on the clicks first made
$(".image").on('click', function(){

if ($(this).hasClass('selected')) {
  return; // already played here
}
$(this).addClass('selected');

    if(userclick===1){
      player1Img = (this).src;
      $('#playerOneImage').attr('src', player1Img);
    }
    if(userclick===2){
      player2Img = (this).src;
      $('#playerTwoImage').attr('src', player2Img);
    }
    userclick+=1;
});

//This function gets the image for the player 1 and player 2
var getImage = function(player){
    if(player==='X'){
      return player1Img;
    }
    else if(player==='O'){
      return player2Img;
    }
};

//This function converts 'X' or 'O' players to player1 or player2 and returns back
var getPlayerName = function(player){
  if(player==='X'){
    return 'Player1';
  }
  else{
    return 'Player2';
  }
};

//This event handler handles the click on the box elements of the grid and changes the scores
// of the players and also displays the message of winner and clears of the boxes.
$('.box').on('click', function(){
  if ($(this).hasClass('played')) {//This is checking of the box is already clicked and will not allow the user to select it again
    return; // already played here
  }
  $(this).addClass('played');//If the player is clicking the box this class will be added to the box element
  var player = getPlayer();//calling the getplayer function to get the player X or O to a var
  var position = $(this).attr('Id');//Getting the position based on the ID attrubute of the box clicked
  var image = getImage(player);//Fetching the image the player selected from the available ones
  var myUrl = "url('"+image+"')";//Converting the image source to URL attribute so that it can be added to CSS
  playerMark(position, player);//Marking the position of the player X or O in the playerArr depending on the position/index of the box clicked
  $(this).css('background-image', myUrl);//Setting the CSS attribute of the box to image using URL that is build in previous step

  //The below If condition is to check if there is a winner, then add class to the boxgrid
  //And add 10 points to the winner total
  if(getWinner(player)!==null) {
    $('#boxgrid').addClass('gameover');
      if(player==='X'){
        player1Count+=10;
      }
      else{
        player2Count+=10;
      }

    alert('Game won by : '+getPlayerName(player));//This calls the getPlayerName function to get player1 or player2 and displays it in alert
    $('#player1').attr('placeholder',player1Count);//Sets the text box with the score of player1
    $('#player2').attr('placeholder',player2Count);//Sets the text box with the score of player2
    $('.box').attr('style',"");//setting back the style attribute to empty string after the game is over so that images clear off
    $('#boxgrid').removeClass('gameover');//Removing the gameover class after the game is over
    $('.box').removeClass('played');//Removing the played class for all the boxes so that they can be clickable next iteration
    $('.selected').removeClass('selected');//Clearing off the used images for labels
    playerArr = ['-','-','-','-','-','-','-','-','-'];//Setting back the array to empty to start next iteration
    count=0;//setting the count to zero as the game starts from 0
    userclick=1;//Setting the userclick to 1 as the game will only record two clicks for selecting two images per iteration
    }
  //   if ( $(this).closest('#boxgrid.gameover').length > 0 ) {
  //     alert('Game won by : '+player);
  //     $('.box').empty();
  //     $('#boxgrid').removeClass('gameover');
  //     $('.box').removeClass('played');
  //     playerArr = ['-','-','-','-','-','-','-','-','-'];
  //     count=0;
  // }
  // }
  //This condition below executes when the players go beyong 8 moves and in ninth moves
  //If it is a draw it is going to add a class to the box called gamedrawn and then the
  //box get flushed out.
  if(count===9){
    $('#boxgrid').addClass('gamedrawn');
    alert("The game is drawn");
    $('.box').attr('style',"");
    $('#boxgrid').removeClass('gamedrawn');
    $('.box').removeClass('played');
    playerArr = ['-','-','-','-','-','-','-','-','-'];
    count=0;
  }
  });


});
