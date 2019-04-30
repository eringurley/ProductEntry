const test= = QUnit.test;

QUnit.module('applicant api');

test('round-trip getProduct api', (assert) => {
    //arrange
    const getProduct = {name: 'tester' };

    //act
    getProductApi.save(product);
    const result = productApi.get();

    
    //assert
    assert.deepEqual(result, product);
});