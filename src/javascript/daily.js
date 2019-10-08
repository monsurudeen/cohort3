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
    
    assertEquality: (p1,p2) => {
        if(p1 === p2) {return "true";}

         else {
             console.log("***The two values are not the same:");
             console.log("P1--> " + p1);
             console.log("P2--> " + p2);

             return "false";
         }
        
        
    }

    
    
};

export default functions;
