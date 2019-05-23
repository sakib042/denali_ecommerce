$('.client-slider').slick({
    autoplay: true,
    infinite: true,
    mobileFirst: true,
    pauseOnHover: true,
    autoplaySpeed: 3000,
    dots: false,
    arrow: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1400,
            settings: {
                slidesToShow: 5
            }
        },
        {
            breakpoint: 1023,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 557,
            settings: {
                slidesToShow: 3
            }
        }
    ]
});