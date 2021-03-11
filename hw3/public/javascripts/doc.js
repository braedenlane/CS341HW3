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

    $.post("https://localhost:3000/neworders",
    {
      quantity : $("quantity :selected").val(),
      topping : $("input[name='topping']:checked").val(),
      notes : $("#notes").val(),
    });
    $("body").append(thankyou, toppingsAlert, dropdownAlert, notesAlert);
  }
  e.preventDefault();
}

// Handler for each month

monthHandler = function() {
  var buttonText = $(this).text();
    $("#month").html(buttonText);
    $.post('/orders',
    {
      month: buttonText,
    },
    function(orderArray) {
      var newOrderList0 = orderArray.data[0].quantity + " " + orderArray.data[0].topping;
      var newOrderList1 = orderArray.data[1].quantity + " " + orderArray.data[1].topping;
      var newOrderList2 = orderArray.data[2].quantity + " " + orderArray.data[2].topping;
      $("#orderList0").html(newOrderList0);
      $("#orderList1").html(newOrderList1);
      $("#orderList2").html(newOrderList2);
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