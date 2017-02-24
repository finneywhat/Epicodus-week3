//Back-End Logic

var numberToArray = function(input) {
  var inputArray = [];

  for (i = 1; i <= input; i++) {
    inputArray.push(i);
  }

  var ind = 0;
  inputArray.forEach(function(element){

    if (element % 3 === 0) {
        inputArray.splice(ind, 1, "ping");
        ind++;
    } else {
      ind ++;
    };
  });
  console.log(inputArray);
    // if ((element%3 === 0) && (element%5 === 0)) {
    //     inputArray.splice(ind, 1, "pingpong");
    // } else if (element%3 === 0) {
    //     inputArray.splice(ind, 1, "ping");
    // } else if (element%5 === 0) {
    //     inputArray.splice(ind, 1, "pong");
    // } else {
    //   ;
    // }
    // ind++;
  };

// Front-End (UI)
$(document).ready(function(){
  $("#form").submit(function(){
    event.preventDefault();

    var userInput = parseInt($("input#userInput").val());
    var result = numberToArray(userInput);

    $("#result").text(result);

  });
});
