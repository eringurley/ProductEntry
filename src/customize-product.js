function getProduct(formData) {
    //convert data into variables
    console.log(formData);
    const dishes = formData.get('dishes');
    const laundry = formData.get('laundry');
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
    console.log(applicant);
    return applicant;
}

export default getProduct;