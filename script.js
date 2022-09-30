$(document).ready(function(){
    $("#python").click(function(){
        $(".py , #text-content-center-py").css({"display": "block"})
        $(".java , #text-content-center-java").css({"display": "none"})
        $(".php , #text-content-center-php").css({"display": "none"})

    })
})
$(document).ready(function(){
    $("#java").click(function(){
        $(".java , #text-content-center-java").css({"display": "block"})
        $(".py , #text-content-center-py").css({"display": "none"})
        $(".php , #text-content-center-php").css({"display": "none"})

    })
})
$(document).ready(function(){
    $("#php").click(function(){
        $(".php , #text-content-center-php").css({"display": "block"})
        $(".java , #text-content-center-java").css({"display": "none"})
        $(".py , #text-content-center-py").css({"display": "none"})
    })
})
$(document).ready(function(){
    $("#html").click(function(){
        $(".html , #text-content-center-html").css({"display": "block"})
        $(".css , #text-content-center-css").css({"display": "none"})
        $(".js , #text-content-center-js").css({"display": "none"})
    })
})
$(document).ready(function(){
    $("#css").click(function(){
        $(".css , #text-content-center-css").css({"display": "block"})
        $(".html , #text-content-center-html").css({"display": "none"})
        $(".js , #text-content-center-js").css({"display": "none"})
    })
})
$(document).ready(function(){
    $("#javascript").click(function(){
        $(".js , #text-content-center-js").css({"display": "block"})
        $(".css , #text-content-center-css").css({"display": "none"})
        $(".html , #text-content-center-html").css({"display": "none"})
    })
})

function replacepage() {
    var newElement = 


    document.body.innerHTML = newElement;
}




