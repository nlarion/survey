$(document).ready(function(){
  $(function() {
    $( "#datepicker" ).datepicker();
  });


  $("#blanks form").submit(function(event){
    var personName = $("input#personName").val();
    var date = $("input#datepicker").val();
    var startTime = $("input#startTime").val();
    var endTime = $("input#endTime").val();

    $('#confirmName').text(personName + " ");
    $('#confirmDate').text(date + " ");
    $('#confirmStartTime').text(startTime + " ");
    $('#confirmEndTime').text(endTime + " ");

    event.preventDefault();
  })

});
