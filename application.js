function answerGenerator(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min; // this function returns a new random number within the given range.
}

$('#set-min-max').click(function(){
  min = parseInt($('#min').val()); // get the value of the minimum field, store it as a global variable for other functions
  max = parseInt($('#max').val()); // get the value of the maximum field, store it as a global variable for other functions
  answer = answerGenerator(min, max); // generate the random answer, store it as a global variable for other functions
  $('#reset').attr('disabled', false) // activate the reset button
})

function compare(guess){
  if (guess < min || guess > max){ // if the guess is outside the range
    $('.messages').text(`${guess} is not a valid guess.  Please enter a number between ${min} - ${max}`) // notify user of invalid number choice, remind them of the range
  } else if (answer == guess){ // a correct guess
    min -= 10; // decrease min field by 10
    max += 10; // increase max field by 10
    $('#min').val(min); // reset min value
    $('#max').val(max); // reset max value
    $('.messages').text(`Boom!  You win!  The answer was ${answer}.  Your range has been updated to ${min} - ${max}.  Keep guessing!`) // congratulate the user on the win, notify them of the new range
    answer = answerGenerator(min, max); // create a new answer for a new game
  } else if (answer > guess){ // if the guess is lower than the answer
    $('.messages').text(`Wrong!  Your guess of ${guess} is lower than the number.`) // tell them that
  } else { // otherwise...
    $('.messages').text(`Wrong!  Your guess of ${guess} is higher than the number.`) // tell them that, too
  }
}

$('#submit').click(function(){
  var guess = parseInt($('#guess').val()); // get the users guess, turn it into a number
  if (isNaN(guess)){ // if parseInt returns NaN
    $('.messages').text(`That is not a valid guess.  Please enter a number between ${min} - ${max}`) // tell them that wasn't a number
  } else { // otherwise
    compare(guess); // compare the guess to the answer
  }
})

$('#clear').click(function(){
  $('#max').val('') // clear the max input field
  $('#min').val('') // clear the min input field
  $('#guess').val('') // clear the guess input field
})

$('#reset').click(function(){
  $(this).attr('disabled', true) // disable the reset button
  $('#min').val('') // clear the min input field
  $('#max').val('') // clear the max input field
  $('#guess').val('') // clear the guess input field
  $('.messages').text('Game successfully reset.') // inform the user of the reset
})
