var sortNumber = function (number) {
  number.sort(function (a, b) {
    if (a === b) {
      return 0;
    }
  });
};


var numver = [19, 3, 81, 1, 24, 21];
sortNumber(number);
console.log(number);
