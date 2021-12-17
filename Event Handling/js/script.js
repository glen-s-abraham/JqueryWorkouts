$(function(){
   //Click and hover events
   // $("#btn").click(e=>{
   //    pos=navigator.geolocation.getCurrentPosition(pos=>{
   //       console.log(pos)
   //    });
   // });

   $(".red-box").click(()=>{
      console.log("clicked red box");
      $(".red-box").fadeTo(1000,0.5);
   });

  $("#btn2").hover((e)=>{
        console.log("button hovered");
        
   });

   $(".green-box").hover(()=>{
      $(".green-box").text("I was Hovered");
   },()=>{
      $(".green-box").text("Green");
   });

   $(".blue-box").mouseenter(()=>{
      $(".blue-box").fadeTo(0,0.5);
   }).mouseleave(()=>{
      $(".blue-box").fadeTo(0,1);
   })

   //on(event, fn) function

   $("html").on("click keydown",()=>{
      console.log("mouse click or key down event");
   });

   $(".gallery").children("img").on("click",()=>{
      $(".gallery").children("img").attr("src","images/laptop-on-table_small.jpg");
   });
  
   //Modularized event handlers
   const logEvent=()=>{
      console.log("modular function mouse click");
   }
   $("html").on("click",logEvent);

   /*Delegated events-Event handlers can only be attached to elements already present
   /in the dom.not the dynamically created
   */ 
   
//   $("p").click(function(){
//      $(this).slideUp();
//   });
//   //no event handlers attached
//   $("#content").append("<p>Dynamically generated</p>");
 
  //delegated events-define events on some parent element.and specify the child element
  //to which the listeners shall bind to.

   $("#content").on("click","p",function(){
      $(this).slideUp();
   });
   //no event handlers attached
   $("#content").append("<p>Dynamically generated</p>");

   $("body").on("mouseenter","li",function(){
      $(this).css("color","red");
   });

   //Passing additional data to events
   $("#btn").click({user:"peter"},
   (e)=>greetUser(e.data));
   const greetUser=(data)=>{
      console.log("hello "+data.user);
   }

   $("#dtShowBtn").on("click",()=>{
      const date=$("#dtPicker").val();
      console.log(date==""?"null":date);
   })

   //Key down and Key Up events handling

   $("html").keydown((e)=>{
      //cross browser compatibility offered by jquery
      console.log(e.which);
     if(e.which===39)
         $(".blue-box").css("margin-left","+=10px");
     if(e.which===37)
         $(".blue-box").css("margin-left","-=10px");
   })


});