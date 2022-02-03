const increment = (number, value = 1) => number + value;

console.log(increment(8, 7)); // 15
console.log(increment(8)); // 9 (8+1)

// =1 - means that if the function will call without second parameter
// there will be set default parameter - 1.
