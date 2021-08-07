
$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/chevron-left-solid.svg" alt="arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/chevron-right-solid.svg" alt="arrow"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });


    function toggleSlide (item) {
        $(item).each(function(i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            });
        });
    }

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');


    $("[data-modal=consultation]").on('click', function () {
        $(".overlay, #consultation").fadeIn();
    });
    $(".modal__close").on('click', function () {
        $(".overlay, #consultation, #thanks, #order").fadeOut();
    });
    $(".button_mini").each(function(i) {
        $(this).on("click", function() {
            $("#order .modal__descr").text($(".catalog-item__subtitle").eq(i).text());
            $(".overlay, #order").fadeIn();
        });
    });


    function validateForm(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                phone: "required"
            },
            messages: {
                name: {
                    required:"Пожалуйста, введите своё имя",
                    minlength: jQuery.validator.format("Введите {0} символов")
                },
                phone: "Пожалуйста, введите свой номер",
                email:  {
                    required: "Пожалуйста, введите свою почту",
                    email: "Неправильно введён адресс почты"
                }
            }
        });
    }

    validateForm("#consultation-form");
    validateForm("#consultation form");
    validateForm("#order form");


    $("input[name=phone]").mask("+3 (999) 999-99-99");


    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            $(".pageup").fadeIn();
        } else {
            $(".pageup").fadeOut();
        }
    });

    $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    new WOW().init();
});


