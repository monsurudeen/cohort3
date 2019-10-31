import functions from './daily'

/*
    Sample data for the next few exercises.
*/

const data = {
    staff: [
        { fname: "Jane", lname: "Smith", balance: 10 },
        { fname: "Liam", lname: "Henry", balance: 1000 },
        { fname: "Emma", lname: "Jones", balance: 1330 },
        { fname: "Olivia", lname: "Notly", balance: 310 },
        { fname: "Noah", lname: "Ho", balance: 503 },
        { fname: "William", lname: "Lee", balance: 520 },
        { fname: "Benjamin", lname: "Amis", balance: 150 },
    ],
    company: "EvolveU",
    city: "Calgary",
    prov: "Alberta"
};


//----------- DAILY EXERCISES- LOOPSTAFF:(Average of balances) 2019-10-29------------

test('more array exercises loopstaff -AVERAGE- ', () => {
    const staffEmail5 = functions.loopStaffReduceAvg(data.staff);

   console.log(staffEmail5);
   expect(staffEmail5).toBeCloseTo(546.143);
});


//----------- DAILY EXERCISES- LOOPSTAFF:(Total of balances) 2019-10-29------------

test('more array exercises loopstaff -TOTAL- ', () => {
    const staffEmail4 = functions.loopStaffReduceTotal(data.staff);

   console.log(staffEmail4);
   expect(staffEmail4).toEqual(3823);
});


/*----------- DAILY EXERCISES- LOOPSTAFF:(FOR-EACH VERSION) 2019-10-25------------

test('email builder for company loopstaff (for-each version)', () => {
    const staffEmail3 = functions.loopStaff(data.staff);

    expect(staffEmail3[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail3[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail3[6])
        .toEqual("benjamin.amis@evolveu.ca");
});

//----------- DAILY EXERCISES- LOOPSTAFF-IN / LOOPSTAFF-OF: 2019-10-24------------ 

test('email builder for company using for-in / for-of', () => {

    //   LOOPSTAFF-IN --------

    const staffEmail1 = functions.loopStaffIn(data.staff);
    expect(staffEmail1[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail1[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail1[6])
        .toEqual("benjamin.amis@evolveu.ca");

    //------  LOOPSTAFF-OF --------

    const staffEmail2 = functions.loopStaffOf(data.staff);
    expect(staffEmail2[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail2[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail2[6])
        .toEqual("benjamin.amis@evolveu.ca");

});

//----------- DAILY EXERCISES- LOOPSTAFF: 2019-10-21------------

/*	
	Write the function to build email addresses for the company.
*/

test('email builder for company loopstaff', () => {
    const staffEmail = functions.loopStaff(data.staff);
    expect(staffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6])
        .toEqual("benjamin.amis@evolveu.ca");
});

// Daily Exercises : MORE ARRAY WORKS: 2019-10-16....

test('more array works', () => {

    const loop2 = [1, 2, 3, 4, 5];
    const loop3 = ["cat", "dog", "musu"];
    const loop4 = [5, 4, 3, 2, 1];

    expect(functions.sliceFn(loop3)).toEqual(["cat", "dog"]);
    expect(functions.forEachFn(loop3)).toEqual(["cat", "dog", "musu"]);
    expect(functions.arrayMap(loop3)).toEqual(["cat?", "dog?", "musu?"]);
    expect(functions.spliceFn(loop3, "elephant")).toEqual(["cat", "dog", "elephant", "musu"]);
    expect(functions.arrayFilter(loop2)).toEqual([3, 4, 5]);
    expect(functions.arrayReduce(loop2)).toEqual(15);
    expect(functions.arraySort(loop4)).toEqual([1, 2, 3, 4, 5]);
});


// Daily Exercises: PREPARE FOR ARRAY WORK.:2019-10-15......


test('prepare for array work', () => {

    const loop = [1, 2, 3];
    const loop1 = ["cat", "dog", "musu"];

    expect(functions.whileTest(loop)).toBe(4);
    expect(functions.forTest(loop)).toBe(4);
    expect(functions.doWhileTest(loop)).toBe(4);
    expect(functions.forIn(loop1)).toEqual(["0", "1", "2"]); // test should return the indices
    expect(functions.forOf(loop1)).toEqual(["cat", "dog", "musu"]); // test should return the values

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















