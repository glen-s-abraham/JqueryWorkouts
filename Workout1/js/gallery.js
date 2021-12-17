$(()=>{
    $('body').css("background-color","black");
    const url="https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"
    //Flicks api access
    $.getJSON(url,{
       //options
       tags:"kerala tourism",
       tagmode:"any",
       format:"json"
    }).done((data)=>{
      $.each(data.items,(index,item)=>{
         $(".gallery").append(`<img src=${item.media.m} class="gallery_img">`);
      })
    }).fail(()=>{
       console.log("failed to fetch");
    });

    $('.imageFullscreen').click(function(){
        $(this).fadeOut(500);
        $('.imgLg').fadeOut(200);
    });

    $(".gallery").on('click','img',function(){
        $('.imageFullscreen').fadeIn(500);
        $('.imgLg').attr("src",$(this).attr("src"));
        $('.imgLg').fadeIn(700);
    });
});
    
