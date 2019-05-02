import customizeBotApi from './customizeBotApi.js';
const tbody = getElementById('customizeBots');

const customizeBots = customizeBotApi.getAll();

for(let i = 0; i < customizeBots.lent;i++) {
    const customizeBot = customizeBots[i];

    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = customizeBot.name;
    tr.appendchild(tr);
}