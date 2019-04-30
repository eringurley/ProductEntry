function customizeProduct(formData) {
    //convert data into variables
    const dishes = formData.get('dishes') === 'yes';
    const laundry = formData.get('laundry') === 'yes';
    const choreHelp = parseInt(formData.get('chore-help'));
    
    //make our object literal
    const applicant = {
        name: formData.get('name'),
        dishes: dishes,
        laundry: laundry,
        wakeup: formData.getAll('wakeup'),
        preferedActivity: formData.get('preferred-activity'),
        choreHelp: choreHelp,
        mostHelpful: formData.get('most-helpful')
    };
    return applicant;
}

export default customizeProduct;