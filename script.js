
document.addEventListener('DOMContentLoaded', function() {
    // Lấy phần tử user-account và login-register từ DOM
    const login = document.getElementById('login');
    const userAccount = document.getElementById('user-account');
    const register = document.getElementById('register');
    const usersignup = document.getElementById('sign-up');

    // Bắt sự kiện khi người dùng nhấp vào biểu tượng người dùng
    userAccount.addEventListener('click', () => {
        // Hiển thị giao diện đăng ký và đăng nhập
        if(register.style.display == 'block' || login.style.display == 'block') {
            register.style.display = 'none';
            login.style.display = 'none';
        }
        else {
            register.style.display = 'none';    
            login.style.display = 'block';
            usersignup.addEventListener('click', () =>{
                login.style.display = 'none';
                register.style.display = 'block';
            })
        }
    });
});


let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.querySelectorAll('.slideshow-image');
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    
    slideIndex++;
    
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000); // Thay đổi hình sau mỗi 3 giây
}

document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const productList = document.querySelector(".product-list");

    let currentScrollPosition = 0;
    const productListWidth = productList.scrollWidth;
    const productContainerWidth = productList.clientWidth;

    function scrollProductList(direction) {
        const scrollAmount = productContainerWidth / 2;
        currentScrollPosition += direction * scrollAmount;
        
        if (currentScrollPosition < 0) {
            currentScrollPosition = 0;
        } else if (currentScrollPosition + productContainerWidth > productListWidth) {
            currentScrollPosition = productListWidth - productContainerWidth;
        }

        productList.scrollTo({
            left: currentScrollPosition,
            behavior: 'smooth',
        });
    }

    prevBtn.addEventListener("click", () => scrollProductList(-1));
    nextBtn.addEventListener("click", () => scrollProductList(1));
});
