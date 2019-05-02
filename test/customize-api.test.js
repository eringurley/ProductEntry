import customizeBotApi from '../src/customizeBotApi.js';
const test = QUnit.test;

QUnit.module('product api');

test('round-trip getProduct api', (assert) => {
    //arrange
    const customizeBot = { name: 
        'tester' 
    };

    //act
    customizeBotApi.save(customizeBot);
    const result = customizeBotApi.get();

    
    //assert
    assert.deepEqual(result, customizeBot);
});

test('no applicants in empty local storage return empty arry', assert => {
    localStorage.removeItem('');
    const expected = [];

    const customizeBots = customizeBotApi.getAll();

    assert.deepEqual(customizeBots, expected);
});