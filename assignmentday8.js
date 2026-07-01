
let employee = {
    id: 123,
    name: "Seron",
    department: "BIT",
    salary: 10000
}

console.log(employee.id);
console.log(employee.name);
console.log(employee.department);
console.log(employee.salary);

employee.address ="kathmandu";
console.log(employee.address);

employee.salary = 60000;
console.log(employee.salary);

delete employee.department;

console.log("After deleting department key and value");
console.log(employee);