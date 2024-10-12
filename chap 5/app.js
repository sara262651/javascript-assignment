// question 1
let num1 = 3;
let num2 = 5;
// let num = num1 + num2;

// document.write("sum of " + num1 + " and " + num2 + " is " + num)

//question 2
// let num.s = num2 - num1;

// document.write(`substraction of ${num2} and ${num1} is ${num.s}`)

// let numm = num1 * num2;

// document.write(`multiplication of ${num1} and ${num2} is ${numm}`)

// let numd = num2 / num1;

// document.write(`division of ${num2} and ${num1} is ${numd}`)

// question 3
var myVariable;
document.write(`Value after a Variable declaration is: ${myVariable}`)

 let initialVariable = 5;
document.write(`<br>Initial Value is: ${initialVariable}`)

let increment = initialVariable + 1;
document.write(`<br>Value after increment is: ${increment}`)

let addition = increment + 7;
document.write(`<br>Value after addition is: ${addition}`)

let decrement = addition - 1;
document.write(`<br>Value after decrement is: ${decrement}`)

let remainder = decrement % 3;
document.write(`<br>the remainder is: ${remainder}`) 

//......question 4.........
let tickets = 5;
let ticketPrice = 600;
let totalCost = ticketPrice * 5;
document.write(`<br>Total Cost to buy ${tickets} tickets to a movie is ${totalCost}PKR`)

//......question 5.........
let num = 4;
for(var table = 1; table<= 10; table++){
    let answer = num * table;
    console.log(`${num} x ${table} = ${answer}`)
}

//.......question 6........
let celcius = 29;
let fahrenheit = (celcius * 9 / 5) + 32;
document.write(`<br>${celcius}oC is ${fahrenheit}`)
let fehrenheit2 = 74
let celcius2 = (fehrenheit2 - 32) * 5 / 9;
document.write(`<br>${fehrenheit2}oF is ${celcius2}`)

//......question 7........

let item1 = 650;
document.write(`<br>Price of item 1 is ${item1}`)
let quantity1 = 3;
document.write(`<br>quantity for item 1 is ${quantity1}`)
let totalCost1 = 650 * 3;
let item2 = 100;
document.write(`<br>price of item 2 is ${item2}`)
let quantity2 = 7;
document.write(`<br>quantity of item 2 is ${quantity2}`)
let totalCost2 = 100 * 7;
let shippingCharges = 100;
document.write(`<br>Shipping charges is ${shippingCharges}`)
let totalCostf = totalCost1 + totalCost2 + shippingCharges;
document.write(`<br>Total Cost of your order is ${totalCostf}`)

//.........question 8 ........

let totalMarks = 980;
document.write(`<br>Total Marks: ${totalMarks}`)
let obtainedMarks = 804;
document.write(`<br>Obtained Marks: ${obtainedMarks}`)
let percentAge = obtainedMarks / totalMarks * 100;
document.write(`<br>Percentage: ${percentAge}`)

//.......question 9.........

let usdToPkr = 104.80;
let usdAmount = 10;
let sauToPkr = 28.00;
let sauAmount = 25;
const totalPkr = (usdAmount * usdToPkr) + (sauAmount * sauToPkr);
document.write(`<br>Total currency in PKR: ${totalPkr}`)

//.....question 10.......

let variable = 30;
let expression = 30 + 5 * 10 / 2;
document.write(`<br>answer ${expression}`)

//.....question 11.......

const currentYear = 2016;
document.write(`<br>Your current Year ${currentYear}`)
const birthYear = 1992;
document.write(`<br>your birth year is ${birthYear}`)
let ageThisYear = 23 + 1;
let ageNextYear = 24 + 1;
document.write(`<br>your age is: ${ageThisYear}`)


//.......question 12.......
let radius = 5; 
const pi = 3.142;
let circumference = 2 * pi * radius;
let area = pi * radius * radius;
document.write("<h1>", "The Geometrizer" , "</h1>")
document.write("Radius of a circle: ", radius, "<br>")
document.write("The circumference is: ", circumference, "<br>")
document.write("The area is: ", area)

//.....question 13......

let favSnack = prompt('Enter your favourite snack');
let myAge = prompt('Enter your age');
let maxAge = prompt('Enter your estimated maximum age')
let snacksPerDay = prompt('Enter Amount of snacks per day')
let age = maxAge - myAge;
let answer = age * snacksPerDay;
document.write("<h1>", "The Lifetime Supply Calculator" , "</h1>")
document.write("Favourite Snack: ", favSnack , "<br>")
document.write("Current age: ", myAge , "<br>")
document.write("Estimated Maximum Age: ", maxAge , "<br>")
document.write("Amount of snacks per day: ", snacksPerDay , "<br>")
document.write("You will need ", answer ," ", favSnack, " to last you until the ripe old age of ", maxAge)















