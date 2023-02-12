const Employee = require("./lib/employee");

describe*("Employee", () => {
    test("should make an object with name, id and email", () => {
        const newEmp = new Employee("rob", 666, "rob@test.com");
        expect(newEmp).toEqual({
          name: "rob",
          id: 666,
          email: "rob@test.com",
          title: "Employee",
        });
      });
    
      test("can get the employee's name when running getName()?", () => {
        const newEmp = new Employee("rob", 666, "rob@test.com");
        expect(newEmp.getName()).toEqual("rob");
      });
    
      test("should get the employee's id when running getId()?", () => {
        const newEmp = new Employee("rob", 666, "rob@test.com");
        expect(newEmp.getId()).toEqual(666);
      });
    
      test("should get the employee's name when running getEmail()?", () => {
        const newEmp = new Employee("rob", 666, "rob@test.com");
        expect(newEmp.getEmail()).toEqual("rob@test.com");
      });
    
      test("should get the employee's title when running getTitle()?", () => {
        const newEmp = new Employee("rob", 666, "rob@test.com");
        expect(newEmp.getTitle()).toEqual("Employee");
      });
    });