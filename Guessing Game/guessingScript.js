function generateRandomNumber() {
    var val = Math.floor(Math.random() * 100);
    return val;
}

var target = generateRandomNumber();
console.log("Target Number: " + target);

// grab the form input
// compare it to the target
// determine whether it's higher lower or right