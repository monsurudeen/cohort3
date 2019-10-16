import functions from './syntax'

test('Declaring variables, testing functions,arrays, objects and loops ', () => {
     let y;
     const arr = [1,2,3];
     const obj ={first: "del", last: "kaz"};



   
    expect(functions.isaNumber(3)).toBe("true"); 
    expect(functions.isaString("2")).toBe("true");
    expect(functions.isaBoolean(true)).toBe("true");
    expect(functions.isitUndefined(y)).toBe("true");

    expect(functions.isanArray(arr)).toBe(true);
    expect(functions.isanObject(obj)).toBe("true");
   
   // testing a basic function..
    expect(functions.simpleAdd(2,3)).toBe(5);

    // testing a while loop..
    expect(functions.whileTest(2)).toBe(3);

    // testing an object for keys and values returned...
    expect(functions.objTest(obj)).toEqual(["first", "last"]);

});