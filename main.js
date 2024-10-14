// Khởi tạo Swiper cho phần Home
document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.home', {
        loop: true, // Lặp slide vô hạn
        spaceBetween: 30, // Khoảng cách giữa các slide
        centeredSlides: true, // Canh giữa slide
        autoplay: {
            delay: 3000, // Tự động chuyển sau 3 giây
            disableOnInteraction: false, // Tiếp tục chạy sau khi người dùng tương tác
        },
        pagination: {
            el: '.swiper-pagination', // Phần tử pagination
            clickable: true, // Cho phép bấm vào pagination
        },
        navigation: {
            nextEl: '.swiper-button-next', // Nút "Next"
            prevEl: '.swiper-button-prev', // Nút "Prev"
        },
    });

    // Điều khiển menu responsive
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menu.onclick = () => {
        menu.classList.toggle('bx-x'); // Đổi icon menu
        navbar.classList.toggle('active'); // Hiển thị navbar
    };

    window.onscroll = () => {
        menu.classList.remove('bx-x');
        navbar.classList.remove('active');
    };
});

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }
    
    slides.forEach((slide, i) => {
        slide.style.display = (i === slideIndex) ? 'block' : 'none';
    });
}

function moveSlide(step) {
    showSlide(slideIndex + step);
}

function autoSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

// Sự kiện DOMContentLoaded để hiển thị slide ban đầu và bắt đầu tự động trượt
document.addEventListener('DOMContentLoaded', () => {
    showSlide(slideIndex);
    setInterval(autoSlide, 3000); // Tự động trượt mỗi 3 giây
});
