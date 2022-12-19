

// $(document).keypress(function(event){
//   // var val=event.key;
//   $("h1").text(event.key);
// });


$(".btn").click(function(){
  $("btn").addclass("click");
  var ran = Math.floor(Math.random()*4);
  $(".btn")[ran].animate({opacity:0.5px});
});


$(".btn").click(function(event){
  if(event.key==ran)
})
