const customizeBotApi = {
    storage: localStorage,
    save(customizeBot) {
        //create array with customizeBots
        const customizeBots = customizeBotApi.getAll();
        //add this customizeBots to array
        customizeBots.push(customizeBot);
        //serialize to json
        const json = JSON.stringify(customizeBots);
        console.log(json, 'save');
        //save to local storage
        customizeBotApi.storage.setItem('customizeBots', json);
    },
    get() {
        //use getAll to fetch customizeBots
        const customizeBots = customizeBotApi.getAll();
        console.log('get', customizeBots);
        //return it
        return customizeBots[0];
    }, 
    getAll() {
        //get from customizeBotApi. storage
        const json = customizeBotApi.storage.getItem('customizeBots');
        console.log('getAll', json);
        //deserialize to object
        let customizeBots = JSON.parse(json);
        if(!customizeBots) {
            customizeBots = [];
        }

        return customizeBots;
    }
};
export default customizeBotApi;