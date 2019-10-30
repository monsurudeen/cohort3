import functions from './functions'

test('Check the sizes', () => {
    expect(functions.size(-1)).toBe("small"); // Consider the edge cases
    expect(functions.size(0)).toBe("small");
    expect(functions.size(10)).toBe("medium");
    expect(functions.size(15)).toBe("medium");
    expect(functions.size(20)).toBe("large");
    expect(functions.size(2000000)).toBe("large");
});

//---------- CALCULATOR TESTS ----------

test('Testing the calculator functions', () => {
    expect(functions.add(2,3)).toBe(5); 
    expect(functions.add(2,-1)).toBe(1); 
    expect(functions.add(-2,-1)).toBe(-3);
    
//------------- SUBTRACTION ---------------------
    expect(functions.subtract(-2,-1)).toBe(-1);
    expect(functions.subtract(5,3)).toBe(2);
    expect(functions.subtract(0,-1)).toBe(1);

//------------- MULTIPLICATION ---------------------
    expect(functions.multiply(0,1)).toBe(0);
    expect(functions.multiply(5,-1)).toBe(-5);
    expect(functions.multiply(-4,-2)).toBe(8);

//------------- DIVISION ---------------------
    expect(functions.divide(0,1)).toBe(0);
    expect(functions.divide(5,-1)).toBe(-5);
    expect(functions.divide(-4,-2)).toBe(2);

//------------- CALCULATOR FUNCTION ---------------------
    expect(functions.calculator("idSum",-4,-2)).toBe(-6);
    expect(functions.calculator("idSub",4,1)).toBe(3);
    expect(functions.calculator("idMult",5,-1)).toBe(-5);
    expect(functions.calculator("idDiv",-4,-2)).toBe(2);



});

//---------- TAX CALCULATOR TESTS ----------

test('Testing the tax calculator function', () => {

    expect(functions.taxCalculator(1.00)).toBe("0.150");
    expect(functions.taxCalculator(2.00)).toBe('0.300');
    expect(functions.taxCalculator(50000)).toBe('7630.350');
    expect(functions.taxCalculator(100000)).toBe('18541.110'); // failed
    expect(functions.taxCalculator(100000)).toBe('18141.105');
    expect(functions.taxCalculator(150000)).toBe('31211.095');
    expect(functions.taxCalculator(250000)).toBe('61796.255');
    
});


//---------- DICTIONARIES TESTS ----------

test('Testing the dictionaries functions', () => {

    const provinces = {
        AB : "Alberta",
        BC : "British Columbia",
        MB : "Manitoba",
        NB : "New Brunswick",
        NL : "Newfoundland and Labrador",
        };
    
        expect(functions.lookupFn(provinces, 'ab')).toBe('Alberta'); 
        expect(functions.lookupFn(provinces, 'MB')).toBe('Manitoba');
        expect(functions.lookupFn(provinces, 'mj')).toBe(undefined);
        expect(functions.lookupFn(provinces, 'nb')).toBe('New Brunswick');


});