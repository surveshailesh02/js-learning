const employeeinfo = `{
    "name": "Aleix Melon",
    "id": "E00245",
    "role": ["Dev","DBA"],
    "age" : 23,
    "doj": "11-12-2019",
    "Married": false,
    "address": {
        "street": "32, Laham st.",
        "city": "Innsbruck",
        "country": "Austria"
    },
    "reffered-by" : "E0012"
}`
console.log(typeof employeeinfo);
console.log(employeeinfo);
console.log(`======JSON.parse()=========`);
const employee = JSON.parse(employeeinfo);
console.log(typeof employee);
console.log(employee);
 
  
console.log("role →", employee.role[0].toUpperCase());
console.log("last name →", employee.name.split(" ")[1]);
console.log("Joining year of employee →", employee.doj.split("-")[2]);