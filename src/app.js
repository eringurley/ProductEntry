import form from './get-product.js';
import customizeBotApi from './customizeBotApi.js';

//reference needed dom dones
const form = document.getElementById('robo-customize');

form.addEventListener('submit', (event) => {
    event.preventDefault();   
    const formData = new FormData(form);
    const getProduct = getProduct(formData);
    
    customizeBotApi.save(getProduct);
});