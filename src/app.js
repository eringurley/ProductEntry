import getProduct from './customize-product.js';
import customizeBotApi from './customizeBotApi.js';

const roboProduct = document.getElementById('robo-product');

roboProduct.addEventListener('submit', (event) => {
    event.preventDefault();   
    const formData = new FormData(getProduct);
    const product = getProduct(formData);
    
    customizeBotApi.save(product);
});