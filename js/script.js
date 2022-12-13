
// pagination
$(".pagination li").on("click", function () {
    if ($(".pagination li").hasClass("active")) {
        $(".pagination li").removeClass("active");
        $(this).addClass("active");
    } else {
        $(this).addClass("active");
    }
})

// nav
$('.nav li').on('click', function () {
    if ($('.nav li').hasClass('active')) {
        $('.nav li').removeClass('active');
        $(this).addClass('active');
    } else {
        $(this).addClass('active');
    }
});


// modal
$('.modal .btn-close').on('click', function () {
    $('.modal').hide();
});

// profile
$('.info-name').on('click', function () {
    $('.profile-box').toggle();
});