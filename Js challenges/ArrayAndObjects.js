function organizeIdentities(identityArray) {
    const result = {
        females: [],
        males: []
    };

    identityArray.forEach(identity => {
        const [fullName, age, gender] = identity.split(',').map(value => value.trim());
        const [firstName, secondName] = fullName.split(' ');

        const personDetails = {
            'second-name': secondName,
            'age': parseInt(age)
        };

        if (gender.toLowerCase() === 'female') {
            result.females.push({ [firstName]: personDetails });
        } else if (gender.toLowerCase() === 'male') {
            result.males.push({ [firstName]: personDetails });
        }
    });

    return result;
}

// Example array of people's identities
const identitiesArray = [
    "Patrick wyne, 30, male",
    "Lil wyne, 32, male",
    "Eric mimi, 21, female",
    "Dodos deck, 21, male",
    "Alian Dwine, 22, male",
    "Patrick wyne, 33, male",
    "Patrick wyne, 10, male",
    "Patrick wyne, 40, male"
];

// Call the function
const organizedIdentities = organizeIdentities(identitiesArray);
console.log(organizedIdentities);
