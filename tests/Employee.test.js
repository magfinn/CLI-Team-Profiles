const Employee = require('../lib/Employee');

test('test if new employee creates new object', () => {
  const employee = new Employee();
  expect(employee).toEqual(expect.any(Object));
});

test('test add name', () => {
  const employee = new Employee('Susan');
  expect(employee.name).toBe('Susan');
});

test('test add id', () => {
  const employee = new Employee('Susan', '3333');
  expect(employee.id).toBe('3333');
});

test('test add email', () => {
  const employee = new Employee('Susan', '3333', 'susan333@gmail.com');
  expect(employee.email).toBe('susan333@gmail.com');
});

test('test getName()', () => {
  const employee = new Employee('Susan');
  expect(employee.getName()).toBe('Susan');
});

test('test getId())', () => {
  const employee = new Employee('Susan', '3333');
  expect(employee.getId()).toBe('3333');
});

test('test getEmail()', () => {
  const employee = new Employee('Susan', '3333', 'susan333@gmail.com');
  expect(employee.getEmail()).toBe('susan333@gmail.com');
});

test('test getRole()', () => {
  const employee = new Employee('Susan', '3333', 'susan333@gmail.com');
  expect(employee.getRole()).toBe('Employee');
});
