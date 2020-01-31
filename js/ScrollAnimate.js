$(function () {
    $("#home").click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $("#HomeS").offset().top
        }, 2000);
    });
})

$(function () {
    $("#about").click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $("#AboutUS").offset().top - 60
        }, 2000);
    });
})

$(function () {
    $("#service").click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $("#Services").offset().top - 38
        }, 2000);
    });
})

$(function () {
    $("#ourteam").click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $("#OurTeam").offset().top - 65
        }, 2000);
    });
})
$(function () {
    $("#contact").click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $("#Contact").offset().top-35
        }, 2000);
    });
})

