setStudentAgeApi = (student, age) => {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            student.age = age;
            if (age < 0)
                reject("Bad Age");
            else
                resolve(student);
        }, 500);
    });
}

// Call the function with a positive age (> 0)
const student = { name: 'Latifah', age: 0 }; // Initial student object
const positiveAge = 20;
setStudentAgeApi(student, positiveAge)
    .then(updatedStudent => {
        console.log('Student age updated successfully:', updatedStudent);
    })
    .catch(error => {
        console.error('Error:', error);
    });

// Call the function with a negative age (< 0) to test error handling
const negativeAge = -5;
setStudentAgeApi(student, negativeAge)
    .then(updatedStudent => {
        console.log('Student age updated successfully:', updatedStudent);
    })
    .catch(error => {
        console.error('Error:', error);
    });
