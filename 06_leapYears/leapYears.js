const leapYears = function (year) {

    // if year
    // divisible by 4
    // if its divisible by 100 its NOT a leap year UNLESS its ALSO divisible by 400

    if ((year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0)) {
        return true;
    }

    return false;

};

// Do not edit below this line
module.exports = leapYears;
