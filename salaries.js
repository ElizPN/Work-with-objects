let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
  
 function count(salaries) {
      let sum = 0;
      //console.log(salaries); you must check that parameter enter to function
      for (let key in salaries) {
        //console.log(salaries[key],key);
          sum = sum + salaries[key];
      }
      console.log(sum);
      
  }
 count(salaries)
