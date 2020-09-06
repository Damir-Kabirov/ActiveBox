$(function(){
    let heder = $(".header__iner");
    let intro = $(".intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop()
    
    $(window).on("scroll",function(){
        scrollPos = $(this).scrollTop();
        if(scrollPos>introH){
            heder.addClass("fixed")
        }
        else{
            heder.removeClass("fixed")
        }
    })

    
})