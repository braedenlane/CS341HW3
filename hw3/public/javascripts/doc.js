// Braeden Lane

// Handler to help with the tasks needed to use the submit event

submitHandler =  function(e) {
  var ordernotes = document.getElementById('notes').value;
  var veg = 'vegan';
  
  // checking to see if notes contain the word "vegan"
  if (ordernotes.indexOf(veg)!=-1) {
    alert("Warning! Cheesecakes contain dairy. NOT vegan friendly."); // alerts if word is found
  } else { // submit the entries and hide the elements no longer needing to be used
    $("#table").hide();
    $("#notestext").hide();
    $("#notes").hide();
    $("#order").hide();

    var radioVal = $("input[name='topping']:checked").val();
    var dropdownSel = $('#quantity :selected').text();
    var thankyou = "<h3>Thank you! Your order has been placed</h3>";

    var toppingsAlert = "<p>Topping: " + radioVal + "</p>"
    var dropdownAlert = "<p>Quantity: " + dropdownSel + "</p>"
    var notesAlert = "<p>Notes: " + ordernotes + "</p>"

    $("body").append(thankyou, toppingsAlert, dropdownAlert, notesAlert);
  }
  e.preventDefault();
}

// Handler for each month

monthHandler = function() {
  var buttonText = $(this).text();
    $("#month").html(buttonText);
    $.post('/orders', function(orderArray) {
      $("#orderList0").hide();
      $("#orderList1").hide();
      $("#orderList2").hide();
      var newOrderList0 = "<li>" + orderArray.data[0].zer.quantity + " " + orderArray.data[0].zer.topping + "</li>";
      var newOrderList1 = "<li>" + orderArray.data[1].one.quantity + " " + orderArray.data[1].one.topping + "</li>";
      var newOrderList2 = "<li>" + orderArray.data[2].two.quantity + " " + orderArray.data[2].two.topping + "</li>";
      $("#orderList").append(newOrderList0, newOrderList1, newOrderList2);
    });
}

// Main section of the code

$(document).ready(function(){
  
  
  $("form").on("submit", submitHandler);
  
  
// Could not get this working with classes, used id's instead

  $("#jan").click(monthHandler);

  $("#feb").click(monthHandler);

  $("#mar").click(monthHandler);

  $("#apr").click(monthHandler);

  $("#may").click(monthHandler);
  
  $("#jun").click(monthHandler);
  
  $("#jul").click(monthHandler);

  $("#aug").click(monthHandler);
  
  $("#sep").click(monthHandler);
  
  $("#oct").click(monthHandler);
  
  $("#nov").click(monthHandler);
  
  $("#dec").click(monthHandler);
});