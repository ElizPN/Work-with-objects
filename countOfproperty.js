let user = {
  name: "John",
  age: 30,
};

function count(obj) {
  return Object.keys(obj).length;
}
let coutnOfproperties = count(user);
console.log(coutnOfproperties);
