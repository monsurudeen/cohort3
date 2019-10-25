 /*  A  stub has a function name, parameters and has a dummy return..

    TDD steps:

     write test
     write stub
     write test to make stub fail
     write the minimal code to fix the code
     repeat the above steps
     refactor
     
    */
 
import functions from "./10-25-19"

test('10-25-19 test', () => {
    
   console.log("console.log from hello world");
    functions.helloworld();
    expect(functions.sum(1,2)).toBe(3);
 });