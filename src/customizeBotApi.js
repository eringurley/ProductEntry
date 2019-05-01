const customizeBotApi = {
    save(customizeBot) {
        //serialize to json
        const json = JSON.stringify(customizeBot);
        //save to local storage
        localStorage.setItem('customizeBot', json);
    },
    get() {
        //get from local storage
        const json = localStorage.getItem('customizeBot');
        // deserialize to object
        const customizeBot = JSON.parse(json);
        //return it
        return customizeBot;
    }
};

export default customizeBotApi;