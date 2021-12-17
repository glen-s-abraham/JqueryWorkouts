$(function(){
   //fast feedback
  //Focus and blur events
  const inputFields= $("input:text, input:password, textarea");
  inputFields.focus(function(){
      $(this).css("box-shadow","0 0 4px #666");
  });
  inputFields.blur(function(){
   $(this).css("box-shadow","none");
  });
  $("input:text").blur(function(){
      if($(this).val().length<3)
         $(this).css("box-shadow","0 0 4px red");
      else
         $(this).css("box-shadow","0 0 4px green");
  });

  //Change event
  $("#checkBox").change(function(){
     if($(this).is(":checked"))//prop("checked");
         $(this).add("label[for='cb']").css("box-shadow","0 0 4px green");
     else
         $(this).add("label[for='cb']").css("box-shadow","0 0 4px red");
   });
   
   //Form submission
   $("#form").submit(function(e){
      console.log("form submitted");
      const textarea = $("#message");
      console.log(textarea);
      if(textarea.val().trim()== ""){
         textarea.css("box-shadow","0 0 4px #811");
         e.preventDefault();
      }
   });


});