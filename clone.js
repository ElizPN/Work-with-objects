let user = {
    name:'Ivan',
    age: 30
};

let clone = {}
 
for (let key in user) {
    clone[key] = user[key];
}
clone.name = 'Peter';
