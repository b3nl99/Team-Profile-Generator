class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = "Employee";

    }

    getName() {
        return this.name;
    }

    gitId() {
        return this.id;
    }

    gitEmail() {
        return this.email;
    }

    gitRole() {
        return this.title;
    }

}

module.exports = Employee;