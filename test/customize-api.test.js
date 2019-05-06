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