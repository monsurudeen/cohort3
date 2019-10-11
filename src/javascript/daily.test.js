import functions from './daily'

test('Are the two values equal', () => {
   
    expect(functions.assertEquality("a", "b")).toBe("false"); 
    expect(functions.assertEquality("a", "a")).toBe("true");
    expect(functions.assertEquality(1, 2)).toBe("false");
    expect(functions.assertEquality(2, 2)).toBe("true");
    expect(functions.assertEquality("2", 2)).toBe("false");
    expect(functions.assertEquality("This value", "This value")).toBe("true");
});

/*
Write a function to format an email based on an array.
*/

test('email builder from an array', () => {
const name = ["first", "last"];
expect(functions.makeEmailArr(name))
    .toEqual("first.last@evolveu.ca");
expect(functions.makeEmailArr(["First", "Last"]))
    .toEqual("first.last@evolveu.ca");
expect(functions.makeEmailArr(["Bill", "Smith"]))
    .toEqual("bill.smith@evolveu.ca");
});



