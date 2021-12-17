$(function(){
   /**Ajax
   /Asynchronous javascript and xml
   / we can make request to servers
   /and render the data to portions of the 
   /wihtout refreshing the entire page
   /$.get(),$.post(),$ajax(),$.json()
   **/

   //Fetching a server file with jquery $.load();
   $("#code").load("js/script.js");
   $("#code").load("idontexist.php",(res,sts)=>{
      console.log(res,sts);
   });

   const url="https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"
   //Flicks api access
   $.getJSON(url,{
      //options
      tags:"sun,beach",
      tagmode:"any",
      format:"json"
   }).done((data)=>{
     $.each(data.items,(index,item)=>{
        $("#content").append(`<img src=${item.media.m}>`);
     })
   }).fail(()=>{
      console.log("failed to fetch");
   });



});