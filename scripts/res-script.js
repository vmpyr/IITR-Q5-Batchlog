$(document).ready(function(){
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    $(window).scroll(function(){
		if(this.scrollY > 20){
			$('.navbar').addClass("sticky");
		}else{
			$('.navbar').removeClass("sticky");
		}
	});

    $(".acad-button").hover(function(){
        $(".p-acad").toggleClass("turn-black");
        $(".p-acad").text("Want to request an academic book?");
        $(".turn-black").text("Then click here!!");
    });
    $(".misc-button").hover(function(){
        $(".p-misc").toggleClass("turn-black");
        $(".p-misc").text("Want to request a miscellaneous book?");
        $(".turn-black").text("Then click here!!");
    });
});