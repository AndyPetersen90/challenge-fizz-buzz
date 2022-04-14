// Write your solution below this line:

let num1 = 1;

for (let i = num1; i <= 50; i++) {
    if ( i % 3 === 0 && i % 5 === 0 ) {
        console.log("Fizzbuzz");
    } else if ( i % 3 === 0) {
        console.log("Fizz");
    } else if ( i % 5 === 0) {
        console.log("Buzz")
    } else if ( i % 3 !== 0 && i % 5 !== 0) {
        console.log(i)
    }
}