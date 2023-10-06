// Chapter 26 - 30 (Q1)

// var userInput = prompt("Enter a positive number:");
// var number = parseFloat(userInput);

// if (isNaN(number) || number <= 0) {
//     console.log("Invalid input. Please enter a positive number.");
// } else {
//     var roundValue = Math.round(number);
//     var floorValue = Math.floor(number);
//     var ceilValue = Math.ceil(number);

//     console.log("Number: " + number);
//     console.log("Round off value: " + roundValue);
//     console.log("Floor value: " + floorValue);
//     console.log("Ceil value: " + ceilValue);
// }

// ----------------------------------------- //

// Chapter 26 - 30 (Q2)

// var userInput = prompt("Enter a negative floating-point number:");
// var number = parseFloat(userInput);

// if (isNaN(number) || number >= 0) {
//     console.log("Invalid input. Please enter a negative floating-point number.");
// } else {
//     // Calculate round, floor, and ceil values
//     var roundValue = Math.round(number);
//     var floorValue = Math.floor(number);
//     var ceilValue = Math.ceil(number);

//     // Display the results in the browser
//     console.log("Number: " + number);
//     console.log("Round off value: " + roundValue);
//     console.log("Floor value: " + floorValue);
//     console.log("Ceil value: " + ceilValue);
// }

// ----------------------------------------- //

// Chapter 26 - 30 (Q3)

// var userInput = prompt("Enter a number:");
// var number = parseFloat(userInput);

// if (isNaN(number)) {
//     console.log("Invalid input. Please enter a valid number.");
// } else {
//     var absoluteValue = Math.abs(number);

//     // Display the absolute value in the browser
//     console.log("Absolute value of " + number + " is " + absoluteValue);
// }

// ----------------------------------------- //

// Chapter 26 - 30 (Q4)

// var diceValue = Math.floor(Math.random() * 4) + 1;

// console.log("Random dice value: " + diceValue);

// var diceValue = Math.floor(Math.random() * 6) + 1;

// console.log("Random dice value: " + diceValue);

// ----------------------------------------- //

// Chapter 26 - 30 (Q5)

// var randomNum = Math.floor(Math.random() * 2) + 1;
// var coinValue = (randomNum === 1) ? "Heads" : "Tails";

// // Display the random coin value in the browser
// console.log("Random coin value: " + coinValue);

// ----------------------------------------- //

// Chapter 26 - 30 (Q6)

// var randomNumber = Math.floor(Math.random() * 100) + 1;

// console.log("Random number between 1 and 100: " + randomNumber);

// ----------------------------------------- //

// Chapter 26 - 30 (Q7)

// var userInput = prompt("Enter your weight:");
// var weight = parseFloat(userInput.replace(/[^\d.]/g, ''));

// if (!isNaN(weight)) {
//     console.log("The weight of the user is " + weight + " kilograms.");
// } else {
//     console.log("Invalid input. Please enter a valid weight.");
// }

// ----------------------------------------- //

// Chapter 26 - 30 (Q8)

// var secretNumber = Math.floor(Math.random() * 10) + 1;
// var userGuess = prompt("Guess the secret number between 1 and 10:");

// userGuess = parseInt(userGuess);
// if (userGuess === secretNumber) {
//     console.log("Congratulations! You guessed the secret number: " + secretNumber);
// } else {
//     console.log("Sorry, the secret number was: " + secretNumber + ". Try again!");
// }


// ----------------------------------------- //

// Chapter 31 - 34 (Q1)

// var currentDateTime = new Date();
// var formattedDateTime = "Current Date and Time: " + currentDateTime;

// document.write(formattedDateTime);

// ----------------------------------------- //

// Chapter 31 - 34 (Q2)

// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var currentMonthIndex = new Date().getMonth();

// var currentMonthName = months[currentMonthIndex];

// alert("Current month: " + currentMonthName);

// ----------------------------------------- //

// Chapter 31 - 34 (Q3)

// var days = ["Sunday", "Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var currentDayIndex = new Date().getDay();
// var currentDayAbbreviation = days[currentDayIndex];

// alert("Current day: " + currentDayAbbreviation);

// ----------------------------------------- //

// Chapter 31 - 34 (Q4)

// var currentDayIndex = new Date().getDay();

// if (currentDayIndex === 0 || currentDayIndex === 6) {
//     alert("It's Fun day!");
// } else {
//     alert("It's not Fun day. Back to work!");
// }

// ----------------------------------------- //

// Chapter 31 - 34 (Q5)

