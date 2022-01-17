const Intern = require('../lib/Intern');

test('test new school', () => {
  const employee = new Intern('Susan', '333', 'susan333@gmail.com', 'UC Davis');
  expect(employee.officeNumber).toBe('UC Davis');
});

test('test getSchool()', () => {
  const employee = new Intern('Susan', '333', 'susan333@gmail.com', 'UC Davis');
  expect(employee.getSchool()).toBe('UC Davis');
});

test('test getRole()', () => {
  const employee = new Intern('Susan', '333', 'susan333@gmail.com', 'UC Davis');
  expect(employee.getRole()).toBe('Intern');
});
