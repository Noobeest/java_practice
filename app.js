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

const max = prompt("enter the maximum number");

const randomNum = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number");

while (true) {
    if (guess == "quite") {
        console.log("You quit!");
        break;
    }

    if (guess == randomNum) {
        console.log("You guessed it!");
        break;
    }
    else if (guess < randomNum) {
        guess = prompt("Too low! Try again!");

    }
    else if (guess > randomNum) {
        guess = prompt("Too high! Try again!");

    }


}
