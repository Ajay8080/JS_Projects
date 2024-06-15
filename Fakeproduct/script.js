const mainDiv = document.getElementById('main');
const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);

function fetchData() {
    fetch("https://fakestoreapi.com/products")
        .then(function (res) { return res.json(); })
        .then(function (data) { displayData(data); });
}
fetchData();

function displayData(data) {
    data.forEach(function (val) {
        const productDiv = document.createElement('div');
        const productImage = document.createElement('img');
        const productTitle = document.createElement('h2');
        const productPrice = document.createElement('p');
        const addCartButton = document.createElement('button');
        productDiv.classList.add('product');
        productImage.src = val.image;
        productImage.alt = val.title;
        productTitle.textContent = val.title;
        productPrice.textContent = "$" + val.price;
        addCartButton.textContent = "add to cart";
        addCartButton.addEventListener('click', addCart);
        productDiv.append(productImage, productTitle, productPrice, addCartButton);
        mainDiv.appendChild(productDiv);
    });
}

let c = 0;
function addCart() {
    c++;
    document.getElementById('count').textContent = c;
    document.getElementById('popup').style.display = "block";
    overlay.style.display = "block";
    mainDiv.classList.add('blur');
}

document.getElementById('close').addEventListener('click', function() {
    document.getElementById("popup").style.display = "none";
    overlay.style.display = "none";
    mainDiv.classList.remove('blur');
});