// var currentDate = new Date().getDate();

// if (currentDate < 16) {
//     alert("First fifteen days of the month");
// } else {
//     alert("Last days of the month");
// }

// ----------------------------------------- //

// Chapter 31 - 34 (Q6)

// var currentDate = new Date();
// var elapsedMilliseconds = currentDate.getTime();
// var elapsedMinutes = elapsedMilliseconds / (1000 * 60);

// console.log("Current Date: " + currentDate);
// console.log("Elapsed milliseconds since January 1, 1970: " + elapsedMilliseconds);
// console.log("Elapsed minutes since January 1, 1970: " + elapsedMinutes);

// ----------------------------------------- //

// Chapter 31 - 34 (Q7)

// var currentHours = new Date().getHours();

// if (currentHours < 12) {
//     alert("It's AM");
// } else {
//     alert("It's PM");
// }

// ----------------------------------------- //

// Chapter 31 - 34 (Q8)

// var laterDate = new Date(2020, 11, 31);

// console.log("Later Date: " + laterDate);

// ----------------------------------------- //

// Chapter 31 - 34 (Q9)

// var ramadanStartDate = new Date(2015, 5, 18);
// var currentDate = new Date();
// var timeDifference = currentDate - ramadanStartDate;

// var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

// alert(daysPassed + " Number of days passed since: 1st Ramadan, 2015 ");

// ----------------------------------------- //

// Chapter 31 - 34 (Q10)

// var referenceDate = new Date("January 1, 2015");
// var beginningOf2015 = new Date("January 1, 2015");
// var timeDifferenceMilliseconds = referenceDate - beginningOf2015;
// var secondsElapsed = Math.floor(timeDifferenceMilliseconds / 1000);

// document.write("Seconds elapsed between the reference date and the beginning of 2015: " + secondsElapsed + " seconds");

// ----------------------------------------- //

// Chapter 31 - 34 (Q11)

// var currentDate = new Date();
// var currentHours = currentDate.getHours();

// currentDate.setHours(currentHours + 1);

// document.write("Original Date and Time: " + new Date() + "<br>");
// document.write("Modified Date and Time (an hour ahead): " + currentDate);

// ----------------------------------------- //

// Chapter 31 - 34 (Q12)

// var currentDate = new Date();

// currentDate.setFullYear(currentDate.getFullYear() - 100);

// alert("Date 100 years back: " + currentDate);

// ----------------------------------------- //

// Chapter 31 - 34 (Q13)

// var userAge = prompt("Enter your age:");
// var currentYear = new Date().getFullYear();
// var birthYear = currentYear - parseInt(userAge);

// document.write("Your age is: " + userAge + " years old.<br>");
// document.write("Your Birth year is: " + birthYear);

// ----------------------------------------- //

// Chapter 31 - 34 (Q14)

// Prompt the user for customer details
// var customerName = prompt("Enter Customer Name:");
// var currentMonth = prompt("Enter Current Month:");
// var numberOfUnits = parseFloat(prompt("Enter Number of Units Consumed:"));
// var chargesPerUnit = parseFloat(prompt("Enter Charges per Unit:"));
// var latePaymentSurchargePercentage = parseFloat(prompt("Enter Late Payment Surcharge Percentage:"));

// var netAmountPayable = numberOfUnits * chargesPerUnit;

// var latePaymentSurcharge = (latePaymentSurchargePercentage / 100) * netAmountPayable;

// var grossAmountPayable = netAmountPayable + latePaymentSurcharge;

// netAmountPayable = netAmountPayable.toFixed(2);
// latePaymentSurcharge = latePaymentSurcharge.toFixed(2);
// grossAmountPayable = grossAmountPayable.toFixed(2);

// document.write("<h2>K-Electric Bill</h2>");
// document.write("<p><strong>Customer Name:</strong> " + customerName + "</p>");
// document.write("<p><strong>Current Month:</strong> " + currentMonth + "</p>");
// document.write("<p><strong>Number of Units:</strong> " + numberOfUnits + "</p>");
// document.write("<p><strong>Charges per Unit:</strong> $" + chargesPerUnit + "</p>");
// document.write("<p><strong>Net Amount Payable (within Due Date):</strong> $" + netAmountPayable + "</p>");
// document.write("<p><strong>Late Payment Surcharge:</strong> $" + latePaymentSurcharge + "</p>");
// document.write("<p><strong>Gross Amount Payable (after Due Date):</strong> $" + grossAmountPayable + "</p>");
