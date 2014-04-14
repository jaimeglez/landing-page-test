$(function(){

  $(".scroll-place").on("click", function(){
    elementClicked = $(this).find('a').attr("href");
    destination = $(elementClicked).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({ scrollTop : destination },800);
    return false;
  });

});
