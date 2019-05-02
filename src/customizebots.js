import customizeBotApi from './customizeBotApi.js';
const tbody = getElementById('customizeBots');

const customizeBots = customizeBotApi.getAll();

for(let i = 0; i < customizeBots.length;i++) {
    const customizeBot = customizeBots[i];

    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = customizeBot.name;
    tr.appendchild(nameCell);


    const dishesCell = document.createElement('td');
    dishesCell.textContent = customizeBot.dishes;
    tr.appendchild(dishesCell);

    const wakeupCell = document.createElement('td');
    wakeupCell.textContent = customizeBot.wakeup;
    tr.appendchild(wakeupCell);

    const choreHelpCell = document.createElement('td');
    choreHelpCell.textContent = customizeBot.choreHelp;
    tr.appendchild(choreHelpCell);

    tbody.appendChild(tr);
}