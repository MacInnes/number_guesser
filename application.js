var answer = Math.floor(Math.random() * 100) + 1;
console.log(answer);

function compare(guess){
  if (guess < 1 || guess > 100){
    $('.messages').text(`${guess} is not a valid guess.  Please enter a number between 1-100`)
  } else if (answer == guess){
    $('.messages').text(`Boom!  You win!  The answer was ${answer}`)
  } else if (answer > guess){
    $('.messages').text(`Wrong!  Your guess of ${guess} is lower than the number.`)
  } else {
    $('.messages').text(`Wrong!  Your guess of ${guess} is higher than the number.`)
  }
}

$('#submit').click(function(){
  var guess = parseInt($('#guess').val());
  if (isNaN(guess)){
    $('.messages').text('That is not a valid guess.  Please enter a number between 1-100')
  } else {
    compare(guess);
  }
})

$('#clear').click(function(){
  $('#guess').val('')
})

$('#reset').click(function(){
  answer = Math.floor(Math.random() * 100) + 1;
  console.log(answer);
  $('.messages').text('Game successfully reset.')
})
