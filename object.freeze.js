let obj = {
  name: "FreeCodeCamp",
  review: "Awesome",
};
Object.freeze(obj); // After using this method we can not alter the object.
obj.review = "bad"; // error
obj.newProp = "Test"; // error
console.log(obj); // obj {name: "FreeCodeCamp", review: "Awesome",}
