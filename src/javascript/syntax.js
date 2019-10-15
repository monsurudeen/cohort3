
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

            return 0;
        }
    },

    isaString: (b) =>{
        if(typeof b === "string"){

            return 0;
        }

    },

    isaBoolean: (c) =>{
        if(typeof c === "boolean"){

            return 0;
        }
     
    },

    isanArray: (d) =>{
        if(Array.isArray(d) === "true"){

            return 0;
        }

    },

    isanObject: (e) =>{
        if(typeof e === "object"){

            return 0;
        }
        
    },

    isitUndefined: (f) =>{
        if(typeof f === "undefined"){

            return 0;
        }
    
    },

};

export default functions