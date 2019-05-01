import getProduct from '../src/get-product.js';
const test = QUnit.test;

test('customize product from form data', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const expected = {
        name: 'Erin Gurley',
        dishes: 'yes',
        laundry: 'yes',
        wakeup: ['Between four and six hours'],
        preferedActivity: 'anything-else',
        choreHelp: 5,
        mostHelpful: 'HALP',
        
    };

    const formData = new FormData();
    formData.set('name', expected.name);
    formData.set('dishes', expected.dishes);
    formData.set('laundry', expected.laundry);
    formData.set('wakeup', expected.wakeup);
    formData.set('preferred-activity', expected.preferedActivity);
    formData.set('chore-help', expected.choreHelp);
    formData.set('most-helpful', expected.mostHelpful);

    //Act 
    // Call the function you're testing and set the result to a const
    const product = getProduct(formData);
    //Assert
    assert.deepEqual(product, expected);
});