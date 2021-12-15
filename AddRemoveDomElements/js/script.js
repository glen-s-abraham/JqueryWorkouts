$(function(){
//   Element Creation
//   $('ul ul:first').append("<li> new Addition</li>");
//   $("<li> new Addition</li>").appendTo("ul ul:last");
//   $("ul ul").prepend("<li> new Addition</li>")
//   $("<li> new Addition</li>").prependTo("ul ul:last");
//   $(".red-box").after("<div class='red-box'>Another red box</div>");
//   $(".blue-box").before("<div class='blue-box'>Another Blue Box</div>");
//   $(".blue-box").before(()=>"<div class='blue-box'>Blue Box fn</div>");
//   $(".red-box").after($("<div class='red-box'>Another red box</div>"));

// Replacing elements
// $("li").replaceWith("<li>Replaced</li>");
// $("li").replaceWith(()=>"<li>Replaced with function</li>");
// const firstListItem=$("li:first");
// $("p").replaceWith(firstListItem);

// const greenBox="<div class='green-box'>";
// $(".red-box").replaceWith(greenBox);
// $(".blue-box").replaceWith(greenBox);
// $(greenBox).replaceAll(".red-box, .blue-box");

// Remove existing elements
   // $("li").remove();
   // $("form").children().not("input:text, textarea, br").remove();
   // let listItem=$("li").detach();
   // $("#content").append(listItem);
   // $("p:first").empty();

   //Manipulate Attributres and properties
   // const link= $("#testLink");
   // console.log(link.attr("href"));
   // link.attr("href","/home");

   // const checkBox=$("input:checkbox");
   // console.log(checkBox.prop("checked"));

   // console.log($("input:text").val())
   // CSS property updates
   // console.log($(".red-box").css("width"));
   // $(".red-box").css("background-color","orange");
   // $("p").css("font-size","+=10px");
   
   //Add And remove css classes
   // $("a").addClass("fancy-link");
   // $("p:first").addClass("large emphasize");
   // $("div").addClass((index,elClass)=>{
   //    if(elClass==="dummy")
   //       return "red-box";
   // })

   // $(".red-box").removeClass("red-box").addClass("blue-box");
   // $(".dummy").removeClass("dummy blue-box").addClass("green-box");

   //Changing data of elements
   // const gallery=$(".gallery");
   // const images = [
   //    "images/laptop-mobile_small.jpg",
   //    "images/laptop-on-table_small.jpg",
   //    "images/people-office-group-team_small.jpg"
   // ]
   // gallery.data("availableImages",images);
   // console.log(gallery.data("availableImages"));
   // gallery.data("name","The gallery");
   // console.log(gallery.data())

   //text(), html()
   const firstPara=$("p:first");
   console.log(firstPara.text());
   console.log($("p").html());
   firstPara.text("<b>Hello world</b>")
   firstPara.html("<b>Hello world</b>")
});