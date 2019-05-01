import get-product from './customize-product.js';
import customize-api from './customizeBotApi.js';

const roboProduct = document.getElementById('robo-product');

roboProduct.addEventListener('submit', (event) => {
    event.preventDefault();   
    
    console.log('hello');
});