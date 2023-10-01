document.addEventListener('DOMContentLoaded', function() {
    const cartItemsList = document.getElementById('cart-items-list');
    const totalItems = document.getElementById('total-items');
    const totalPrice = document.getElementById('total-price');
    const checkoutButton = document.getElementById('checkout-button');

    let cart = []; // Danh sách các mặt hàng trong giỏ hàng

    // Hàm để thêm mặt hàng vào giỏ hàng
    function addToCart(item) {
        cart.push(item);
        updateCart();
    }

    // Hàm để cập nhật giao diện giỏ hàng
    function updateCart() {
        // Xóa danh sách giỏ hàng hiện tại
        cartItemsList.innerHTML = '';

        // Thêm lại các mặt hàng trong giỏ hàng
        cart.forEach((item) => {
            const li = document.createElement('li');
            li.textContent = item.name + ' - $' + item.price.toFixed(2);
            cartItemsList.appendChild(li);
        });

        // Cập nhật tổng số mặt hàng và tổng giá trị
        totalItems.textContent = cart.length;
        const total = cart.reduce((acc, item) => acc + item.price, 0);
        totalPrice.textContent = total.toFixed(2);
    }

    // Sự kiện khi nhấp vào nút "Thanh Toán"
    checkoutButton.addEventListener('click', () => {
        // Thực hiện thanh toán (thêm xử lý thanh toán ở đây nếu cần)
        alert('Đã thanh toán ' + cart.length + ' mặt hàng. Tổng cộng: $' + totalPrice.textContent);
        // Xóa giỏ hàng sau khi thanh toán
        cart = [];
        updateCart();
    });

    // Một ví dụ: Thêm mặt hàng vào giỏ hàng khi trang tải
    addToCart({ name: 'Sản phẩm 1', price: 10.99 });
    addToCart({ name: 'Sản phẩm 2', price: 15.49 });
    addToCart({ name: 'Sản phẩm 3', price: 8.99 });
});