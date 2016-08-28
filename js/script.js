// document.ready
$(function () {
    // Sticky menu script
    // kolla om användaren har scrollat lägre än menyn
        // nav position i var
        var navOffset = $('nav.header-menu').offset().top;

        // sätt en wrapper runt nav så att innehållet inte hoppar
        $('.outer-nav-wrapper').height($('.header-menu').outerHeight());
        $('.outer-nav-wrapper').width('100%');

        $(window).scroll(function () {
            // scroll position
            var scrollPos = $(window).scrollTop();

            if (scrollPos >= navOffset + 2) {
                $('.header-menu').addClass('fixed');
                $('.header-menu').css('margin-top', 0);
            } else {
                $('.header-menu').removeClass('fixed');
            }
    })


    // Sätt active klass på klickad menulänk
    // ladda innehållet från href
    $(".menu-item a").click(function (e) {
        e.preventDefault();
        $(this).parent().addClass("active").siblings().removeClass('active');
        $('#main').load(this.href + ' #main *');
    });
});
