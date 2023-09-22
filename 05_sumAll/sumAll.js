const sumAll = function (lowerNum, upperNum) {

    let sum = 0;

    // for each number from x to y
    for (lowerNum; lowerNum <= upperNum; lowerNum++)
        sum += lowerNum

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
