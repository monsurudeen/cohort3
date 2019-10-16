
/*To do list

define attributes / variables

number
string
boolean
array
dictionary / objects
undefined
sample if / else
functions
parameters
returns
arrays
add to the front
add to the end
update values
loops 
for
for/in
while
do while
forEach (with array and function)
Objects / Dictionaries
declare object
lookup key to retrieve value*/


const functions = {

   isaNumber: (a) =>{
        if(typeof a === "number"){

            return "true";
        }
    },

    isaString: (b) =>{
        if(typeof b === "string"){

            return "true";
        }

    },

    isaBoolean: (c) =>{
        if(typeof c === "boolean"){

            return "true";
        }
     
    },

    isanArray: (d) =>{
        return(Array.isArray(d));
                
    },

    isanObject: (e) =>{
        if(typeof e === "object"){

            return "true";
        }
        
    },

    isitUndefined: (f) =>{
        if(typeof f === "undefined"){

            return "true";
        }
    
    },
    

    // simple addition test...
    simpleAdd: (a,b) => {
        return 0;
    },
    
    
    // A  simple while test...
    whileTest: (a) => {
      let sum = 0;
      let counter = 0;
      while(counter <= a){
          sum+=1;
          counter++;
      } 
      return 0;

    },



    // Testing an object for keys and values return....
      objTest: (obj1)  => {
        return 0;
      }












};

export default functions