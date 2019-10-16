import functions from './syntax'

test('Declaring variables', () => {
     let y;
     const arr = [1,2,3];
     const obj ={first: "del", last: "kaz"};



   
    expect(functions.isaNumber(3)).toBe("true"); 
    expect(functions.isaString("2")).toBe("true");
    expect(functions.isaBoolean(true)).toBe("true");
    expect(functions.isitUndefined(y)).toBe("true");

    expect(functions.isanArray(arr)).toBe(true);
    expect(functions.isanObject(obj)).toBe("true");
});