const customizeBotApi = {
    save(customizeBot) {
        //create array with applicant
        const customizeBots = customizeBotApi.getAll();
        //add this customizeBots to array
        customizeBots.push(customizeBot);
        //serialize to json
        const json = JSON.stringify(customizeBots);
        //save to local storage
        localStorage.setItem('customizeBots', json);
    },
    get() {
        //use getAll to fetch customizeBots
        const customizeBots = customizeBotApi.getAll();
        //return it
        return customizeBots[0];
    }, 
    getAll() {
        //get from local storage
        const json = localStorage.getItem(customizeBots);
        //deserialize to object
        let customizeBots = JSON.parse(json);
        if(!customizeBots) {
            customizeBots = [];
        }

        return customizeBots;
    }
};

