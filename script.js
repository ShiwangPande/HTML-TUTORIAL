$('#nav').affix({
    offset: {
        top: $('#nav').offset().top,
        bottom: ($('footer').outerHeight(true) + $('.application').outerHeight(true)) + 40
    }
});
$("#nav a").on('click', function (event) {

    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 800, function () {
        window.location.hash = hash;
    });
});

