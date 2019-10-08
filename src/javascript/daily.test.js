import functions from './daily'

test('Are the two values equal', () => {
    expect(functions.assertEquality("a","b")).toBe("false"); // Consider the edge cases
    expect(functions.assertEquality("a","a")).toBe("true");
    expect(functions.assertEquality(1,2)).toBe("false");
    expect(functions.assertEquality(2,2)).toBe("true");
    expect(functions.assertEquality("2",2)).toBe("false");
    expect(functions.assertEquality("This value","This value")).toBe("true");
});

