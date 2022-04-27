// Total Admnission fees 

let totalAmmount = 0;

for (data of detailsOfStudents) {
    console.log(`Name : ${data.name} Admission Fee : ${data.addmission_fee}`);
    totalAmmount += Number(data.addmission_fee)
}

console.log(`

-----------------------------------------
Total fee                   = ${totalAmmount}

`);







//Find All Female Students 

for (data of detailsOfStudents) {
    if (data.gender == 'female') {
        console.log(`${data.name}, is a ${data.gender} Person`);
    }
}







//Find class wise student result 

for (data of detailsOfStudents) {
    if (data.class === 10) {
        console.log(`Name : ${data.name}, is in class 10`);
    }
}







// Location wise student result
for (data of detailsOfStudents) {
    if (data.location === 'Gulshan') {
        console.log(`The Person "${data.name}" live in ${data.location}`);
    }
}







//find student between 10 - 25 age
detailsOfStudents.sort().forEach ((data) => {
    if (data.age >= 10 && data.age <= 25) {
        console.log(`This is The students Between (10-25) --> Age : ${data.age}`);
    }
})
