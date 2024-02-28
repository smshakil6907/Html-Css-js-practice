let jsonObj = {
    name: "Shakil",
    Channel: "CWS",
    friends: "Swopon",
    Food: "barger"
};
console.log(jsonObj); // Log the JavaScript object
let myjsonstr = JSON.stringify(jsonObj);
console.log(myjsonstr); // Log the JSON string

myjsonstr = myjsonstr.replace('Shakil', 'Saniya');
console.log(myjsonstr); // Log the modified JSON string

newjsonObj = JSON.parse(myjsonstr);
console.log(newjsonObj);