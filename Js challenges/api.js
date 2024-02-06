const NumberOfFamilyMembers = async (familyArray) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            familyArray.forEach(family => {
                family.NumberOfFamilyMembers = Object.keys(family).length;
                if (family.fatherName && family.fatherName.toLowerCase() === 'yves') {
                    reject(new Error('Yves is not an allowed dad in 2022.'));
                }
            });
            resolve(familyArray);
        }, 1000);
    });
};

// Example array of family objects
const families = [
    { fatherName: 'Everiste', motherName: 'Jovanis', childrenNumber: 9},
    { fatherName: 'Joseph', motherName: 'Juliana', childrenNumber: 5 }
];

// Invoke the method and handle errors using try-catch
const PFamilies = async () => {
    try {
        const updatedFamilies = await NumberOfFamilyMembers(families);
        updatedFamilies.forEach(family => {
            console.log(family);
        });
    } catch (error) {
        console.error(error.message);
    }
};

// Call the method
PFamilies();
