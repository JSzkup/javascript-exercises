const repeatString = function (string, num) {

    let sentence = ""

    if (num >= 0) {
        for (let i = 0; i < num; i++) {
            sentence += string;
        }
    } else {
        return "ERROR"
    }

    return sentence
};

// Do not edit below this line
module.exports = repeatString;
