let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

//let people = {};

function sumSalaries(obj) {
  let sum = 0;
  for (let value of Object.values(obj)) {
    sum = sum + value;
  }
  return sum;
}

let totalSum = sumSalaries(salaries);
console.log(totalSum);
