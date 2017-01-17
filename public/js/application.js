//función que inicia el juego
function start_game(subOne, subTwo) {
  
  //variable que tiene un arreglo asignado con la posición de los dos submarinos a destruir
  var winner = randomCell();
  
    $('.cell').on("click", function(evento){
      var playerClick = $(this).attr('id'); 
      var url = $('#play').attr('action');
      
      //¿qué debería ir aquí para conocer el número de submarinos destruidos o si el jugador es ganador?
      console.log(winner);
      won(playerClick, winner);
      
      countForPlay += 1;
      $.when(nowWinner == 2 || countForPlay == 2).then($.post(url, {chances: countForPlay, result: nowWinner, user: UserId}));
      //¿que debería ir aquí para mandar al controlador el conteo de submarinos destruidos y el
      //conteo de oportunidades por ronda?
      
    });
  
  //función para conocer el número de submarinos destruidos o si el jugador es ganador
  function won(playerValue, subValue) {
    if (nowWinner >= 2){
      status = true;
      alert("Game Over");
    }
    if (countForPlay <= 2) {
      if (playerValue == subValue[0] || playerValue == subValue[1]) {
        $('#' + playerValue).css("background","red");
        //variable que lleva el conteo de submarinos destruidos
        nowWinner += 1;
      }else{
        $('#' + playerValue).html("X");
      }
    }else{
      if (status == "false"){
        alert("Game Over");
      }
      if (countForPlay >= 2) {
        subValue.forEach(function(cel){
          $('#' + cel).css("background","red");
        });
      }
    }

    score(nowWinner);
    //¿que debería ir aquí para conocer el número de submarinos destruidos y conocer ganador?
    
  }
}

//función que muestra el score del jugador
function score(value) {
  if (value <= 2){
    $('h3').text('Destroyed Submarines: ' + value );
  }
  if (value == 2){
    $('#win').text('WINNER!');
  }
}

//función que genera el tablero de juego
var resetInit = function() {
  $("#container").empty();
  $("#container").innerHTML = '';
  $("#container div").fadeOut();
  $('#container').css('background','#FE7E25');
  $('.cell').css('color', 'white');
  $('#container').css('background','#FFFFFF');
  //¿qué debería ir aquí para generar las celdas cada vez que se inicia juego?
  var table = $('<table></table>');
  for(i=0; i<9; i++){
    var row = $('<td></td>').addClass('cell');
    row.attr('id', "c" + i)
    table.append(row);
  }

  $('div#container').append(table);

}

//función que genera la posición de los dos submarinos
var randomCell = function() {
  //variables para asignar el valor de la posición de los submarinos
  var subOne = Math.floor(Math.random() * 9);;
  var subTwo = Math.floor(Math.random() * 9);;
  //¿qué debería ir aquí para generar las dos posiciones de los submarinos?
  if (subOne == subTwo) {
    subTwo = Math.floor(Math.random() * 9);;
}
  $('td').click(function(){   
   var $this = $(this);
   var col   = $this.index();
   var row   = $this.closest('tr').index();

   
});

  
  var valueSubOne = "c" + subOne;
  var valueSubTwo = "c" + subTwo;
  return [valueSubOne, valueSubTwo]
}


$(document).ready(function(){
  	$('#play').on("submit", function(evento){
  	  evento.preventDefault();
      var url = $('#play').attr('action');
      // $.post(url, function(resetInit){

      // });
      resetInit();
      $('#win').text(" ");
      //variable que lleva el conteo de oportunidades por ronda
      countForPlay = 0;
      //variable que lleva el conteo de submarinos destruidos
      nowWinner = 0;
      //variable que termina el juego 'alert game over'
      status = false;
      //¿que debería ir aquí para comenzar el juego?
      UserId = $('#user').attr('value');
      
      start_game(randomCell);
  	  
	  });
});