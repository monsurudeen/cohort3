/*
  Write a function to create this output:

  ***The two values are not the same:
        P1 --> a
        P2 --> b

  ***The two values are not the same:
        P1 --> 1
        P2 --> 2

  

*/
const functions = {

  //----------- DAILY EXERCISES- MORE ARRAY WORK: 2019-10-16------------

 // A sample function that uses the "slice()" function on an array...


 sliceFn: (arr) => {  // arr is an array...

  return arr.slice(0,2); // returns the first 2 elements of the array..

},

// A sample function that uses the "splice()" function on an array..

spliceFn: (arr, elt) => {
       arr.splice(2,0, elt); // Adds one element at index no 2, removed none..
         return arr;  //returns the array with the added element
},

// A sample function that uses "for-each()" function on an array..

forEachFn:  (arr) => {  // arr is an array
        const arr1 = [];   // 

        arr.forEach( (elt) => {
            arr1.push(elt);   // push the elemments of arr into arr1
            
        })
         
        return arr1;

},

// A sample fnction that uses "map()" function on an array....

arrayMap:  (arr) => {
        const arr1 = arr.map( (elt) => {
                return elt + "?";  // returns the elements in an array with a "?" appended..
              })
      return arr1;
},

// A sample fnction that uses "reduce()" function on an array...

arrayFilter: (arr) => {
       const arr1 =  arr.filter( (elt) => {
                return elt > 2;   // returns only the elements greater than 2..
              })
        return arr1;

},

// A sample fnction that uses "filter()" function on an array...

arrayReduce:  (arr) => {
        const arr1 =  arr.reduce( (acc, elt) => {
               return acc + elt;  // returns the sum of all elements in the array
             }, 0 )

        return arr1;
},

// A sample fnction that uses "sort()" function on an array...

arraySort:   (arr) => { return arr.sort();

},

    
   
 //---------- DAILY EXERCISES: WORKING WITH ARRAYS: 2019-10-15--------------

      // A  sample while function with an array ...

      whileTest: (a) => {        // a is an array..
        let sum = 0;
        let counter = 0;
        while(counter <= a.length){
            sum+=1;
            counter++;
        } 
        return sum;
  
      },
  
      // A sample "For" function with an array....
  
      forTest: (b) => {        // b is an array...
        let sum = 0;
        for(let i = 0; i <= b.length; i++){
             
             sum+=1;
        }
        return sum;
       
      },
      
      // A sample "do-while" function with an array...
  
      doWhileTest: (c) => {       //  c is an array....
        let sum = 0;
        let counter = 0;
  
        do{
         sum+=1;
         counter++;
        } while(counter <= c.length)
                 
        return sum;
  
        },
  
  
        // A sample "for-in" function with an array...
  
        forIn: (ind) => {  // ind is an array......
           const arr = [];
          for(const i in ind){
             arr.push(i);
          }
  
          return arr;
        },
  
  
        // A sample "for-of" function with an array....
  
        forOf: (val)  => { // val is an array...
           const arr = [];
           for(const i of val){
             arr.push(i);
           }
           return arr;
        },


  
//-----------DAILY EXERCISES: 2019-10-11 ---------------

makeEmailObj: (name) => {
  // use the map function to create a new array from the "name" object
  //values and return them in lowercase

   const newArr = Object.values(name). map((names) => { return names.toLowerCase();})

     let first = newArr[0];
     let last = newArr[1];

     return  (first + "." + last + "@evolveu.ca");
},


makeEmailArr: (name) => {

  let first = name[0].toLowerCase();
  
   let last = name[1].toLowerCase();
       
 return (first + "." + last + "@evolveu.ca");
},



assertEquality: (p1,p2) => {
        if(p1 === p2) {return "true";}

         else {
             console.log("***The two values are not the same:");
             console.log("P1--> " + p1);
             console.log("P2--> " + p2);

             return "false";
         }
    },


   

  
       

};

   
export default functions;
