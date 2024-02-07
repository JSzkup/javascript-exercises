const fibonacci = function (num) {
    if (num == 0) {
        return 0;
    } else if (num == 1 || num == 2) {
        return 1;
    } else if (num < 0) {
        return "OOPS";
    }

    let first = 1
    let second = 0

    for (let i = 2; i <= num; ++i) {
        let current = first + second;
        second = first;
        first = current;


    }

    return first;

};

// Do not edit below this line
module.exports = fibonacci;
