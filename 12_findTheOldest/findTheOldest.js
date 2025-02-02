const findTheOldest = function (peopleObjectArray) {

    return peopleObjectArray.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);

        // return if current age is older than oldest, else return oldest
        return oldestAge < currentAge ? currentPerson : oldest;
    });
};


function getAge(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    };

    return death - birth;

};

// Do not edit below this line
module.exports = findTheOldest;
