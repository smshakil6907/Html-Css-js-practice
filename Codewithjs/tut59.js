console.log("This is time and date tutorial");

let now = new Date();
console.log(now);

let dt = new Date(1000);
console.log(dt);

// let newDate  = new Date("2029-09-30");
// console.log(newDate);

// let newDate = new Date(year, month, date, hours, minute, second, missiseconds)
let newDate  = new Date(3020, 4, 6, 9, 3, 2, 34);
console.log(newDate);

let yr = newDate.getFullYear();
console.log("The year is ", yr); 

let dat = newDate.getDate();
console.log("The date is ", dat); 

let month = newDate.getMonth();
console.log("The month is ", month); 

let hours = newDate.getHours();
console.log("The hours is ", hours); 

newDate.setDate(39)
console.log(newDate);

setInterval(UpdateTime, 1000);
function UpdateTime(){
    time.innerHtml = newDate();
}