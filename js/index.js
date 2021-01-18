$(function(){
    $("#wrap").one("click",function(e){

        e.preventDefault(); 
        $(".logo").hide();    
        $(".page2").show();
        document.getElementById("my-video").controls=false;
        document.getElementById("my-video").currentTime=0;
        document.getElementById("my-video").play();
        // $(".page2").show(0.1);
		// $(".page2").css("opacity", 0.01);
		// window.setTimeout(function() {
		// 	$(".page1").hide();
		// 	$(".page2").css("opacity", 1);
		// }, 100)
    });
    $(".app").one("click",function(){
        document.getElementById("my-video").pause();
    });
    document.getElementById("my-video").addEventListener("pause", function(){
        $(".page3").slideDown(300);
    });
});



