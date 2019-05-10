
$(document).ready(() => $("#pageContent").html('<object data="content/home.html"/>'));

$("#homeLink").click(function(){
    $("#pageContent").html('<object data="content/home.html"/>');
    $("ul li").removeClass("active");
    $("#homeLi").addClass("active");
});

$("#aboutLink").click(function(){
    $("#pageContent").html('<object data="content/about.html"/>');
    $("ul li").removeClass("active");
    $("#aboutLi").addClass("active");
});

$("#servicesLink").click(() => {
    $("#pageContent").html('<object data="content/services.html"/>');
    $("ul li").removeClass("active");
    $("#servicesLi").addClass("active");
});

$("#contactLink").click(function(){
    $("#pageContent").html('<object data="content/contact.html"/>');
    $("ul li").removeClass("active");
    $("#contactLi").addClass("active");
});

$("#togglerButton").click(function(){
    $("#pageContent").toggleClass("increasedPadding");
});

$(".heart").click(function(){
    if($(this).hasClass("far")) {
        $(this).removeClass("far");
        $(this).addClass("fa");
    } else {
        $(this).removeClass("fa");
        $(this).addClass("far");
    }
});