/*
Author: Thomas Weir
Title: JavaScript Homework 1
Data: 2021-02-21
*/
let firstName = prompt('Enter your first name.');
let lastName = prompt ('Enter your last name.');
if (firstName == '')
{
    throw('Invalid name');
}
if (lastName == '')
{
    throw('Invalid name');
}
let customerType = prompt('What type of customer are you?');
if (customerType == '')
{
    throw('Invalid name');
}
let invoiceAmount = prompt('What is your invoice amount?');
if (invoiceAmount == 0)
{
    throw('Invalid amount');
}
let discountPercentage;
if ((customerType == 'R' || customerType == 'r') && invoiceAmount >= 250)
{
    discountPercentage = 20;
}
else if ((customerType == 'R' || customerType == 'r') && (invoiceAmount >= 100 && invoiceAmount <= 250))
{
    discountPercentage = 10;
}
else if ((customerType == 'R' || customerType == 'r') && invoiceAmount < 100)
{
    discountPercentage = 0;
}
else if ((customerType == 'C' || customerType == 'c') && invoiceAmount >= 250)
{
    discountPercentage = 30;
}
else if ((customerType == 'C' || customerType == 'c') && invoiceAmount <= 250)
{
    discountPercentage = 20;
}
else
{
    discountPercentage = 0;
}
let discountAmt = invoiceAmount * (dicountPercentage / 100);
let total = invoiceAmount - discountAmount;