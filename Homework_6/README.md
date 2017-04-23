Mini Budget Sheet: Using Local Storage and Event Delegation
===========================================================
(April 2017. Written by Duong Vu and Jason Wangsadinata)

In this assignment you will use the built-in Local Storage to persist data beyond a window session, as well as the technique of event delegation to handle event listeners in cases where the 'listening' elements are yet to be present when the page loads. You will also put your understanding of Javascript DOM interaction and Bootstrap to use.

This task should feel very similar to what we have done in class with the to-do list. Please go through the in-class code and make sure you understand it thoroughly before proceeding.

Prerequisites
-------------
You will need to be comfortable with the following concepts and skills:

* JavaScript syntax, basic datatypes and control flow.

* Thorough understanding of JavaScript DOM Interaction.

* Basic HTML and CSS.

* Bootstrap

* Basic Git usage and how to push your code to GitHub.

* "Survival level" Unix command-line skills and facility with an editor
to edit code files.

The Task
========

You are given a budget sheet that can contain many budget items. A form at the bottom of the page is used to add a new budget item to the sheet with a name and an initial amount of money. Each item inside the sheet, in addition to displaying its name and current amount of money, has an input field that allows you to deduct a certain amount of money from it.

The references to important DOM elements are already set up for you.

Task 1: A trip to the storage (2 points)
----------------------------------------

**What you will do**: Implement the two functions `getItemsFromStorage` and `saveItemsToStorage`. The former will help you retrieve information about all the budget items, while the latter will save all the existing budget items to storage. Recall, the functions `JSON.parse` and `JSON.stringify` will come in handy.

Task 2: The budget item object (2 point)
----------------------------------------

As already specified, each item will have a name and a certain amount of money. So, the best way to represent it is with a Javascript object.

**What you will do**: Finish the `generateItemObject` function. It should take in two arguments `name` and `money`, and return an object which contains those values.

Task 3: All the wealth we cannot see (4 points)
-----------------------------------------------

As usual, we need a way to display the information about the budget items (in this case, stored all in an array), so let's do that.

**What you will do**: Finish the `render` function, which takes in two arguments `displayDiv` and `items`. Your goal is to display all the items in this `items` array inside the given `displayDiv`, in a fashion similar to how the sample items are displayed in the current HTML. To test, fill your array with some dummy items and uncomment the last line of code.

Task 4: Keep saving up on more! (6 points)
------------------------------------------

Now, let's actually start budgeting on something. Instead of hard-coding the array with items, use the form to add a new budget item on the go.

**What you will do**: Implement the `addItem` function. Given a name and an initial amount of money, add a new budget item to the all-important `budgetItems` array and save the changes to storage. Then, finish the function given to `addItemBtn.addEventListener`, so that when the button is clicked, grab information from the relevant fields and use that to construct a new budget item. The fields should be cleared after submission.

Task 5: What did you spend on? (6 points)
-----------------------------------------

**What you will do**: The only thing left to do is record the spendings in each category. Implement the `deduct` function, which, given an index into the `budgetItems` array, deduct a certain amount of money from the corresponding item. Save any changes to storage. Then, finish the function given to `budgetSheet.addEventListener`, so that the input field and button for each item will work together to allow you to deduct money from it.

Bonus tasks (1 point each)
--------------------------

Here are some suggestions for improving the app:

* Personalize the budget sheet with your own design

* Allow users to add money to the budget items

* Allow users to delete some budget items

* Keep track of how much money overall has been spent

Think of other things you could do as well, and report each new feature you add in a file. Name it `new_features.txt`.