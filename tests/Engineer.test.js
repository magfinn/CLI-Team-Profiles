const Engineer = require('../lib/Engineer');

test('test new github username', () => {
  const employee = new Engineer(
    'Susan',
    '333',
    'susan333@gmail.com',
    'susan333'
  );
  expect(employee.github).toBe('susan333');
});

test('test getGithub()', () => {
  const employee = new Engineer(
    'Susan',
    '333',
    'susan333@gmail.com',
    'susan333'
  );
  expect(employee.getGithub()).toBe('susan333');
});

test('test getRole()', () => {
  const employee = new Engineer(
    'Susan',
    '333',
    'susan333@gmail.com',
    'susan333'
  );
  expect(employee.getRole()).toBe('Engineer');
});
