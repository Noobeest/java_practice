// const post = {
//     username: "@Emtiazz",
//     content: "This is my first post",
//     likes: 2400,
//     repost: 45,
//     comments: 20,
//     tags: ["new", "post", "good"]
// }

// console.log(post);


//how to get values from object
// post["content"]
// post.content

// const obj = {
//     1: "a",
//     2: "b",
//     true: "c",
//     null: "d",
//     undefined: "e"

// }
// const student = {
//     name: "Emtiazz",
//     age: 22,
//     cgpa: 3.75,
//     city: "Dhaka",
// };

//changing city
// student.city = "Chittagong";
// student.gender = "Male";

// delete student.city;
// console.log(student);   

//nested object
// const classinfo = {
//     emtiaz: {
//         age: 22,
//         cgpa: 3.75,
//         city: "Dhaka",
//     },
//     sabbir: {

//         age: 22,
//         cgpa: 3.75,
//         city: "Dhaka",
//     },
//     ahmed: {
//         age: 22,
//         cgpa: 3.75,
//         city: "Dhaka",
//     },
// }

//learning Math mathod
// Math.abs(-10)
// Math.pow(2, 3)
// Math.sqrt(16)
// Math.ceil(10.1)
// Math.floor(10.9)
// Math.random()
// Math.floor(Math.random() * 10);

//Creating guess game from what i learned 

// const max = prompt("enter the maximum number");

// const randomNum = Math.floor(Math.random() * max) + 1;

// let guess = prompt("guess the number");

// while (true) {
//     if (guess == "quite") {
//         console.log("You quit!");
//         break;
//     }

//     if (guess == randomNum) {
//         console.log("You guessed it!");
//         break;
//     }
//     else if (guess < randomNum) {
//         guess = prompt("Too low! Try again!");

//     }
//     else if (guess > randomNum) {
//         guess = prompt("Too high! Try again!");

//     }


// }


//Java part-6 (function)
// function hello() {
//     console.log("HELLO!")
// }

// hello();

// function printName() {
//     console.log("Emtiaz Siddique")
// }

// // printName();

// function print1to5() {
//     for (let i = 1; i <= 5; i++) {
//         console.log(i);
//     }
// }

// function isAdult() {
//     let age = 13;
//     if (age >= 18) {
//         console.log("Adult");
//     }
//     else {
//         console.log("Not Adult");
//     }
// }
// isAdult();
// print1to5();

// function poem() {
//     console.log("Twinkle twinkle little star,");
//     console.log("How I wonder what you are,");
//     console.log("Up above the world so high,");
//     console.log("Like a diamond in the sky.");
// }


// poem();


// function rollDice() {
//     let randomNum = Math.floor(Math.random() * 6) + 1;
//     console.log(`You rolled a ${randomNum}`);
// }

// rollDice();
// rollDice();
// rollDice();
// rollDice();
// rollDice();
// rollDice();

// function printName(name) {
//     console.log(name);
// }

// let name = prompt("Enter your name");
// printName(name);

// function sum(a, b) {
//     console.log(a + b);
// }
// sum(1, 2);

//practice function (print avg of 3 numbers)

// function avg(x, y, z) {
//     avg = (x + y + z) / 3;
//     console.log(`The average of ${x}, ${y}, and ${z} is ${avg}`);
// }

// avg(23, 12, 45);

// function printTable(n) {
//     for (let i = 1; i <= 10; i++)
//         console.log(n + " * " + i + " = " + n * i)
// }
// printTable(5)

// function numberOfn(n) {
//     sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }

//     return sum;
// }
// console.log(numberOfn(1000
// ));

let str = ["hi ", "Hellow ", "Bye"];

function concate(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        result += str[i];

    }
    return result;
}
console.log(concate(str));