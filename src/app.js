import getProduct from './get-product.js';
import customizeBotApi from './customizeBotApi.js';

const roboProduct = document.getElementById('robo-customize');

roboProduct.addEventListener('submit', (event) => {
    event.preventDefault();   
    const formData = new FormData(roboProduct);
    const product = getProduct(formData);
    
    customizeBotApi.save(getProduct);
});