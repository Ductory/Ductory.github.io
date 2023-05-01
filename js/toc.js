(function(){
  if($("#toc").length){
    $("#toc-div .widget").html($("#toc"));
    $("#toc-div").css({"visibility": "visible"});
    $("#toc").css({"visibility": "visible"});
  }
  var position = $('#toc-div').position().top;
  $(window).scroll(function(){
    $("#toc-div").css({
      "position":"relative",
      "top":($("body,html").scrollTop() - position > 0) ? $("body,html").scrollTop() - position : 0
    });
  });
})();