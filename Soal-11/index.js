var filterBooksPromise = require('./promise.js');

var length = books.length;

function execute(colorful, amountPage, length) {
    filterBooksPromise(colorful, amountPage)
        .then(function checkColor(color) {
            colorful = color;
        })
        .catch(function (error) {})
}