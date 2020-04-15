
$(function () {
    $('.nutlogin').click(function (e) { 
        e.preventDefault();
        $('.formlogin').addClass('hienlogin');
    });
    $('.nutquit').click(function (e) { 
        e.preventDefault();
        $('.formlogin').removeClass('hienlogin');
    });


    // $(".nutsearch").click(function(){
    //   $(".formsearch").toggle();
    // });


    // $('.nutsearch').click(function (e) { 
    //     e.preventDefault();
    //     $('.formsearch').addClass('hiensearch');
    // });


    // $('.nutsearch').click(function(){
    //     $('.formsearch').toggle();
    //   });

    // $('.nutsearch').click(function(){

    //     if(!clicked){
    //         $('.formsearch').addClass('hiensearch');
    //     }
    //     else{
    //         $('.formsearch').removeClass('hiensearch');
    //     }
    // }







    // $('.closesearch').click(function (e) { 
    //     e.preventDefault();
    //     $('.formsearch').removeClass('hiensearch');
    // });


    
    // $('.nuttop').click(function () { 
    //     $('html,body').animate({scrollTop:0}, 000);
    // });

    // $('.nuttop').click(function(){
    //     $(window).scrollTop(0);
    // });

    // $('.nuttop').click(function(){
    //     $(window).animate({scrollTop:0}, 1000);
    // });




    $(window).scroll(function () {
        if($(this).scrollTop()>300){
            $('.header').addClass('showheader');
            $('.nuttop').addClass('hien');
             $('.header__logo').addClass('showlogo');
            //  $('.header__logo').addClass('logoni');
            
        }
        else{
            $('.header').removeClass('showheader');
            $('.nuttop').removeClass('hien');
            $('.header__logo').removeClass('showlogo');
            // $('.header__logo').removeClass('span');
         }
    });


});