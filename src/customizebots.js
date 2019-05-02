import customizeBotApi from './customizeBotApi.js';

const tbody = document.getElementById('customizedBots');
console.log(tbody);

const customizeBots = customizeBotApi.getAll();

for(let i = 0; i < customizeBots.length;i++) {
    const customizeBot = customizeBots[i];
    console.log(customizeBot);

    const tr = document.createElement('tr');
    console.log(tr);

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
    console.log(tr)

    tbody.appendChild(tr);
}
