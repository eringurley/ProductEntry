import customizeBotApi from './customizeBotApi.js';

const tbody = document.getElementById('customizedBots');

const customizeBots = customizeBotApi.getAll();

for(let i = 0; i < customizeBots.length; i++) {
    const customizeBot = customizeBots[i];

    const tr = document.createElement('tr');
    const nameCell = document.createElement('td');
    nameCell.textContent = customizeBot.name;
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
    console.log(mostHelpfulCell);
    tbody.appendChild(tr);
}
