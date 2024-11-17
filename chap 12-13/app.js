// question 1

// Input character
// let input = 'A'; // Change this to test different characters

// // Check if the input is valid (single character)
// if (typeof input === 'string' && input.length === 1) {
//     const charCode = input.charCodeAt(0);

//     if (charCode >= 48 && charCode <= 57) {
//         console.log('The input is a number.');
//     } else if (charCode >= 65 && charCode <= 90) {
//         console.log('The input is an uppercase letter.');
//     } else if (charCode >= 97 && charCode <= 122) {
//         console.log('The input is a lowercase letter.');
//     } else {
//         console.log('The input is not a number or letter.');
//     }
// } else {
//     console.log('Invalid input. Please provide a single character.');
// }

// question 2
// let num1 = parseInt(prompt("Enter the first integer: "));
// let num2 = parseInt(prompt("Enter the second integer: "));

// if (num1 > num2) {
//     console.log(num1 + " is larger.");
// } else if (num1 < num2) {
//     console.log(num2 + " is larger.");
// } else {
//     console.log("Both numbers are equal.");
// }

// question 3
// let number = parseFloat(prompt("Enter a number: "));

// if (number > 0) {
//     console.log("The number is positive.");
// } else if (number < 0) {
//     console.log("The number is negative.");
// } else {
//     console.log("The number is zero.");
// }

// question 4
// let char = prompt("Enter a character: ");

// // Convert the character to lowercase to handle both uppercase and lowercase inputs
// char = char.toLowerCase();

// // Check if the character is a vowel
// if (char.length === 1 && /[a-z]/.test(char)) {
//     if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//         console.log(true);  // It is a vowel
//     } else {
//         console.log(false); // It is not a vowel
//     }
// } else {
//     console.log("Please enter a single alphabetic character.");
// }

// question 5

// (a) Store the correct password in a variable
// let correctPassword = "mySecret123"; // Change this to the desired password

// // (b) Ask the user to enter their password
// let enteredPassword = prompt("Please enter your password:");

// // (c) Validate the two passwords:
// if (enteredPassword === null || enteredPassword === "") {
//     // (1) Check if user has entered a password
//     console.log("Please enter your password.");
// } else if (enteredPassword === correctPassword) {
//     // (2) Check if both passwords are the same
//     console.log("Correct! The password you entered matches the original password.");
// } else {
//     // If passwords don't match
//     console.log("Incorrect password.");
// }

// question 6

// var greetings;
// var hour = 13; // You can change this value to test

// if (hour < 18) {
//     greetings = "Good day!";
// } else {
//     greetings = "Good evening!";
// }

// console.log(greetings);

// question 7

// // Ask the user to input time in 24-hour format (like 1900 for 7:00 PM)
// var time = prompt("Enter the time in 24-hour format (e.g., 1900 for 7:00 PM):");

// // Convert the input to an integer (in case the user enters a string)
// time = parseInt(time);

// var greeting;

// if (time >= 0 && time < 1200) {
//     // Morning (00:00 - 11:59)
//     greeting = "Good morning!";
// } else if (time >= 1200 && time < 1700) {
//     // Afternoon (12:00 - 16:59)
//     greeting = "Good afternoon!";
// } else if (time >= 1700 && time < 2100) {
//     // Evening (17:00 - 20:59)
//     greeting = "Good evening!";
// } else if (time >= 2100 && time <= 2359) {
//     // Night (21:00 - 23:59)
//     greeting = "Good night!";
// } else {
//     // Invalid time input
//     greeting = "Invalid time! Please enter time in 24-hour format (0000 - 2359).";
// }

// console.log(greeting);


