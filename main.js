document.addEventListener('DOMContentLoaded', () => {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    // Khi click vào menu-icon
    menuIcon.onclick = () => {
        navbar.classList.toggle('active'); // Thêm hoặc bỏ class 'active' khi click vào icon
    };
});

document.addEventListener('DOMContentLoaded', () => {
    // Swiper for the Carousel
    const carouselSwiper = new Swiper('.carousel', {
        loop: true, // Lặp lại các slide vô hạn
        autoplay: {
            delay: 3000, // Tự động chuyển sau 3 giây
            disableOnInteraction: false, // Không dừng lại khi người dùng tương tác
        },
        pagination: {
            el: '.swiper-pagination', // Phần tử pagination
            clickable: true, // Cho phép click vào các nút pagination
        },
        navigation: {
            nextEl: '.swiper-button-next', // Nút "Next"
            prevEl: '.swiper-button-prev', // Nút "Prev"
        },
    });

    // Swiper for the Home Section
    const homeSwiper = new Swiper('.home', {
        loop: true, // Lặp lại các slide vô hạn
        autoplay: {
            delay: 3000, // Tự động chuyển sau 3 giây
            disableOnInteraction: false, // Không dừng lại khi người dùng tương tác
        },
        pagination: {
            el: '.swiper-pagination', // Phần tử pagination
            clickable: true, // Cho phép click vào các nút pagination
        },
        navigation: {
            nextEl: '.swiper-button-next', // Nút "Next"
            prevEl: '.swiper-button-prev', // Nút "Prev"
        },
    });
});
