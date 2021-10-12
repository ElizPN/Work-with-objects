let schedule = {};
//schedule["8:30"] = "get up";

function isEmpty(schedule) {
    let result = true; 
    for (let key in schedule) {
        result = false;    
    }
    return result;
}
console.log(isEmpty(schedule));


