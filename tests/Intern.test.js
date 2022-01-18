const Intern = require('../lib/Intern');

test('test new school', () => {
  const employee = new Intern('Susan', '333', 'susan333@gmail.com', 'UCDavis');
  expect(employee.school).toBe('UCDavis');
});

test('test getSchool()', () => {
  const employee = new Intern('Susan', '333', 'susan333@gmail.com', 'UCDavis');
  expect(employee.getSchool()).toBe('UCDavis');
});

test('test getRole()', () => {
  const employee = new Intern('Susan', '333', 'susan333@gmail.com', 'UCDavis');
  expect(employee.getRole()).toBe('Intern');
});
