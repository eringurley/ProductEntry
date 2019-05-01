const test = QUnit.test;
import customizeBotApi from '../src/asldkjfsjf.js';

QUnit.module('applicant api');

test('round-trip getProduct api', (assert) => {
    //arrange
    const customizeBot = { name: 'tester' };

    //act
    customizeBotApi.save(customizeBot);
    const result = customizeBotApi.get();

    
    //assert
    assert.deepEqual(result, customizeBot);
});