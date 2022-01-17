const Manager = require('../lib/Manager');

test('test new office number', () => {
  const employee = new Manager('Susan', '333', 'susan333@gmail.com', '123456');
  expect(employee.officeNumber).toBe('123456');
});

test('test getOfficeNumber()', () => {
  const employee = new Manager('Susan', '333', 'susan333@gmail.com', '123456');
  expect(employee.getofficeNumber()).toBe('123456');
});

test('test getRole()', () => {
  const employee = new Manager('Susan', '333', 'susan333@gmail.com', '123456');
  expect(employee.getRole()).toBe('Manager');
});
