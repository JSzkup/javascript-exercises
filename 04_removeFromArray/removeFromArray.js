const removeFromArray = function (arrayArg, ...removeNum) {
    return arrayArg.filter(i => !removeNum.includes(i));
};

// Do not edit below this line
module.exports = removeFromArray;
