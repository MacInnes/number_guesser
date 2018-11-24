function answerGenerator(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

$('#set-min-max').click(function(){
  min = parseInt($('#min').val());
  max = parseInt($('#max').val());
  answer = answerGenerator(min, max);
  $('#reset').attr('disabled', false)
})

function compare(guess){
  if (guess < 1 || guess > 100){
    $('.messages').text(`${guess} is not a valid guess.  Please enter a number between 1-100`)
  } else if (answer == guess){
    min -= 10;
    max += 10;
    $('#min').val(min);
    $('#max').val(max);
    $('.messages').text(`Boom!  You win!  The answer was ${answer}.  Your range has been updated to ${min} - ${max}.  Keep guessing!`)
    answer = answerGenerator(min, max);
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
  $(this).attr('disabled', true)
  $('#min').val('')
  $('#max').val('')
  $('#guess').val('')
  $('.messages').text('Game successfully reset.')
})
