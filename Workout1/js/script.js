$(function(){
   
   if(window.location.href.search("index.html")>0)
   {
      $('.nav-bar').hide();
      $('.nav-header').hide();
      $('.nav-items').hide();
      $('.landing').hide();
      $('h1').hide();
      $('p').hide();
      $('button').hide();
      $('.nav-bar').slideDown(1000);
      $('.landing').delay(1000).slideDown(1000);
      $('.nav-header').delay(1000).fadeIn(1000);
      $('.nav-items').delay(1000).fadeIn(1000);
      $('h1').delay(2000).fadeIn(2000);
      $('p').delay(2000).fadeIn(2000);
      $('button').delay(2000).fadeIn(2000);
   }
   
   
   
   if(window.location.href.search("gallery.html")>0)
   {
      $(".form-backdrop").css("opacity","1");
      let i=0;
      const gallery=["img/galery1.jpg","img/gallery2.jfif","img/gallery3.jpg"];
      $(".gallery").on("click",()=>{
         if(i==2)i=0;else i++;
         console.log(i%gallery.length);
         $(".gallery_img").fadeOut(500,()=>{
            $(".gallery_img").attr("src",gallery[i]).fadeIn(500);
         })
         
      });

   }
});