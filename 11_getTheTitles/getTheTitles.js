const getTheTitles = function (bookObjects) {

    let bookTitles = bookObjects.map(titleList => titleList.title);

    return bookTitles;

};

// Do not edit below this line
module.exports = getTheTitles;
