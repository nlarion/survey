$(document).ready(function(){
  $(function() {
    $( "#datepicker" ).datepicker();
  });

  $("#blanks form").submit(function(event){
    var email = $("input#exampleInputEmail1").val();
    var date = $("input#datepicker").val();
    var startTime = $("input#startTime").val();
    var endTime = $("input#endTime").val();
    var veg = $("input#veg").is(":checked");
    var checkFood = $("input[name=inlineRadioOptions]:checked").val();

    if(veg === true){
      veg = "You're a Vegetarian :)";
    } else {
      veg = "You're not a Vegetarian :(";
    }

    $('#confirmEmail').text(email);
    $('#confirmDate').text(date);
    $('#confirmStartTime').text(startTime);
    $('#confirmEndTime').text(endTime);
    $('#confirmVeg').text(veg);
    $('#confirmFood').text(checkFood);

    event.preventDefault();
  })

});
