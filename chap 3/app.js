// question 1
let myAge = 15;
alert (`my age is ${myAge} years old`)

// question 2
if (localStorage.getItem('visitCount')) {
    let visitCount = 
    parseInt(localStorage.getItem('visitCount')) + 1;
    localStorage.setItem('visitCount', visitCount);
    alert("You have visited this site " + visitCount + " times");
  } else {
    localStorage.setItem('visitCount', 1);
    alert("You have visited this site 1 time");
  }

//   question 3
let birthYear = 2005;
document.write (`my birth year is ${birthYear} <br> Data type of my declared variable is number`)

// question 4
let visitorName = "john doe";
let quantity = "T-Shirt";
let product = 5;
document.write (`<br>${visitorName} ordered ${product} ${quantity}(s) on XYZ Clothing Store`)
