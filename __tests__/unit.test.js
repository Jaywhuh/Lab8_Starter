// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// Testing Phone Numbers
test('valid phone number', () => {
    expect(functions.isPhoneNumber('(123)-123-1234')).toBe(true);
});

test('valid phone number', () => {
    expect(functions.isPhoneNumber('123-123-1234')).toBe(true);
});

test('invalid phone number', () => {
    expect(functions.isPhoneNumber('1231234')).toBe(false);
});

test('invalid phone number', () => {
    expect(functions.isPhoneNumber('(123)-123')).toBe(false);
});


//Testing Email addresses
test('valid email address', () => {
    expect(functions.isEmail('helloWorld@gmail.com')).toBe(true);
});

test('valid email address', () => {
    expect(functions.isEmail('1234Testtest@yahoo.com')).toBe(true);
});

test('invalid email address', () => {
    expect(functions.isEmail('1234Testtest@testing')).toBe(false);
});

test('invalid email address', () => {
    expect(functions.isEmail('!#$@test.com')).toBe(false);
});


//Testing Password
test('strong password', () => {
    expect(functions.isStrongPassword('password1234')).toBe(true);
});

test('strong password', () => {
    expect(functions.isStrongPassword('lab8_')).toBe(true);
});

test('weak password', () => {
    expect(functions.isStrongPassword('wow')).toBe(false);
});

test('weak password', () => {
    expect(functions.isStrongPassword('whyisthispasswordtolong')).toBe(false);
});


//Testing date
test('valid date format', () => {
    expect(functions.isDate('12/31/2022')).toBe(true);
});

test('valid date format', () => {
    expect(functions.isDate('1/1/2022')).toBe(true);
});

test('invalid date format', () => {
    expect(functions.isDate('12 / 12 / 22')).toBe(false);
});

test('invalid date format', () => {
    expect(functions.isDate('November 20th, 2022')).toBe(false);
});


//Testing Hex Color
test('valid hex code', () => {
    expect(functions.isHexColor('aef093')).toBe(true);
});

test('valid hex code', () => {
    expect(functions.isHexColor('5e50fa')).toBe(true);
});

test('invalid hex code', () => {
    expect(functions.isHexColor('test')).toBe(false);
});

test('invalid hex code', () => {
    expect(functions.isHexColor('23jk!3')).toBe(false);
});