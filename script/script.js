$(document).ready(function () {

    $('#gotop').click(function () {
        $('html,body').animate({scrollTop: 0}, 2000);
    });

    $(".home").click(function() {
        $('html, body').animate({
            scrollTop: $("#ste1").offset().top
        }, 2000);
    });

    $(".serv").click(function() {
        $('html, body').animate({
            scrollTop: $("#ste2").offset().top
        }, 2000);
    });

    $(".port").click(function() {
        $('html, body').animate({
            scrollTop: $("#ste3").offset().top
        }, 2000);
    });

    $(".about").click(function() {
        $('html, body').animate({
            scrollTop: $("#ste4").offset().top
        }, 2000);
    });

    $(".team").click(function() {
        $('html, body').animate({
            scrollTop: $("#ste5").offset().top
        }, 2000);
    });

    $(".contact").click(function() {
        $('html, body').animate({
            scrollTop: $("#ste6").offset().top
        }, 2000);
    });


    var namefild = $('#user_name');
    var emailfild = $('#email');


    namefild.focus(function () {
        $('#nameSpan').text("")
    });
    emailfild.focus(function () {
        $('#emailSpan').text("")
    });
    namefild.blur(function () {
        if(namefild.val()===""){
            $('#nameSpan').text("Can't be empty");
        } else{
            $('#nameSpan').text("");
        }
    });
    emailfild.blur(function () {
        if(emailfild.val()===""){
            $('#emailSpan').text("Can't be empty");
        } else{
            $('#emailSpan').text("");
        }
    });

});


