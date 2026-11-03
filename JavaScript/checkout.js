window.addEventListener("load", function () {
    clearCart();
    showCheckAnimation();
    addDate();
    displayTotalPrice();
});

function showCheckAnimation() {
    const checkIconContainer = document.getElementById('checkoutIcon');
    checkIconContainer.innerHTML = '';
    const newCheckIcon = document.createElement('div');
    newCheckIcon.style.width = '200px';
    newCheckIcon.style.height = '200px';
    checkIconContainer.appendChild(newCheckIcon);

    lottie.loadAnimation({
        container: newCheckIcon,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: 'json/AnimationCheckoutPage.json' // Make sure this path is correct
    });
}

function addDate() {
    const date = document.getElementById("order_date");
    const now = new Date();
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const day = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    date.innerHTML = `${month} ${day}, ${year}`;
}

function clearCart() {
    localStorage.removeItem('cart');
    localStorage.removeItem('total price');
}

function displayTotalPrice() {
    const totalPrice = document.getElementById("total_price");
    let total = localStorage.getItem('total price');
    totalPrice.innerHTML = total ? `$${parseFloat(total).toFixed(2)}` : `$0.00`;
}

function backHome() {
    window.location.href = "index.html";
}
