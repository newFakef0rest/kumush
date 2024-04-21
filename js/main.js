$(document).ready(function () {
    $('.burger').click(function (event) {
        $('.burger__float, .burger').toggleClass('active');
        $('body').toggleClass('overflow-hidden')
    })


    $('[data-modalbtn]').on('click', function () {
        let modals = document.querySelectorAll('.menu-modal')
        let modalBtnId = $(this).data().modalbtn
        for (let i = 0; i < modals.length; i++) {
            if (modals[i].dataset.id === modalBtnId) {
                modals[i].classList.add('menu-modal_active')
            }
        }
    })


    $('.menu-modal').on('click', function (e) {
        if (e.target.classList[0] === 'menu-modal') {
            $('.menu-modal').removeClass('menu-modal_active')
        }
    })

    $(window).on('keydown', function ({ originalEvent: { code } }) {
        if (code === "Escape") {
            $('.menu-modal').removeClass('menu-modal_active')
        }
    })

    $('.gallery__album').slick({
        fade: true,
        arrows: false,
        dots: false
    })

    $('.menu__slick').slick({
        fade: true,
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true
    })

    $('.show__slick').slick({
        fade: true,
        arrows: false,
        dots: false
    })

});