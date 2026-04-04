var name=prompt("Please enter your name:");
var salary = prompt("Please enter your salary:");
var creditCardBill = prompt("Please enter your credit card bill amount:");
var HomeLoanEMI = prompt("Please enter your home loan EMI amount:");
var MutulaFundSavings = prompt("Please enter your mutual fund savings amount:");
var carLoanEMI = prompt("Please enter your car loan EMI amount:");
var totalExpenses = Number(creditCardBill) + Number(HomeLoanEMI) + Number(carLoanEMI);
var totalSavings = Number(salary) - totalExpenses;
console.log("Hello " + name + ", your total savings after expenses is: " + totalSavings);

