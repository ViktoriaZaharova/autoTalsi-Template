// mobile menu
$('.btn-burger').on('click', function () {
    $('.overlay-mobile').fadeToggle();
    $('.header-bottom').fadeToggle();
    $(this).toggleClass('click');
});

$('.overlay-mobile').on('click', function (e) {
    e.preventDefault();
    $('.header-bottom').fadeOut();
    $('.overlay-mobile').fadeOut();
    $('.btn-burger').removeClass('click');
});

$('.main-slider').slick({
    slidesToShow: 1,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
});

$('.dropdown-menu .dropdown-menu-list .dropdown').on('click', function(e) {
    e.stopPropagation();
    e.preventDefault();
    $(this).addClass('show').find('.dropdown-menu').addClass('show');
});


$(document).ready(function () {
    var input = document.querySelector(".phone-input1");
    window.intlTelInput(input, {
        // separateDialCode: true,
        defaultCountry: 'auto',
        onlyCountries: ["al", "ad", "at", "by", "be", "ba", "bg", "hr", "cz", "dk",
            "ee", "fo", "fi", "fr", "de", "gi", "gr", "va", "hu", "is", "ie", "it", "lv",
            "li", "lt", "lu", "mk", "mt", "md", "mc", "me", "nl", "no", "pl", "pt", "ro",
            "ru", "sm", "rs", "sk", "si", "es", "se", "ch", "ua", "gb"],
    });

    var input2 = document.querySelector(".phone-input2");
    window.intlTelInput(input2, {
        // separateDialCode: true,
        defaultCountry: 'auto',
        onlyCountries: ["al", "ad", "at", "by", "be", "ba", "bg", "hr", "cz", "dk",
            "ee", "fo", "fi", "fr", "de", "gi", "gr", "va", "hu", "is", "ie", "it", "lv",
            "li", "lt", "lu", "mk", "mt", "md", "mc", "me", "nl", "no", "pl", "pt", "ro",
            "ru", "sm", "rs", "sk", "si", "es", "se", "ch", "ua", "gb"],
    });

    var input3 = document.querySelector(".phone-input3");
    window.intlTelInput(input3, {
        // separateDialCode: true,
        defaultCountry: 'auto',
        onlyCountries: ["al", "ad", "at", "by", "be", "ba", "bg", "hr", "cz", "dk",
            "ee", "fo", "fi", "fr", "de", "gi", "gr", "va", "hu", "is", "ie", "it", "lv",
            "li", "lt", "lu", "mk", "mt", "md", "mc", "me", "nl", "no", "pl", "pt", "ro",
            "ru", "sm", "rs", "sk", "si", "es", "se", "ch", "ua", "gb"],
    });

    var input4 = document.querySelector(".phone-input4");
    window.intlTelInput(input4, {
        // separateDialCode: true,
        defaultCountry: 'auto',
        onlyCountries: ["al", "ad", "at", "by", "be", "ba", "bg", "hr", "cz", "dk",
            "ee", "fo", "fi", "fr", "de", "gi", "gr", "va", "hu", "is", "ie", "it", "lv",
            "li", "lt", "lu", "mk", "mt", "md", "mc", "me", "nl", "no", "pl", "pt", "ro",
            "ru", "sm", "rs", "sk", "si", "es", "se", "ch", "ua", "gb"],
    });

    var input5 = document.querySelector(".phone-input5");
    window.intlTelInput(input5, {
        // separateDialCode: true,
        defaultCountry: 'auto',
        onlyCountries: ["al", "ad", "at", "by", "be", "ba", "bg", "hr", "cz", "dk",
            "ee", "fo", "fi", "fr", "de", "gi", "gr", "va", "hu", "is", "ie", "it", "lv",
            "li", "lt", "lu", "mk", "mt", "md", "mc", "me", "nl", "no", "pl", "pt", "ro",
            "ru", "sm", "rs", "sk", "si", "es", "se", "ch", "ua", "gb"],
    });


});

// invoke plugin
// $('.inp-file').MultiFile({
//     list: '.files-list'
// });

// this is your selector
$.fileup({
    url: window.location.pathname + window.location.search,
    inputID: 'upload-demo',
    queueID: 'upload-demo-queue',
    dropzoneID: '',
    files: [],
    fieldName: 'filedata',
    extraFields: {},
    // lang: 'en',
    sizeLimit: 0,
    filesLimit: 0,
    method: 'post',
    timeout: null,
    autostart: false,
});

$('.slider-range1').slider({
    range: true,
    min: 0,
    max: 10000,
    values: [1000, 7895],
    classes: {
        "ui-slider-handle": "ui-corner-all"
    },
    slide: function (event, ui) {
        //Поле минимального значения
        $(".dec1").val(ui.values[0] + ' ' + '€');
        //Поле максимального значения
        $(".dec2").val(ui.values[1] + ' ' + '€');
    }
});

$(".dec1").val($(".slider-range1").slider("values", 0) + ' ' + '€');
$(".dec2").val($(".slider-range1").slider("values", 1) + ' ' + '€');


$('.slider-range2').slider({
    range: true,
    min: 1930,
    max: 2022,
    values: [1970, 2015],
    classes: {
        "ui-slider-handle": "ui-corner-all"
    },
    slide: function (event, ui) {
        //Поле минимального значения
        $(".dec3").val(ui.values[0]);
        //Поле максимального значения
        $(".dec4").val(ui.values[1]);
    }
});
$(".dec3").val($(".slider-range2").slider("values", 0));
$(".dec4").val($(".slider-range2").slider("values", 1));

