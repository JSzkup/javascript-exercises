const reverseString = function (string) {
    const arrayString = string.split('')
    const arrayReversed = []

    for (let i = 0; i < string.length; i++) {
        arrayReversed.push(arrayString.pop());
    }

    return arrayReversed.join("")
};

// Do not edit below this line
module.exports = reverseString;
