import getProduct from './get-product.js';
import customizeBotApi from './customizeBotApi.js';

//reference needed dom dones
const form = document.getElementById('robo-customize');

// washing dishes are conditionally required
const yes = document.getElementById('yes');
const no = document.getElementById('no');
const dishes = document.getElementById('dishes');

yes.addEventListener('change', function() {
    dishes.disabled = !yes.checked;
    dishes.required = yes.checked;
});

no.addEventListener('change', function() {
    dishes.disabled = !no.checked;
    dishes.required = !no.checked;
    dishes.value = '';
});

form.addEventListener('submit', (event) => {
    event.preventDefault();   
    const formData = new FormData(form);
    
    customizeBotApi.save(getProduct(formData));

    const customizeBot = getProduct (formData);
    customizeBotApi.save(customizeBot);
    window.location = 'thankyou.html';
});


