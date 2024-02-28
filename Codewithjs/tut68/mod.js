console.log("This is mood");

function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum / arr.length;
}

// module.exports = {
//     avg: average,
//     name: "Shakil",
//     repo: "Github"
// };

module.exports.name = "Shakil";
