//Back-End Logic
var numberToArray = function(input) {
  var inputArray = [];

//push number 1 to input to array
  for (i = 1; i <= input; i++) {
    inputArray.push(i);
  }
//go through array and find numbers divisible by 3, 5, and 3 && 5
//and replace with ping, pong, and ping-pong, respectively
  var ind = 0;
  inputArray.forEach(function(element){
    if ((element % 3 === 0) && (element % 5 === 0)) {
      inputArray.splice(ind, 1, "ping-pong");
      ind++;
    } else if (element % 3 === 0) {
        inputArray.splice(ind, 1, "ping");
        ind++;
    } else if (element % 5 === 0) {
        inputArray.splice(ind, 1, "pong");
        ind++;
    } else {
      ind ++;
    };
  });

//turn array into a string and return it
  var result = inputArray.join(" <> ");
  return result;

};

// Front-End (UI)
$(document).ready(function(){
  $("#form").submit(function(event){

    var userInput = parseInt($("input#userInput").val());
    var resultList = numberToArray(userInput);
    //display error message if NaN entered, otherwise display results
    if (!userInput) {
      $("#error").show();
      $("#result").hide();
    } else {
      var resultList = numberToArray(userInput);
      $("#error").hide();
      $("#result").show();
      $("#userNumber").text(userInput);
      $("#results").text(resultList);
    };
    //allow results to change everytime new input submitted
    $("#form").change();

    event.preventDefault();
  });
      //hide results with additional button
      $("#clearBtn").click(function() {
        $("#result").hide();
      });
});
