$(function(){
   //Jquery Selections 
   //$('p').css("background-color","yellow");
   //$('.red-box').css("background-color","yellow");
   //$('#list').css("background-color","yellow");
   //$('input[type="text"]').css("background-color","yellow");
   //$('h2,p,input').css("background-color","yellow");
   //$('p:first').css("background-color","yellow");
   //$('li:last').css("background-color","yellow");
   //$('li:even').css("background-color","yellow")
   //$('li:odd').css("background-color","yellow")
   //$('input:text').css("background-color","yellow")

   //Jquery Traversal
   //$('#list').find('li').css('background-color','yellow');
   //$('#list').children('li').css('background-color','yellow');
   //$('#list').parents().css('background-color','yellow');
   //$('#list').parents('div').css('background-color','yellow');
   //$('#list').parent().css('background-color','yellow');
   //$('#list').siblings().css('background-color','yellow');
   //$('#list').siblings('p').css('background-color','yellow');
   //$('#list').prev().css('background-color','yellow');
   //$('#list').next().css('background-color','yellow');

   //Jquery filtering
   //$('#list').find('li').filter(':even').css('background-color','yellow');
   //$('#list').find('li').filter(index=>{
   //    return index%3==1;
   //}).css('background-color','yellow');
   //$('li').first().css('background-color','yellow');
   //$('li').last().css('background-color','yellow');
   //$('li').eq(-3).css('background-color','yellow');
   $('li').not(':first').css('background-color','yellow');
});