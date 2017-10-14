var jsonEmployees = {
    employees:[
        {"firstName": "Krystian", "lastName": "Dziopa"},
        {"firstName": "Anna", "lastName": "Szapiel"},
        {"firstName": "Piotr", "lastName": "Żmuda"}
    ]
}

console.log(jsonEmployees.employees);
jsonEmployees.employees.forEach(function(element, index) {
            console.log("Element o indeksie " + index + " to: " + element.firstName + " " + element.lastName)
            });