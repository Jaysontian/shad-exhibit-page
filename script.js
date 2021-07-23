$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 40;             // set to whatever you want it to be

    if(y_scroll_pos > scroll_pos_test) {
        $('nav').addClass('active');
        $('#name').css('opacity','0');
    } else {
        $('nav').removeClass('active');
        $('#name').css('opacity','1');
    }
});