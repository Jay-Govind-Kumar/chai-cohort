// Polyfill for filter ( Replace "myfilter" with "filter" in production code )
if (!Array.prototype.filter) {
  Array.prototype.filter = function (userfn) {
    let result = [];

    for (let i = 0; i < this.length; i++) {
      if (userfn(this[i])) {
        result.push(this[i]);
      }
    }

    return result;
  };
}

let arr = [1, 2, 3, 4, 5];
let n = arr.myfilter((item) => item % 2 === 0);
console.log(n);
