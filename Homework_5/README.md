Currency Converter: Assignment for DOM Manipulation and API
=============================================================

(March 2017.  Written by Duong Vu and Jason Wangsadinata)

In this assignment, you will be making your own currency converter through the use of API. You will learn how to properly use API calls, retrieve the correct fields and reinforce your knowledge on DOM manipulation. This assignment will also allow you to showcase your understanding of all the materials we have covered so far, such as HTML, CSS, Bootstrap and JavaScript.

You will be using the JSON API from [fixer.io](http://fixer.io/), which is a simple yet versatile API for foreign exchange rates and currency conversion. Your task will be to check their documentation, and make the appropriate API calls to their API backend.

For the very minimum, we expect to see a currency conversion for 1 USD to the different currencies listed in [fixer.io](http://fixer.io/). If you are feeling adventurous, you can also allow the user to specify which currency is the base currency (not just USD), and also specifying a feature to convert certain amount of currency to another. This exercise will certainly help you gain a better understanding of JavaScript as well.

This a screenshot of what the minimum submission should roughly look like. By no means you should follow the screenshot exactly. You are welcomed, and even encouraged to develop your own CSS and surprise us with your design for this assignment. Bootstrap is highly encouraged, and feel free to develop any features that you feel will enhance your project. Start early, and please email us if there are any questions.

![example](https://github.com/jwangsadinata/comp420_hw5/blob/master/screenshot.png)

Prerequisites
-------------

You will need to be comfortable with the following concepts and skills:

* Basic concepts behind HTML, CSS structure.

* (Optional) Survival level usage on how Bootstrap works.

* Strong understanding of how JavaScript, especially JavaScript 'objects' works.

* Ability to manipulate DOM elements, and combining JavaScript code with it.

* Create `GET API` requests using either `XMLHttpRequest()` or jquery's `$.ajax`. (or cross-domain JSONP requests if you want to look it up).

* Basic Git and unix command line usage and how to push your code to GitHub.

Checklist
----------

* Create an appropriate HTML elements for the display (base currency, a dropdown for the list of currencies, a button, displaying the value, etc).

* Start writing the .js file, and write the code to submit an API request to the API backend (in this case, [fixer.io](http://fixer.io/)).

* Examine the response that you get back from the request you made. How does the object look like? What items can you use for this assignment?

* Once you familiarize yourself with the structure of the response, try to get the relevant information out of the response. 

  **Hint:** If you are using `XMLHttpRequest()`, you can use `JSON.parse()` to convert the response string to a more familiar JavaScript object.

* Time to make use some of your DOM manipulation knowledge. Initialize variables that allows you to change/modify HTML contents.

* Using JavaScript, create a dropdown list for all the currencies you can compare your base currency with.

  **Hint:** You can create a dropdown using the HTML `<select>` tag, and specify the `<option>`.

* Display the dropdown list to the page.

* Now, create an event listener to the button, so that when you click it, it will show the conversion rate. You will need to retrieve a value from the dropdown.

  **Hint:** You can use `.selectedIndex` to get the index of the value you chose on the dropdown menu. Figure out how this will help you getting the conversion rate.

* Display the conversion rate to the page.

* You should pretty much have a working website at this point, it's time to beautify the look. Write a stylesheet (.css) so that your currency converter will look more presentable.

* After this, feel free to add whatever changes that you feel appropriate to the assignment. Put what you have learnt so far into a good use.

**Here are some ideas on what you can do:**

* (Optional #1) Write a function that allows you to change the base currency to any other currencies in [fixer.io](http://fixer.io/). That way, you have a more flexible options of what different conversion rates you want to examine.

  **Hint:** You can use the list of currencies that you get from your first API call to generate this list of base currencies.

* (Optional #2) Write a function that allows you to convert not just 1 USD to other currencies, but also `x` USD to other currencies, where `x` is a number. This should be a pretty straight multiplication function. However, do not forget to update your HTML so that you allow the users to input a number that you can process.

* (Optional #3) Create a feature to swap the base currencies. For examples, if you are comparing `USD-IDR`, and it gives you `13345`, by pressing a swap button, it will now compare `IDR-USD` and gives you `.00007493`. The calculation for the conversion can be done through a mathematical function in JavaScript (which will be faster) or another API call to [fixer.io](http://fixer.io/).

Submission Instructions
-----------------------
You should already have an access to the repository for this assignment. Push the completed HTML, stylesheets (`.css` files), scripts (`.js` files) and a screenshot to your final currency converter submission to the repository. Have fun.
