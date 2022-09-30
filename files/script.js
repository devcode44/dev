$(document).ready(function(){
  $("#pr").click(function(){
      $(".pr , #text-content-center-py").css({"display": "block"})
      $(".em , #text-content-center-java").css({"display": "none"})
      $("#insta , #text-content-center-js").css({"display": "none"})

  })
})
$(document).ready(function(){
  $("#em").click(function(){
      $(".em , #text-content-center-java").css({"display": "block"})
      $(".pr , #text-content-center-py").css({"display": "none"})
      $("#insta , #text-content-center-js").css({"display": "none"})
  })
})
$(document).ready(function(){
  $("#sm").click(function(){
      $("#insta , #text-content-center-js").css({"display": "block"})
      $(".em , #text-content-center-java").css({"display": "none"})
      $(".pr , #text-content-center-py").css({"display": "none"})
  })
})
