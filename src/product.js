import customizeProduct from './customize-product.js';

//selecting the nodes we want to use
const roboProduct = document.getElementById('robo-product');

//wiring up form event listener

roboProduct.addEventListener('submit', (event) => {
    event.preventDefault();   
    const formData = new FormData(roboProduct);
    const product = customizeProduct(formData);
    console.log(product);
});