console.log("This is tutorial 3");

function greet(name, greettext = "greetings from javascript"){
    console.log(greettext +" "+ name);
    console.log(name + " is a good boy");
}
function sum(a,b,c){
    let d = a + b + c;
    return d;
    // return er por kono code bose na return mane fuction ses
    // console.log("This is tutorial 3");
}

let name = "Shakil";
let name1 = "Faisal";
let name2 = "Swopon";
let name3 = "Ripon";
let greettext = "Good morning";
greet(name, greettext);
greet(name1, greettext);
greet(name2, greettext);
greet(name3);
// let returnval = greet(name3);
// console.log(returnval);
let returnval = sum(1,2,3);
console.log(returnval);
// console.log(name + " is a good boy");
// console.log(name1 + " is a good boy");
// console.log(name2 + " is a good boy");
// console.log(name3 + " is a good boy");