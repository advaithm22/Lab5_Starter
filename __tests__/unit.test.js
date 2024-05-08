// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

test('valid phone number', () => {
  expect(isPhoneNumber("(332)401-3423)")).toBe(true);
});

test('valid phone number 2', () => {
  expect(isPhoneNumber("111-123-3456")).toBe(true);
});

test('invalid phone number', () => {
  expect(isPhoneNumber("334013423")).toBe(false);
});

test('invalid phone number 2', () => {
  expect(isPhoneNumber("abcdefhdfger")).toBe(false);
});

test('valid email', () => {
  expect(isEmail("harry@sddvee.com")).toBe(true);
});

test('valid email 2', () => {
  expect(isEmail("gefesfsef212@sesfsofj.com")).toBe(true);
});

test('invalid email', () => {
  expect(isEmail("234234234234")).toBe(false);
});

test('invalid email 2', () => {
  expect(isEmail("2@423423.com234")).toBe(false);
});

test('strong password', () => {
  expect(isStrongPassword("G345_e")).toBe(true);
});

test('strong password 2', () => {
  expect(isStrongPassword("a_ble_3")).toBe(true);
});

test('not strong password', () => {
  expect(isStrongPassword("0fail2")).toBe(false);
});

test('not strong password 2', () => {
  expect(isStrongPassword("gewergrsef3eelgsefs")).toBe(false);
});

test('is date', () => {
  expect(isDate("1/1/2025")).toBe(true);
});

test('is date 2', () => {
  expect(isDate("01/02/2025")).toBe(true);
});

test('is not date', () => {
  expect(isDate("01/1/25")).toBe(false);
});

test('is not date 2', () => {
  expect(isDate("001/01/2025")).toBe(false);
});

test('is hex color', () => {
  expect(isHexColor("FFF")).toBe(true);
});

test('is hex color', () => {
  expect(isHexColor("ABCAAA")).toBe(true);
});

test('is not hex color', () => {
  expect(isHexColor("acdefg")).toBe(false);
});

test('is not hex color', () => {
  expect(isHexColor("eeabc")).toBe(false);
});













