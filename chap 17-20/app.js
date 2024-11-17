// question 1
// Declare and initialize an empty multidimensional array
// var multiArray = [[], [], []]; // Array of 3 empty arrays


// question 2
// Declare and initialize the multidimensional array (matrix)
// var matrix = [
//     [0, 1, 2, 3],  // First row
//     [1, 0, 1, 2],  // Second row
//     [2, 1, 0, 1]   // Third row
// ];

// // Accessing the matrix elements
// console.log(matrix[0]);  // Output: [0, 1, 2, 3] (first row)
// console.log(matrix[1]);  // Output: [1, 0, 1, 2] (second row)
// console.log(matrix[2]);  // Output: [2, 1, 0, 1] (third row)

// question 3
// Loop to print numbers from 1 to 10
// for (var i = 1; i <= 10; i++) {
//     console.log(i);
// }

// question 4
// Get user input for the multiplication table number and length
// var number = prompt("Enter the number for the multiplication table:");
// var length = prompt("Enter the length of the multiplication table:");

// // Convert inputs to integers
// number = parseInt(number);
// length = parseInt(length);

// // Use a for loop to print the multiplication table
// for (var i = 1; i <= length; i++) {
//     console.log(number + " x " + i + " = " + (number * i));
// }

// question 5
// Declare and initialize the array
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// // Use a for loop to print each item in the array
// for (var i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// question 6
// a. Counting: 1,2,3,4,...,15
// var counting = '';
// for (var i = 1; i <= 15; i++) {
//     counting += i + (i < 15 ? ',' : '');
// }

// // b. Reverse counting: 10,9,8,...,1
// var reverseCounting = '';
// for (var i = 10; i >= 1; i--) {
//     reverseCounting += i + (i > 1 ? ',' : '');
// }

// // c. Even: 0,2,4,...,20
// var even = '';
// for (var i = 0; i <= 20; i += 2) {
//     even += i + (i < 20 ? ',' : '');
// }

// // d. Odd: 1,3,5,...,19
// var odd = '';
// for (var i = 1; i < 20; i += 2) {
//     odd += i + (i < 19 ? ',' : '');
// }

// // e. Series: 2k,4k,6k,...,20k
// var series = '';
// for (var i = 2; i <= 20; i += 2) {
//     series += i + "k" + (i < 20 ? ',' : '');
// }

// // Output all series to the browser console
// console.log("Counting: " + counting);
// console.log("Reverse Counting: " + reverseCounting);
// console.log("Even: " + even);
// console.log("Odd: " + odd);
// console.log("Series: " + series);

// question 7
// Array of available items in the bakery
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// // Greet the user and ask for their order
// var userInput = prompt("Welcome to ABC Bakery, what do you want to order sir or ma'am?");

// // Convert user input to lowercase for case-insensitive comparison
// userInput = userInput.toLowerCase().trim();

// // Check if the item exists in the array
// var foundIndex = A.indexOf(userInput);

// // If the item is found, give feedback
// if (foundIndex !== -1) {
//     alert(userInput + " is available at index " + foundIndex + " in our bakery.");
// } else {
//     // If the item is not found, give feedback
//     alert("Sorry, " + userInput + " is not available in our bakery.");
// }

// question 8
// Given array
// var A = [24, 53, 78, 91, 21];
// console.log(A)

// // Assume the first element is the largest initially
// var largest = A[0];

// // Loop through the array to find the largest number
// for (var i = 1; i < A.length; i++) {
//     if (A[i] > largest) {
//         largest = A[i];  // Update largest if a larger number is found
//     }
// }

// // Display the largest number
// console.log("the largest number in the array is:" , largest)

// question 9
// Given array
// var A = [23, 58, 71, 91, 21];
// console.log(A)

// // Assume the first element is the smallest initially
// var smallest = A[0];

// // Loop through the array to find the smallest number
// for (var i = 1; i < A.length; i++) {
//     if (A[i] < smallest) {
//         smallest = A[i];  // Update smallest if a smaller number is found
//     }
// }

// // Display the smallest number
// console.log("The smallest number in the array is: " + smallest);

// question 10
// Loop through numbers from 1 to 100
// for (var i = 1; i <= 100; i++) {
//     // Check if the number is a multiple of 5
//     if (i % 5 === 0) {
//         console.log(i);  // Print the multiple of 5 to the console
//     }
// }