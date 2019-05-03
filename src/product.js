//import our utility object for getting data
import customizeBotApi from './customizeBotApi.js';

//reference all the DOM elements we need to update
const name = document.getElementById('your-name');
const dishes = document.getElementById('dishes');
const laundry = document.getElementById('laundry');
const choreHelp = document.getElementById('chore-help');
const wakeup = document.getElementById('wakeup');
const preferredActivity = document.getElementById('preferred-activity');
const mostHelpful = document.getElementById('most-helpful');

// get applicant name
const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('name');

//get our applicant data from the api
const product = customizeBotApi.get(id);

if(!product); {
    window.location = './';
}

//mediate data into the elements
name.textContent = product.name;
dishes.textContent = product.dishes;
laundry.textContent = product.laundry;
choreHelp.textContent = product.choreHelp;
wakeup.textContent = product.wakeup;
preferredActivity.textContent = product.preferredActivity;
mostHelpful.textContent = product.mostHelpful;
