import customizeBotApi from '../src/customizeBotApi.js';
const test = QUnit.test;

QUnit.module('product api');

customizeBotApi.storage = sessionStorage;
const testStorage = sessionStorage;

test('round-trip getProduct api', (assert) => {
    testStorage.removeItem('customizeBots');
    //arrange
    const customizeBot = { name: 'tester' };

    //act
    customizeBotApi.save(customizeBot);
    const result = customizeBotApi.get();

    
    //assert
    assert.deepEqual(result, customizeBot);
});

test('no applicants in empty local storage return empty arry', assert => {
    testStorage.removeItem('customizeBots');
    const expected = [];

    const customizeBots = customizeBotApi.getAll();

    assert.deepEqual(customizeBots, expected);
});

test('two saves return array with two items', (assert) => {
    testStorage.removeItem('customizeBots');
    //arrange
    const customizeBot1 = { name: 'tester1' };
    const customizeBot2 = { name: 'tester2' };
    const expected = [customizeBot1, customizeBot2];
    
    customizeBotApi.save(customizeBot1);
    customizeBotApi.save(customizeBot2);

    //act
    const customizeBots = customizeBotApi.getAll();
    
    //assert
    assert.deepEqual(customizeBots, expected);


});

export default customizeBotApi;