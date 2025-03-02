function counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const count1 = counter();
console.log(count1()); // 1
console.log(count1()); // 2
console.log(count1()); // 3

let count2 = counter();
console.log(count2()); // 1
console.log(count2()); // 2
