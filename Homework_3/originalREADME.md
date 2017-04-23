Back to the Basics - An assignment on JavaScript fundamentals
=============================================================

(February 2017.  Written by Duong Vu and Jason Wangsadinata)

In this assignment you will be learning the fundamentals of JavaScript through reading the provided and writing your own code. You will be writing small statements and functions to complete the assignment.

Prerequisites
-------------

You will need to be comfortable with the following concepts and skills:

* JavaScript syntax, basic datatypes and control flow.

* Thorough understanding of JavaScript objects.

* Basic Git usage and how to push your code to GitHub.

* "Survival level" Unix command-line skills and facility with an editor
to edit code files.

Task 1: But why? (3 points)
==========================

**Goals:** Exposure to the intricacies of JavaScript and understand the reasons behind how JavaScript code work the way it is.

**What you will do:** There will be three parts to this task. Each of the part will require you to run the code and see the output on the JavaScript console.

1. Run the following code, examine the console, state the outputs for each statement and why is that the output?
  ```
  console.log(1 +  "2" + "2");
  console.log(1 +  + "2" + "2");
  console.log(1 +  - "1" + "2");
  console.log(+ "1" +  "1" + "2");
  console.log( "A" - "B" + "2");
  console.log( "A" - "B" + 2);
  ```

2. What will be the output when you execute the following code and why?
  ```
  console.log(false == '0')
  console.log(false === '0')
  ```

3. Before trying it on the console, try to guess what the output should be. Then, try executing the following code and state the output. Why do you think this is the case?
  ```
  console.log(0.1 + 0.2);
  console.log(0.1 + 0.2 == 0.3);
  ```

Save your work in a file called `homework3_task1.md` or `homework3_task1.txt`, whichever you prefer.

Task 2: Syntax, Datatypes and Control Flow (4 points)
====================================================
**Goals:** Understanding with the basic syntax, datatypes and control flow in JavaScript and be comfortable with writing your own code using the javascript constructs.

**What you will do:**  There are four parts to this task. You will be writing some simple functions for each of the part.

1. Using one of the loop constructs we learnt in class, print out the number from 1 - 10. (you can use `console.log(...)` to print out your result).

2. Write the type of the following expressions:
  ```
  "javascript"
  3
  4 + 5.5
  NaN
  true
  []
  {}
  null
  undefined
  ```
  Hint: There is a function called `typeof(...)` that will be very handy for this problem.

3. Create a function that given a number, computes the factorial of that number. (For example: given a number `5`, `factorial(5)` should return the value `25 = 5 * 4 * 3 * 2 * 1`)

    Challenge: You can write this function recursively (recursive function is a function that calls on itself). Write another function (`factorial2(n)`) that implements the factorial function recursively.

    Extra Challenge: Can you write this function in less than 35 characters?

4. Write a function that returns `true` or `false` indicating whether or not a given string is a palindrome. (A palindrome is a sequence of characters which reads the same forward and backward).

    Challenge: Make a function that also works regardless of whether the letter is uppercase or lowercase. See the example below.
  ```
  console.log(isPalindrome("level"));                   // logs 'true'
  console.log(isPalindrome("levels"));                  // logs 'false'
  console.log(isPalindrome("A car, a man, a maraca"));  // logs 'true'
  ```

Save your javascript functions in a file called `homework3_task2.js`.

Task 3: Playing with Objects (8 points)
======================================
**Goals:**  Understand how objects work in JavaScript. Be comfortable with updating, retrieving, deleting, and referencing objects. This is very important, especially in a web development setting.

**What you will do:**  There are one small part two big parts to this task. Each big part will have some small subtasks that you need to do.

1. What is the difference between the codes below? Explain.
  ```
  var a = {}, b = {}, c = {}
  ```
  and
  ```
  var a = b = c = {}
  ```

  Append your answer to this part to `homework3_task1.txt`.

2. Create an object called `student`, that should contain the following properties:
  - `name` (an object containing two properties, `first_name` and `last_name`, both should have string values)
  - `wesID` (this property has integer value)
  - `class_year` (this property has integer value)
  - `email` (this property should have a string value)
  - `majors` (this property should be a string array, containing the list of majors)

  You can initialize it to any appropriate values that you want.

  Then, do the following:

  + Create a copy of the object to a new variable. Name it after your first name. For example, my variable name will be `jason` and I will copy `student` to this variable. Initialize each field after your own credentials.

    Quick check: what will you get when you call `student.email`? Is it the first value you initialize?

  + Create another object called `instructor`, and it should be an array of `student` objects, since both of your instructors are also students. Initialize it to the following.
  ```
  Jason Wangsadinata
  278628
  2017
  jwangsadinat@wesleyan.edu
  Computer Science, Mathematics

  Duong Vu
  330909
  2018
  tvunguyen@wesleyan.edu
  Computer Science, Art Studio
  ```

  Hint: Be careful with the datatypes here.

  Save your work for this part as `homework3_task3.js`.

3. We have provided you a starter file called `homework3_objects.js`. It contains javascript objects from flight data, Facebook API and YouTube API. The subtasks are described in the file, and your objective is to complete the functions appropriately. Use the `return` statement instead of printing it to the console, we have provided you a printing suite to test your code. Save your updated file, and upload it back to the repository.

Task 4: Putting it into practice (5 points)
===========================================
Now that you have pretty good grasp of how JavaScript works, let us do some more problems that are relevant to real-life situation.

**Goals:**  Apply the appropriate data structures/objects to solve problems and understand how code can be used to solve real-life problems. We are also hoping that you can use some of the topics on functional programming in this section.

**What you will do:**  Similar as before, we will have two parts to this task.

1. Write a function that given a string as its input, return an object whose keys are the words and their frequency as the corresponding values.

2. Given a list of band objects, return an array of band names sorted in alphabetical order.

    Bonus: sort the band names in alphabetical order but ignoring any article in the names.

Save your work as `homework3_task4.js`, and upload it to the repository.

Submission Instructions
-----------------------
Upload your solutions, namely `homework3_task1.md` (or `.txt`), `homework3_task2.js`, `homework3_task3.js`, `homework3_task4.js` and the updated `homework3_objects.js` to this repository.
