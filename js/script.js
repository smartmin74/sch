$(".pagination li").on("click", function(){
    if($(".pagination li").hasClass("active")){
        $(".pagination li").removeClass("active");
        $(this).addClass("active");
    }else{
        $(this).addClass("active");
    }
})