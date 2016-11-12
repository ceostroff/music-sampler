
$(document).ready(function() {


  function hideAll() {
    $('#theFire').hide();
    $('#longestTime').hide();
    $('#pianoMan').hide();
    $('#pressureSong').hide();
  }

  // run that function right away
  hideAll();

  // when any animal is clicked, make the suitable div appear
  $('.billySong').click(function() {
  
    // but first, hide all the divs to ensure that 
    // only one will be open, ever 
    hideAll();

    // here is a switch statement - this was in Codecademy 
    // "Control Flow" lesson 7

    // we can get the ID of the thing that was clicked - 
    switch ($(this).attr("id")) {
      case "firePic":
        $('#theFire').show();
        break;
      case "timePic":
        $('#longestTime').show();
        break;
      case "pianoPic":
        $('#pianoMan').show();
        break;
      
    }
      $("audio").each(function() {
    this.pause();
    this.currentTime = 0;
});
  }); // end of function for clicking 
    
    $("audio").each(function() {
    this.pause();
    this.currentTime = 0;
});
    $('#pressurePic').click(function() {
    $('#pressureSong').slideToggle();
  });
});