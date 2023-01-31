var Persons = [
    {
        age: 30,
        name: "Salem",
        occupation: "Engineer"
    },
    {
        age: 26,
        name: "Turkey",
        occupation: "Acountant"
    },
    {
        age: 33,
        name: "ALi",
        occupation: "Programmer"
    },
];
function printPersons(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i].age);
        console.log(arr[i].name);
        console.log(arr[i].occupation);
    }
}
printPersons(Persons);
var admins = [
    {
        age: 50,
        name: "Mohammed",
        specialty: "Teacher"
    },
    {
        age: 30,
        name: "Fahad",
        specialty: "Designer"
    },
    {
        age: 39,
        name: "Mosa",
        specialty: "Doctor"
    },
];
var join = Persons.concat(admins);
console.log(join);
function changeAge(arr, newAge) {
    for (var i = 0; i < arr.length; i++) {
        arr[i].age = newAge;
    }
}
console.log(changeAge(join, 50));
/*function persons(arr: User[]| Admin[])
 {
    for (let i = 0; i < arr.length; i++) {
        if(arr === admins) {
            console.log(arr[i].age);
            console.log(arr[i].name);
            console.log(arr[i].specialty);
      
    }
  }
}


persons(join)*/
