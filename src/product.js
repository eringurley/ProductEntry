import customizeBotApi from './customizeBotApi.js';

const name = document.getElementById('your-name');
const dishes = document.getElementById('dishes');
const laundry = document.getElementById('laundry');
const choreHelp = document.getElementById('chore-help');
const wakeup = document.getElementById('wakeup');
const preferredActivity = document.getElementById('preferred-activity');
const mostHelpful = document.getElementById('most-helpful');

const product = customizeBotApi.get();
console.log(product);

if(!product); {
    window.location = './';
}

name.textContent = product.name;
dishes.textContent = product.dishes;
laundry.textContent = product.laundry;
choreHelp.textContent = product.choreHelp;
wakeup.textContent = product.wakeup;
preferredActivity.textContent = product.preferredActivity;
mostHelpful.textContent = product.mostHelpful;
