const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test("gets employee's name", () => {
    const employee = new Employee('Employee1');
    expect(employee.getName()).toBe('Employee1');
});

test("gets employee's id", () => {
    const employee = new Employee('Employee1', '1');
    expect(employee.getId()).toBe('1');
});

test("get employee's email", () => {
    const employee = new Employee('Employee1', '1', 'blee0963@gmail.com');
    expect(employee.getEmail()).toBe('blee0963@gmail.com');
});

test("getRole() returns Employee", () => {
    const employee = new Employee('Employee');
    expect(employee.getRole()).toBe('Employee');
});