$(function(){
    // $('.red-box').fadeOut(2000);
    // $('.green-box').fadeOut(2000);
    // $('.green-box').fadeIn(2000);
    // $('.green-box').fadeTo(2000, 0.5);
    // $('.red-box').fadeTo(3000, 0.2);
    // $('.green-box').fadeTo(2000, 0.5);
    // $('.blue-box').fadeTo(1000, 0.8);
    // $('.blue-box').fadeToggle(3000);
    // $('.blue-box').fadeToggle(3000);
    // $('.blue-box').hide(1000);
    // $('.blue-box').show(1000);
    // $('.blue-box').slideUp(2000);
    // $('.blue-box').slideDown(2000);
    // $('p').hide();
    // $('p').slideDown(1000);
    //Custom animations
    // $('.blue-box').animate({
    //     "margin-left":"+=200px"
    // },1000,"swing");
    // $('.blue-box').animate({
    //     "margin-left":"-=200px"
    // },1000);
    // $('.blue-box').animate({
    //     "margin-left":"+=200px",
    //     "opacity":"0",
    //     "height":"50px",
    //     "width":"50px",
    //     "margin-top":"25px"
    // },1000)

    // $('p').animate({
    //     "font-size":"20px"
    // },1000)
    
    //dealy and function chaining
    // $('.red-box').fadeTo(1000,0.2);
    // $('.green-box').delay(1000).fadeTo(1000,0.5);
    // $('.blue-box').delay(2000).fadeTo(1000,0.8);
    
    //timing with callback functions
    $('.red-box').fadeTo(1000,0.2,()=>{
        $('.green-box').fadeTo(1000,0.5,()=>{
            $('.blue-box').fadeTo(1000,0.8);
        });
    });
});