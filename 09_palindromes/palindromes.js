const palindromes = function (string) {
    // reverse the string then check if the original is equal
    // ignore punctuation, capitalization, and spaces
    const processedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    return processedString.split("").reverse().join("") == processedString;
};

// Do not edit below this line
module.exports = palindromes;
