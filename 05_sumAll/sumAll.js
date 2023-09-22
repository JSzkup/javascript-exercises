const sumAll = function (lowerNum, upperNum) {

    let sum = 0;


    if ((lowerNum < 0 || upperNum < 0) || !(typeof lowerNum === "number" && typeof upperNum === "number")) {
        return "ERROR";

    } else if (lowerNum > upperNum) {
        let temp = lowerNum;

        lowerNum = upperNum;
        upperNum = temp;
    }

    for (lowerNum; lowerNum <= upperNum; lowerNum++) {
        sum += lowerNum;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
