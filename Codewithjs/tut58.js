console.log("This is tutorial 58");

// setTimeout = sudhu ekbar cholbe 
// clearTimeout = bar bar repead hobe

function greet(name, byeText) {
    console.log("Hello good morning " + name + " " + byeText);
}
// timeOut = setTimeout(greet, 5000, "Shakil", "take care");
// console.log(timeOut); 
// clearTimeout(timeOut);

// interval = setInterval(greet, 1000, "Shakil", "Good night");
// clearInterval(interval);

// function displayTime() {
//     let time = new Date();
//     console.log(time);
//     document.getElementById('time').innerHTML = time;
// }

setInterval(displayTime, 1000);

function displayTime() {
    let time = new Date();
    console.log(time);
}

setInterval(displayTime, 1000);



