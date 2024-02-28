console.log("This is tutorial 55");

//  let i = 0;
//  for (i = 0; i<3; i++); {
//      console.log(i);
//  }

let friends = ["faisal", "swopon", "mijan", "ripon"];
// for (let index = 0; index < friends.length; index++) {
//     console.log("Hello friends, " + friends[index]);
    
// }
// friends.forEach(function f(element){
//     console.log("Hello friends, " + element + " to modern javascript");
// });

// for (element of friends){
//     console.log("Hello friends, " + element + " to modern javascript");
// }

let employee = {
    name: "Shakil",
    salary: 2,
    channel: "cws"
}
for(key in employee){
    console.log(`The ${key} of employee is ${employee[key]}`);
}
let i = 0;
while (i < 4) {
    console.log(`${i} is less than 4`);
    i++;
}
let j = 34;
do{
    console.log(`${j} is less than 4 and we are inside do while loop`);
    j++;
}while(j<4);


