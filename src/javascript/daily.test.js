import functions from './daily'


// sample data for the next few exercises
const people = [
	{fname:"Alex", lname:"Smith", province:"BC", age:33},
	{fname:"Angela", lname:"Jones", province:"AB", age:61},
	{fname:"Anne", lname:"Bird", province:"SK", age:35},
	{fname:"Brent", lname:"Riddle", province:"MN", age:79},
	{fname:"Byron", lname:"Cardenas", province:"BC", age:38},
	{fname:"Carrie", lname:"Ramirez", province:"AB", age:89},
	{fname:"Cheryl", lname:"Glenn", province:"SK", age:70},
	{fname:"Dima", lname:"Curry", province:"MN", age:67},
	{fname:"Dustin", lname:"Bullock", province:"BC", age:59},
	{fname:"Eva", lname:"Keiths", province:"AB", age:24},
	{fname:"Faith", lname:"Liu", province:"SK", age:46},
	{fname:"Fawad", lname:"Bowman", province:"MN", age:69},
	{fname:"Forest", lname:"Vaughn", province:"BC", age:52},
	{fname:"Giovanni", lname:"Browning", province:"AB", age:32},
	{fname:"Greg", lname:"Hogan", province:"SK", age:55},
	{fname:"Harpreet", lname:"Ramsey", province:"MN", age:18},
	{fname:"Ian", lname:"Fitzgerald", province:"BC", age:16},
	{fname:"James", lname:"Kramer", province:"AB", age:57},
	{fname:"Jarvis", lname:"Ortega", province:"SK", age:69},
	{fname:"Jawad", lname:"Huerta", province:"MN", age:35},
	{fname:"Jinbong", lname:"Robinson", province:"BC", age:26},
	{fname:"Jingnan", lname:"Hatfield", province:"AB", age:71},
	{fname:"Joe", lname:"Banks", province:"SK", age:37},
	{fname:"Kristina", lname:"Dalton", province:"MN", age:73},
	{fname:"Latora", lname:"Matthews", province:"BC", age:25},
	{fname:"Lauren", lname:"McClure", province:"AB", age:42},
	{fname:"Licedt", lname:"Rasmussen", province:"SK", age:30},
	{fname:"Linden", lname:"Pierce", province:"MN", age:68},
	{fname:"Luis", lname:"Price", province:"BC", age:23},
	{fname:"Marcela", lname:"Perez", province:"AB", age:20},
	{fname:"Marilou", lname:"Graham", province:"SK", age:32},
	{fname:"Matt", lname:"Novak", province:"MN", age:29},
	{fname:"Monica", lname:"Giles", province:"BC", age:34},
	{fname:"Niloufar", lname:"Carson", province:"AB", age:29},
	{fname:"Omar", lname:"Olson", province:"SK", age:69},
	{fname:"Roger", lname:"Woodard", province:"MN", age:84},
	{fname:"Roman", lname:"Swanson", province:"BC", age:21},
	{fname:"Seun", lname:"Kelly", province:"AB", age:60},
	{fname:"Shane", lname:"Frost", province:"SK", age:87},
	{fname:"Steven", lname:"Haynes", province:"MN", age:47},
	{fname:"Thomas", lname:"Hart", province:"BC", age:14},
	{fname:"Trent", lname:"Kerr", province:"AB", age:12},
	{fname:"Darrell", lname:"Koch", province:"SK", age:10},
	{fname:"Tylor", lname:"Torres", province:"MN", age:98}
];

const people1 = [
	{fname:"Alex", lname:"Smith", province:"BC", age:33},
	{fname:"Angela", lname:"Jones", province:"AB", age:61},
	{fname:"Anne", lname:"Bird", province:"SK", age:35},
    {fname:"Brent", lname:"Riddle", province:"MN", age:79},
];

// DAILY EXERCISES-------Callback Exercise (Part 2) - November 21, 2019-------------
test.only("Callback Exercise (Part 2) - November 21, 2019",() => {
    // Testing the callback function...
    const peopleRecords2 = functions.callbackFn2(people1);
    expect(peopleRecords2).toEqual({ageAverage: 52, numOfPeople: 4, totalAge: 208});
    expect(peopleRecords2["numOfPeople"]).toBe(4);

})



test.only("Callback Exercise (Part 1) - November 8, 2019",() =>{
    console.log("From Callback Exercise (Part 1) - November 8, 2019")

    //Testing the main function....
    const peopleRecords = functions.peopleFilter(people1, functions.callbackFn1,'province', ["AB","BC"]);
    expect(peopleRecords).toEqual(["Alex Smith", "Angela Jones"]);
    expect(peopleRecords).not.toEqual(["Anne Bird", "Brent Riddle"]);
     
     // Testing the callback function.....
    const peopleRecords1 = functions.callbackFn1(people1);
    expect(peopleRecords1).toEqual(["Alex Smith","Angela Jones","Anne Bird","Brent Riddle"]);
    
    })

    //Sample data for the next few exercises.


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


//----------- DAILY EXERCISES- LOOPSTAFF:More Array Exercises (Really) - November 6, 2019------------

test('More Array Exercises (Really) - FILTER', () => {
    const staffEmail6 = functions.loopStaffFilter(data.staff);
   
   expect(staffEmail6).toEqual([{ fname: "Liam", lname: "Henry", balance: 1000 },
                               {fname: "Emma", lname: "Jones", balance: 1330 }]);

});


//----------- DAILY EXERCISES- LOOPSTAFF:(Average Of Balances) 2019-10-29------------

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


//----------- DAILY EXERCISES- LOOPSTAFF:(FOR-EACH VERSION) 2019-10-25------------

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

	
//	Write the function to build email addresses for the company.


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















