$(window).on("scroll", function(){
    if($(window).scrollTop()){
        $('nav').addClass('small');
    }
    else {
        $('nav').removeClass('small');
    }
})
