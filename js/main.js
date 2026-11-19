let count = 0;

function addToCart() {
    count++;
    document.getElementById('cart-count').innerText = count;
    
    alert("محصول به سبد خریدتان اضافه شد.");
