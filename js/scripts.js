//Back-End Logic

var numberToArray = function(input) {
  var inputArray = [];
  var finalString = "";

  for (i = 1; i <= input; i++) {
    inputArray.push(i);
  }

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
  console.log(inputArray);

  var result = inputArray.join(" ");
  return result;

  };

// Front-End (UI)
$(document).ready(function(){
  $("#form").submit(function(){
    event.preventDefault();

    var userInput = parseInt($("input#userInput").val());
    var resultList = numberToArray(userInput);


    $("#userNumber").text(userInput);
    $("#results").text(resultList);
    $("#result").show()
    $("#form").change();

  });
});
