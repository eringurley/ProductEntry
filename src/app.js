import getProduct from './get-product.js';
import customizeBotApi from './customizeBotApi.js';

//reference needed dom dones
const form = document.getElementById('robo-customize');

form.addEventListener('submit', (event) => {
    event.preventDefault();   
    const formData = new FormData(form);
    
    customizeBotApi.save(getProduct(formData));

    const customizeBot = getProduct (formData);
    customizeBotApi.save(customizeBot);
    window.location = 'thankyou.html';
});


