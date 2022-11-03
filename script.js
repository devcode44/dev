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

/* content-1 */

$(document).ready(function(){
    $("#python").click(function(){
        $("#java").removeClass("onclick");
        $("#php").removeClass("onclick");
        $("#python").addClass("onclick2");
    })
})

$(document).ready(function(){
    $("#java").click(function(){
        $("#python").removeClass("onclick2");
        $("#php").removeClass("onclick");
        $("#java").addClass("onclick");
    })
})
$(document).ready(function(){
    $("#php").click(function(){
        $("#python").removeClass("onclick2");
        $("#java").removeClass("onclick");
        $("#php").addClass("onclick");
    })
})

/* content-2 */

$(document).ready(function(){
    $("#html").click(function(){
        $("#javascript").removeClass("onclick");
        $("#css").removeClass("onclick");
        $("#html").addClass("onclick2");
    })
})
$(document).ready(function(){
    $("#css").click(function(){
        $("#html").removeClass("onclick2");
        $("#javascript").removeClass("onclick");
        $("#css").addClass("onclick");
    })
})
$(document).ready(function(){
    $("#javascript").click(function(){
        $("#html").removeClass("onclick2");
        $("#css").removeClass("onclick");
        $("#javascript").addClass("onclick");
    })
})

$(document).ready(function(){
    $(".dropdown").click(function(){
        $(this).find(".dropdown-content").slideToggle("slow")
    })
})

function replacepage() {
    var newElement = 


    document.body.innerHTML = newElement;
}