$('.slider-range3').slider({
    range: true,
    min: 1930,
    max: 2022,
    values: [1970, 2015],
    classes: {
        "ui-slider-handle": "ui-corner-all"
    },
    slide: function (event, ui) {
        //Поле минимального значения
        $(".dec5").val(ui.values[0]);
        //Поле максимального значения
        $(".dec6").val(ui.values[1]);
    }
});
$(".dec5").val($(".slider-range3").slider("values", 0));
$(".dec6").val($(".slider-range3").slider("values", 1));


$('.slider-range4').slider({
    range: true,
    min: 0,
    max: 10000,
    values: [1000, 7895],
    classes: {
        "ui-slider-handle": "ui-corner-all"
    },
    slide: function (event, ui) {
        //Поле минимального значения
        $(".dec7").val(ui.values[0] + ' ' + '€');
        //Поле максимального значения
        $(".dec8").val(ui.values[1] + ' ' + '€');
    }
});

$(".dec7").val($(".slider-range4").slider("values", 0) + ' ' + '€');
$(".dec8").val($(".slider-range4").slider("values", 1) + ' ' + '€');

$('.slider-range5').slider({
    range: "min",
    min: 0,
    max: 20000,
    value: 11800,
    classes: {
        "ui-slider-handle": "ui-corner-all"
    },
    slide: function (event, ui) {
        //Поле минимального значения
        $(".dec9").val(ui.value + ' ' + '€');
    }
});
$(".dec9").val($(".slider-range5").slider("value") + ' ' + '€');

$('.slider-range6').slider({
    range: "min",
    min: 0,
    max: 90,
    value: 84,
    classes: {
        "ui-slider-handle": "ui-corner-all"
    },
    slide: function (event, ui) {
        //Поле минимального значения
        $(".dec10").val(ui.value + ' ' + 'мес.');
    }
});
$(".dec10").val($(".slider-range6").slider("value") + ' ' + 'мес.');


$('.interested-slider').slick({
    slidesToShow: 3,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                dots: true,
            }
        }
    ]
});

$('.brands-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 3,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        }
    ]
});

$('.popular-models-slider').slick({
    slidesToShow: 11,
    slidesToScroll: 4,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 9,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 7,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
});

$('.product-gallery').slick({
    slidesToShow: 1,
    fade: true,
    arrows: true,
    asNavFor: '.product-gallery-preview',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
});

$('.product-gallery-preview').slick({
    slidesToShow: 6,
    arrows: false,
    asNavFor: '.product-gallery',
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 6,
            }
        },
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 4,
            }
        }
    ]
});


$('.reviews-slider').slick({
    slidesToShow: 3,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                dots: true
            }
        }
    ]
});


$('.sidebar-close, .overlay-mobile').on('click', function () {
    $('.sidebar').fadeOut();
    $('.mobile-wrapper').fadeOut();
    $('.overlay-mobile').fadeOut();
});

$('.btn-filter').on('click', function () {
    $('.overlay-mobile').fadeIn();
    $('.sidebar').fadeIn();
});

$('.btn-sorting').on('click', function () {
    $('.overlay-mobile').fadeIn();
    $('.mobile-sorting').fadeIn();
});

$('.btn-search').on('click', function (e) {
    e.preventDefault();
    $('.overlay-mobile').fadeIn();
    $('.mobile-search').fadeIn();
});


// slick active
$(window).on('load resize', function() {
    if ($(window).width() < 992) {
        $('.category-cars-slider:not(.slick-initialized)').slick({
            dots: false,
            slidesToShow: 1,
            arrows: false,
            variableWidth: true,
            // autoplay: true,
            // autoplaySpeed: 2000,
        });

        $('.collapsed-btn').attr('data-toggle', 'collapse');
    } else {
        $(".category-cars-slider.slick-initialized").slick("unslick");
			$('.product-characteristics .collapse').collapse({
				toggle: false
			});
    }

    if ($(window).width() > 576) {
        $('.car-availability-slider:not(.slick-initialized)').slick({
            dots: false,
            slidesToShow: 4,
            prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        });

    } else {
        $(".car-availability-slider.slick-initialized").slick("unslick");
    }
});


// progressbar
function setProgress(index) {
    const calc = ((index + 1) / ($slider.slick('getSlick').slideCount)) * 100;

    $progressBar
        .css('width', calc + '%')
        .attr('aria-valuenow', calc);

}

const $slider = $('.category-cars-slider');
const $progressBar = $('.progress-bg');

$slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    setProgress(nextSlide);

});

// $('.sidebar [data-toggle="collapse"]').collapse({
//     toggle: true,
// });


// hidden list > 5
$('.sidebar .sidebar-box').each(function () {
    if ($(this).find('ul li').length > 5) {
        $(this).find('ul li').slice(5).hide();
        $(this).find('.sidebar-box__body').append('<a href="#" class="color-accent load-more-wrap">Показать все</a>');
    }

});

// hidden list > 5

// show list all
$('.load-more-wrap').on('click', function (e) {
    e.preventDefault();
    $(this).parents('.sidebar-box').find('ul li:hidden').slice(0, 5).slideDown();

    var onBlock = $(this).parents('.sidebar-box').find('ul li:hidden').length;
    if(onBlock <= 0) {
        $(this).hide();
    }
});

// show list all



