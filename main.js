const boxesDiv = document.querySelector(".boxes")

const products = [
  {
    id: 1,
    product_name: "sony playstation 5",
    price: 499.99,
    image: "",
  },
  {
    id: 2,
    product_name: "sony playstation 5",
    price: 499.99,
    image: "",
  },
  {
    id: 3,
    product_name: "sony playstation 5",
    price: 499.99,
    image: "",
  },
  {
    id: 4,
    product_name: "sony playstation 5",
    price: 499.99,
    image: "",
  },
  {
    id: 5,
    product_name: "sony playstation 5",
    price: 499.99,
    image: "",
  },
  {
    id: 6,
    product_name: "sony playstation 5",
    price: 499.99,
    image: "",
  },
]
const cartItems = [
]
function populateProducts() {
  boxesDiv.innerHTML = ""
  for (let i = 0; i <products.length; i++) {
    let htmlElement = `
    <div class="box">
    <img src="ps5.png" alt="">
    <h3 class="description">${products[i].product_name}</h3>
    <h4 class="price">$${products[i].price}</h4>
    <button data-id=${products[i].id} class="productButton">+ Add to cart</button>
    </div>
    `;
    boxesDiv.innerHTML+=htmlElement
    
    const productBtn = document.querySelector('.productButton')
    productBtn.addEventListener('click', addToCart);
    function addToCart() {
      console.log(this);
  
    }
  }
  
  // event listener for add to cart. function add to cart.
}
populateProducts()