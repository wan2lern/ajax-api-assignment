$(function () {
    // Sticky menu script
    $(document).ready(function () {
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
    });


    // 
    $(".menu-item a").click(function (e) {
        e.preventDefault();
        $(this).parent().addClass("active").siblings().removeClass('active');
        $('#main').load(this.href + ' #main *');
    });

    var data = JSON.parse('data.json');
    console.log(data);
});