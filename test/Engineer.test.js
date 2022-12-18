const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');

test('creates an engineer object', () => {
    const engineer = new Engineer('Engineer1');
    expect(typeof(engineer)).toBe('object');
});

test('gets github username', () => {
    const engineer = new Engineer('Manager', '1', 'blee0963@gmail.com', 'bengithub');
    expect(engineer.github).toBe('bengithub');
});

test('getRole() returns Engineer', () => {
    const engineer = new Engineer('Manager1');
    expect(engineer.getRole()).toBe('Engineer');
});