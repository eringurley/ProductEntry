import customizeBotApi from './customizeBotApi.js';

const tbody = document.getElementById('customizedBots');

const customizeBots = customizeBotApi.getAll();

//making our for loop to loop through our applicants
for(let i = 0; i < customizeBots.length; i++) {
    const customizeBot = customizeBots[i];

    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    //create the anchor link
    const link = document.createElement('a');

    //create a search params object
    const searchParams = new URLSearchParams();

    //set the name key with the applicant name as the value
    searchParams.set('name', customizeBot.name);

    //use the formatted search string as the end of the link href
    //needs to link to list page ('product.html?')
    link.href = 'product.html?' + searchParams.toString();

    //also use the applicant's name as the display text for the link
    link.textContent = customizeBot.name;

    //add the link the name cell
    nameCell.appendChild(link);
    
    tr.appendChild(nameCell);

    const dishesCell = document.createElement('td');
    dishesCell.textContent = customizeBot.dishes;
    tr.appendChild(dishesCell);

    const wakeupCell = document.createElement('td');
    wakeupCell.textContent = customizeBot.wakeup;
    tr.appendChild(wakeupCell);

    const choreHelpCell = document.createElement('td');
    choreHelpCell.textContent = customizeBot.choreHelp;
    tr.appendChild(choreHelpCell);

    const preferredActivityCell = document.createElement('td');
    preferredActivityCell.textContent = customizeBot.preferredActivity;
    tr.appendChild(preferredActivityCell);

    const mostHelpfulCell = document.createElement('td');
    mostHelpfulCell.textContent = customizeBot.mostHelpful;
    tr.appendChild(mostHelpfulCell);
    tbody.appendChild(tr);
}
