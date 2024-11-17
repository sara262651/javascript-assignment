// question 1

// let studentNames = [];
// console.log(studentNames);

// question 2

// let studentName = new Array();
// console.log(studentName);

// question 3

// let stringsArray = ["Hello", "World"];
// console.log (stringsArray)

// question 4

// let numbersArray = [1, 2, 3, 4, 5];
// console.log (numbersArray)

// question 5

// let booleanArray = [true, false, true, false];
// console.log (booleanArray)

// question 6

// let mixedArray = [42, "Hello", true, { name: "Sara" }];

// question 7

        // Declare and initialize the array with qualifications
        // const qualifications = [
        //     " 1) SSC (Secondary School Certificate)",
        //     " 2) HSC (Higher Secondary Certificate)",
        //     " 3) BSc (Bachelor of Science)",
        //     " 4) BS (Bachelor of Science/Arts)",
        //     " 5) BCom (Bachelor of Commerce)",
        //     " 6) MS (Master of Science)",
        //     " 7) M.Phil (Master of Philosophy)"
        // ];

        // Get the element where the qualifications will be displayed
        // let qualificationsDiv = document.getElementById('qualifications');

        // Loop through the qualifications array and display each item
        // qualifications.forEach(function(qualification) {
        //     qualificationsDiv.innerHTML += "<p>" + qualification + "</p>";
        // });

        // question 8

        // Declare and initialize the array of student names
        // const studentNames = ["Alice", "Bob", "Charlie"];
        
        // // Declare and initialize the array of student scores (out of 500)
        // const studentScores = [450, 380, 420];

        // // Total marks for each student
        // const totalMarks = 500;

        // // Loop through the arrays and calculate percentage for each student
        // for (let i = 0; i < studentNames.length; i++) {
        //     let name = studentNames[i];
        //     let score = studentScores[i];
        //     let percentage = (score / totalMarks) * 100; // Calculate percentage

        //     // Display the student's name, score, and percentage
        //     document.write(`<p><strong>${name}</strong>: Score = ${score} / ${totalMarks}, Percentage = ${percentage.toFixed(2)}%</p>`);
        // }

        // question 9

        // Initialize the array with color names
       // Initialize the array with color names
        // let colors = ["Red", "Blue", "Green", "Yellow", "Purple"];

        // // Function to display the array in the browser
        // function displayArray() {
        //     document.getElementById("colorArrayDisplay").innerHTML = "<p>Updated Array: " + colors.join(", ") + "</p>";
        // }

        // // Display the initial array
        // displayArray();

        // // (a) Ask user to add a color to the beginning of the array
        // let newColorAtBeginning = prompt("Enter a color to add to the beginning of the array:");
        // if (newColorAtBeginning) {
        //     colors.unshift(newColorAtBeginning);
        // }
        // displayArray();

        // // (b) Ask user to add a color to the end of the array
        // let newColorAtEnd = prompt("Enter a color to add to the end of the array:");
        // if (newColorAtEnd) {
        //     colors.push(newColorAtEnd);
        // }
        // displayArray();

        // // (c) Add two more colors to the beginning of the array
        // colors.unshift("Orange", "Pink");
        // displayArray();

        // // (d) Delete the first color in the array
        // colors.shift();
        // displayArray();

        // // (e) Delete the last color in the array
        // colors.pop();
        // displayArray();

        // // (f) Ask the user for an index and a color to add at that position
        // let index = prompt("At which index would you like to add a color?");
        // let colorName = prompt("Enter the color name you want to add at that index:");
        // if (index !== null && colorName !== null) {
        //     index = parseInt(index);
        //     if (!isNaN(index) && index >= 0 && index <= colors.length) {
        //         colors.splice(index, 0, colorName);  // Adds the color at the specified index
        //     } else {
        //         alert("Invalid index!");
        //     }
        // }
        // displayArray();

        // // (g) Ask the user at which index they want to delete color(s) and how many to delete
        // let deleteIndex = prompt("At which index would you like to delete color(s)?");
        // let deleteCount = prompt("How many colors would you like to delete?");
        // if (deleteIndex !== null && deleteCount !== null) {
        //     deleteIndex = parseInt(deleteIndex);
        //     deleteCount = parseInt(deleteCount);
        //     if (!isNaN(deleteIndex) && !isNaN(deleteCount) && deleteIndex >= 0 && deleteCount > 0) {
        //         colors.splice(deleteIndex, deleteCount);  // Removes the specified number of colors from the index
        //     } else {
        //         alert("Invalid input for index or number of deletions.");
        //     }
        // }
        // displayArray();

        // question 10

        // Declare and initialize the array with student scores
        // let studentScores = [89, 45, 72, 56, 99, 65, 80];

        // // Sort the array in ascending order using the sort() method
        // studentScores.sort(function(a, b) {
        //     return a - b; // Sorting in ascending order
        // });

        // // Display the sorted array of student scores
        // document.getElementById("sortedScores").innerHTML = "<p>Sorted Scores: " + studentScores.join(", ") + "</p>";

        // question 11

        // Initialize the cities array with city names
// const cities = ["Karachi", "Lahore", "Multan", "Islamabad", "Faisalabad", "Peshawar", "Sialkot", "rawalpindi"];

// console.log("cities:", cities)

// // Initialize the selectedCities array to hold selected cities
// let selectedCities = [];

// // Copy the first 3 cities from the cities array to selectedCities array
// selectedCities = cities.slice(0, 3);

// // Print the selected cities
// console.log("Selected Cities:", selectedCities);

// question 12

// Given array
// var arr = ["This", "is", "my", "cat"];
// console.log("array:" , arr)

// // Use the join() method to combine the array elements into a single string
// var result = arr.join(" "); // The space inside the join() specifies the separator

// // Print the resulting string
// console.log(result);

// question 13

// Initialize an empty array to represent the queue (FIFO)
// var devices = [];

// // Store values (enqueue) one by one
// devices.push("keyboard");
// devices.push("mouse");
// devices.push("printer");
// devices.push("monitor");
// console.log("devices: keyboard, mouse, printer, monitor")

// // Access the values in the order they were stored (FIFO - dequeue)
// console.log("out:", devices.shift()); // keyboard
// console.log("out:", devices.shift()); // mouse
// console.log("out:", devices.shift()); // printer
// console.log("out:", devices.shift()); // monitor

// question 14

// Initialize an empty array to represent the stack (LIFO)
// var devices = [];

// // Store values (push) one by one
// devices.push("keyboard");
// devices.push("mouse");
// devices.push("printer");
// devices.push("monitor");
// console.log("devices: keyboard, mouse, printer, monitor")

// // Access the values in reverse order (LIFO - pop)
// console.log("out:", devices.pop()); // monitor
// console.log("out:", devices.pop()); // printer
// console.log("out:", devices.pop()); // mouse
// console.log("out:", devices.pop()); // keyboard

// question 15

 // Array of phone manufacturers
//  var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

//  // Begin the <select> tag for the dropdown menu
//  document.write('<select name="manufacturers" id="manufacturers">');

//  // Loop through the array and create an <option> for each manufacturer
//  for (var i = 0; i < manufacturers.length; i++) {
//      document.write('<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>');
//  }

//  // Close the <select> tag
//  document.write('</select>');


