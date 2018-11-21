var answer = Math.floor(Math.random() * 100) + 1;
console.log(answer);

function compare(guess){
  if (answer == guess){
    $('.messages').text(`Boom!  You win!  The answer was ${answer}`)
  } else if (answer > guess){
    $('.messages').text('Wrong!  Your guess was lower than the number.')
  } else {
    $('.messages').text('Wrong!  Your guess was higher than the number.')
  }
}

$('#submit').click(function(){
  var guess = parseInt($('#guess').val());
  compare(guess);
})
