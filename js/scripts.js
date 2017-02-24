//Back-End Logic


// var pingPong = function(input) {
//
//
//   numberToArray(input);
//   console.log(input);
//
// };

var numberToArray = function(input) {
  var inputArray = [];
  for (i = 1; i <= input; i++) {
    inputArray.push(i);
  }
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
