import functions from './daily'

// Daily Exercises : MORE ARRAY WORKS: 2019-10-16....

test('more array works', () => {

    const loop2 = [1,2,3,4,5];
    const loop3 = ["cat","dog","musu"];
    const loop4 = [5,4,3,2,1];
    
    expect(functions.sliceFn(loop3)).toEqual(["cat","dog"]); 
    expect(functions.forEachFn(loop3)).toEqual(["cat","dog","musu"]);
    expect(functions.arrayMap(loop3)).toEqual(["cat?","dog?","musu?"]);
    expect(functions.spliceFn(loop3, "elephant")).toEqual(["cat","dog","elephant","musu"]);
    expect(functions.arrayFilter(loop2)).toEqual([3,4,5]); 
    expect(functions.arrayReduce(loop2)).toEqual(15);
    expect(functions.arraySort(loop4)).toEqual([1,2,3,4,5]);
    });


// Daily Exercises: PREPARE FOR ARRAY WORK.:2019-10-15......


test('prepare for array work', () => {

    const loop = [1,2,3];
    const loop1 = ["cat","dog","musu"];
    
    expect(functions.whileTest(loop)).toBe(4); 
    expect(functions.forTest(loop)).toBe(4);
    expect(functions.doWhileTest(loop)).toBe(4);
    expect(functions.forIn(loop1)).toEqual(["0","1","2"]); // test should return the indices
    expect(functions.forOf(loop1)).toEqual(["cat","dog","musu"]); // test should return the values
   
    });

//Write the function to format an email based on an object / map


test('email builder from an object / map', () => {

    const name = { fname: 'first', lname: 'last' };
    expect(functions.makeEmailObj(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: 'First', lname: 'Last' }))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: "Bill", lname: "Smith" }))
        .toEqual("bill.smith@evolveu.ca");
    });
    
   
 //Write a function to format an email based on an array.


test('email builder from an array', () => {

    const name = ["first", "last"];
    expect(functions.makeEmailArr(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["First", "Last"]))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["Bill", "Smith"]))
        .toEqual("bill.smith@evolveu.ca");
    });
     



test('Are the two values equal', () => {
   
    expect(functions.assertEquality("a", "b")).toBe("false"); 
    expect(functions.assertEquality("a", "a")).toBe("true");
    expect(functions.assertEquality(1, 2)).toBe("false");
    expect(functions.assertEquality(2, 2)).toBe("true");
    expect(functions.assertEquality("2", 2)).toBe("false");
    expect(functions.assertEquality("This value", "This value")).toBe("true");
});





	









