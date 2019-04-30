import getProduct from '../src/customize-product.js';
const test = QUnit.test;

test('customize product from form data', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const expected = {
        name: 'Erin Gurley',
        dishes: true,
        enjoyLaundry: true,
        hoursOfSleep: ['Between four and six hours'],
        preferedActivity: 'Literally anything else',
        choreHelp: 5,
        mostHelpful: 'HALP',
    };

    const formData = new FormData();
    formData.set('name', expected.name);
    formData.set('age', expected.age);
    formData.set('dishes', 'yes');
    formData.set('enjoy-laundry', 'yes');
    formData.set('hours-of-sleep', expected.hoursOfSleep);
    formData.set('fry-correction', 'yes');
    formData.set('prefered-activity', expected.preferedActivity);
    formData.set('chore-help', expected.choreHelp);
    formData.set('most-helpful', expected.mostHelpful);

    //Act 
    // Call the function you're testing and set the result to a const
    const product = getProduct(formData);
    //Assert
    assert.deepEqual(product, expected);
});