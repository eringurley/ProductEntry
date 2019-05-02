const customizeBotApi = {
    save(customizeBot) {
        //create array with applicant
        const customizeBots = [];
        customizeBots.push(customizeBot);
        //serialize to json
        const json = JSON.stringify(customizeBots);
        //save to local storage
        localStorage.setItem('customizeBots', json);
    },
    get() {
        //get from local storage
        const json = localStorage.getItem('customizeBots');
        // deserialize to object
        const customizeBot = JSON.parse(json);
        //return it
        return customizeBots[0];
    }, 
    getAll() {
        return [];
    }
};


export default customizeBotApi;