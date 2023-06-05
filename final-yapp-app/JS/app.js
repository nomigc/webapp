window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky" , window.scrollY > 0)
})

$(document).ready(function () {
             $("#sidebar-btn").click(function () {
                 $(".side-bar-wrap").toggleClass("nav-active");
				 $("body").toggleClass("menumobile");
            });
});

$('.has-children .arrow-sub').click(function(e){
  $(this).parent().toggleClass('active');
});

$('.has-children .arrow-sub').click(function(e){
    $(".profile-dropdown").addClass("showing");
});

$('.has-children .arrow-sub').click(function(e){
    $(".profile-dropdown.showing").toggleClass("show");
});

$('.header-toggle').click(function(e){
    $(".profile-dropdown").removeClass("showing");
});

$('.model-vip,.model-left .btn-close').click(function(e){
    $("body").toggleClass("popleft");
	$(".model-left").toggleClass("show");
	
});
$('.start-gift,.start-gift .btn-close,.giftcard-left .btn-close').click(function(e){
    $("body").toggleClass("popleft");
	$(".giftcard-left").toggleClass("show");
	
});


$('.body-hide').click(function(e){
    $("body").removeClass("popleft");
	$(".giftcard-left").removeClass("show");
	$(".model-left").removeClass("show");
	
});



