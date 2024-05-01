// slide down list
$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown(10000);
  });
  $("#stop").click(function(){
    $("#panel").stop();
  });
});
// fadein
$(document).ready(function(){
  $("button").click(function(){
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
  });
});
//name reprint & take link in and out
$(document).ready(function(){
  $("#btn2").click(function(){
    $("p").after("5. baby doll x the perfect girl Tiktok Remix");
    $("#div3").toggle(0);
  });
});