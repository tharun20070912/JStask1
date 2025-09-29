var pin = prompt("Enter your 4-digit PIN:"); //ATM Machine
var balance = 1000; 

if (pin === "1234") {
    var choice = prompt("Choose an option: 1. Withdraw 2. Deposit 3. Check Balance");

    if (choice === "1") {
        var amount = prompt("Enter amount to withdraw:");
        amount = parseFloat(amount);
        if (amount > 0 && amount <= balance) {
            balance = balance - amount;
            alert("Withdrawal successful! New balance: " + balance);
        } else {
            alert("Invalid amount or insufficient funds.");
        }
    } else if (choice === "2") {
        var amount = prompt("Enter amount to deposit:");
        amount = parseFloat(amount);
        if (amount > 0) {
            balance = balance + amount;
            alert("Deposit successful! New balance: " + balance);
        } else {
            alert("Invalid amount.");
        }
    } else if (choice === "3") {
        alert("Your current balance is: " + balance);
    } else {
        alert("Invalid choice.");
    }
} else {
    alert("Incorrect PIN!");
}



//quiz

let score = 0;

let answer1 = prompt("Q1: What is the capital of India?\n1: Chennai\n2: Delhi\n3: Bnegaluru");
switch (answer1) {
    case "2":
        score++;
        break;
}

let answer2 = prompt("Q2: Which planet is known as the Red Planet?\n1: Mars\n2: Venus\n3: Jupiter");
switch (answer2) {
    case "1":
        score++;
       break;
}
let answer3 = prompt("Q3: What is 2 + 2?\n1: 3\n2: 4\n3: 5");
switch (answer3) {
    case "2":
        score++;
        break;
}
alert("Your Final Score: " + score + "/3");



//budget planner

var income = Number(prompt("Enter your monthly income:"));

var rent = Number(prompt("Enter your monthly rent expense:"));
var groceries = Number(prompt("Enter your monthly groceries expense:"));
var transport = Number(prompt("Enter your monthly transport expense:"));
var totalExpenses = rent + groceries + transport;

if (totalExpenses > income) {
    var message = "Overspending";
} else {
    var message = "You are within budget.";
}

var remaining = income - totalExpenses;
var percentSpent = ((totalExpenses / income) * 100);

alert("Total Expenses: " + totalExpenses +
      "\nRemaining Balance: " + remaining +
      "\nPercentage Spent: " + percentSpent + "%" +
      "\nMessage: " + message);



//bus fare
var distance = Number(prompt("Enter distance in km:"));
var transport = prompt("Enter transport type (Bus, Train, Taxi):");
var farePerKm;

switch (transport) {
    case "Bus":
        farePerKm = 3;
        break;
    case "Train":
        farePerKm = 5;
        break;
    case "Taxi":
        farePerKm = 10;
        break;
    default:
        alert("Invalid transport type entered.");
        farePerKm = 0;
}
var totalFare = distance * farePerKm;
alert("Total Fare: " + totalFare);

