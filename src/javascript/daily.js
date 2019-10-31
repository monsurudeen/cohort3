
const functions = {

  // DAILY EXERCISES- MORE ARRAY EXERCISES: REDUCE(AVERAGE OF BALANCES OF BALANCES) 2019-10-29------------- 

  loopStaffReduceAvg: (email) => {

    const newEmail = email.reduce((acc, num) => {
      return (acc + num['balance']);

    }, 0)

    return ((newEmail) / email.length);
  },


  //---- DAILY EXERCISES- MORE ARRAY EXERCISES: REDUCE(TOTAL OF BALANCES) 2019-10-29------------- 

  loopStaffReduceTotal: (email) => {

    const newEmail = email.reduce((acc, num) => {
      return (acc + num['balance']);    // Adds the value in the 'balance' key to
      // the accumulator variable (acc += num.balance)
      // for each iteration through the array

    }, 0)

    return newEmail;
  },


  //------------  DAILY EXERCISES- LOOPSTAFF CALLBACK: FOREACH 2019-10-25 -----------

  loopStaff: (email) => {
    const newArr1 = [];



    email.forEach((num) => {
      newArr1.push(functions.makeEmailObj(num));
    })





    return newArr1;
  },
  //----------- DAILY EXERCISES- LOOPSTAFF CALLBACK: MAP 2019-10-25------------- 

  loopStaff: (email) => {




    const newEmail = email.map((num) => {
      return (functions.makeEmailObj(num));

    })

    return newEmail;
  },
  //----------- DAILY EXERCISES- LOOPSTAFF-IN / LOOPSTAFF-OF: 2019-10-24------------ 

  // using FOR-IN -----------------------

  loopStaffIn: (email) => {

    const newArr = [];

    for (const item in email) // loops over "email" array,retrieves the index numbers
    {
      let arr = functions.makeEmailObj(email[item]); // retrieve values from the index numbers
      newArr.push(arr);  // pushes values onto a new array
    }
    return newArr;
  },

  // using FOR-OF ----------------------

  loopStaffOf: (email) => {

    const newArr1 = [];

    for (const item of email) // loops over "email" array, retrieves values
    {
      let arr = functions.makeEmailObj(item); // extract values into a new array
      newArr1.push(arr);
    }
    return newArr1;
  },



  //----------- DAILY EXERCISES- LOOPSTAFF: 2019-10-21------------ 

  loopStaff: (email) => {




    const newEmail = email.map((num) => {
      return (functions.makeEmailObj(num));

    })

    return newEmail;
  },


  /*------------ Another way to solve the loopstaff problem -----------
  loopStaff: (email) => {
       const newArr1 = [];
 
     
       
       email.forEach( (num) => {
         newArr1.push(functions.makeEmailObj(num)); 
       })
 
       
 
     
 
     return newArr1;
  },*/


  //----------- DAILY EXERCISES- MORE ARRAY WORK: 2019-10-16------------

  // A sample function that uses the "slice()" function on an array...


  sliceFn: (arr) => {  // arr is an array...

    return arr.slice(0, 2); // returns the first 2 elements of the array..

  },

  // A sample function that uses the "splice()" function on an array..

  spliceFn: (arr, elt) => {
    arr.splice(2, 0, elt); // Adds one element at index no 2, removed none..
    return arr;  //returns the array with the added element
  },

  // A sample function that uses "for-each()" function on an array..

  forEachFn: (arr) => {  // arr is an array
    const arr1 = [];   // 

    arr.forEach((elt) => {
      arr1.push(elt);   // push the elemments of arr into arr1

    })

    return arr1;

  },

  // A sample fnction that uses "map()" function on an array....

  arrayMap: (arr) => {
    const arr1 = arr.map((elt) => {
      return elt + "?";  // returns the elements in an array with a "?" appended..
    })
    return arr1;
  },

  // A sample fnction that uses "reduce()" function on an array...

  arrayFilter: (arr) => {
    const arr1 = arr.filter((elt) => {
      return elt > 2;   // returns only the elements greater than 2..
    })
    return arr1;

  },

  // A sample fnction that uses "filter()" function on an array...

  arrayReduce: (arr) => {
    const arr1 = arr.reduce((acc, elt) => {
      return acc + elt;  // returns the sum of all elements in the array
    }, 0)

    return arr1;
  },

  // A sample fnction that uses "sort()" function on an array...

  arraySort: (arr) => {
    return arr.sort();

  },



  //---------- DAILY EXERCISES: WORKING WITH ARRAYS: 2019-10-15--------------

  // A  sample while function with an array ...

  whileTest: (a) => {        // a is an array..
    let sum = 0;
    let counter = 0;
    while (counter <= a.length) {
      sum += 1;
      counter++;
    }
    return sum;

  },

  // A sample "For" function with an array....

  forTest: (b) => {        // b is an array...
    let sum = 0;
    for (let i = 0; i <= b.length; i++) {

      sum += 1;
    }
    return sum;

  },

  // A sample "do-while" function with an array...

  doWhileTest: (c) => {       //  c is an array....
    let sum = 0;
    let counter = 0;

    do {
      sum += 1;
      counter++;
    } while (counter <= c.length)

    return sum;

  },


  // A sample "for-in" function with an array...

  forIn: (ind) => {  // ind is an array......
    const arr = [];
    for (const i in ind) {
      arr.push(i);
    }

    return arr;
  },


  // A sample "for-of" function with an array....

  forOf: (val) => { // val is an array...
    const arr = [];
    for (const i of val) {
      arr.push(i);
    }
    return arr;
  },



  //-----------DAILY EXERCISES: 2019-10-11 ---------------

  makeEmailObj: (name) => {
    // use the map function to create a new array from the "name" object
    //values and return them in lowercase

    const newArr = Object.values(name).map((names) => { return names; })

    let first = newArr[0].toLowerCase();
    let last = newArr[1].toLowerCase();

    return (first + "." + last + "@evolveu.ca");
  },


  makeEmailArr: (name) => {

    let first = name[0].toLowerCase();

    let last = name[1].toLowerCase();

    return (first + "." + last + "@evolveu.ca");
  },



  /*
    Write a function to create this output:
  
    ***The two values are not the same:
          P1 --> a
          P2 --> b
  
    ***The two values are not the same:
          P1 --> 1
          P2 --> 2
  
  */

  assertEquality: (p1, p2) => {
    if (p1 === p2) { return "true"; }

    else {
      console.log("***The two values are not the same:");
      console.log("P1--> " + p1);
      console.log("P2--> " + p2);

      return "false";
    }
  },








};


export default functions;
