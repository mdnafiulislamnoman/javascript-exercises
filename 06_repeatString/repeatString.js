const repeatString = function(word,num) {
    let string = "";
    for (let index = 0; index <= num; index++) {
        string = string + word;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
