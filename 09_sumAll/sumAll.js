const sumAll = function(a,b) {

    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  if (min < 0 || max < 0) return "ERROR";
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }

    sum = 0;

    for (let i = a; i <= b; i++) {
        sum+=i;
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
