// Back-end logic:

// User interface logic:
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var inputNumber = parseInt($("input#usernumber").val());
    console.log(inputNumber);

    var result = 1;
    for (var index = 1; index <= inputNumber; index += 1) {
      result = result * index;
    }

    $(".inputNumber").text(inputNumber);
    $(".result").text(result)
    $("#result").show();
  });
});
