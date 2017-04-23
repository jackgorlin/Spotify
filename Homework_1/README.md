Quote Book: A scaffolded HTML/CSS assignment
=============================================================

(February 2017.  Written by Duong Vu and Jason Wangsadinata)

In this assignment you will be learning HTML and CSS structure through 
writing code and debugging errors. You will be adding several lines of 
code and fixing several bugs.

We have provided a scaffold for you to start, and also a screenshot of 
what the final product should roughly look like. Feel free to email us 
if there are any questions.

![example](https://github.com/jwangsadinata/comp420_hw1/blob/master/screenshot.png)

Prerequisites
-------------

You will need to be comfortable with the following concepts and skills:

* Basic concepts behind HTML and CSS structure.

* Basic Git usage and how to push your code to GitHub.
 
* "Survival level" Unix command-line skills and facility with an editor
to edit code files.

Task 0 (warm up): Playing with Colors (1 point)
===============================================

**Goals:** Correctly identify the position to add the code and understand 
the steps needed to change the title to a different color.

**What you will do:** Change the color of the title, "Quote Book", 
into any color of your liking. http://www.colorpicker.com/ is a great place to get the HEX code
of any color you like.


Task 1: Images (1 point)
========================
Notice that the image for the plus icon was incorrectly loaded into the site. You will 
need to make the attached image to show up on the website.

**Goals:** Understand how file attachment works in HTML (in this case, using the img tag),
and how to fix the problem.

**What you will do:**  Fix the source of the image, so that it points to the 
correct file.


Task 2: Make Mark More Visible (1 point)
========================================
Typographical emphasis (bold, italic, underline) is a great way to highlight 
the important parts of the text. This task will ask you to emphasize 
the author's name.

**Goals:**  Understand the relation between CSS and HTML code, and how the codes 
are linked to one another.

**What you will do:**  Inside the style tag, there is already a snippet of code that
helps display text in a heavier weight. Figure out what's missing in the HTML and 
utilize the defined properties to highlight the author's name as seen in the example picture.


Task 3: To The Left, To The Left (1 point)
==========================================
Look at the screenshot provided above. You will need to re-position the icon 
so that it is to the left of the texts.

**Goals:**  Understand how CSS positioning works, and how to write the appropriate 
code to position elements in a page.

**What you will do:**  Complete the code in the following selectors provided in the 
starter code:

```
.small-icon {
    /*YOUR CODE GOES HERE*/
}

.quote-group {
    /*YOUR CODE GOES HERE*/
}
```

**Hint:**  You want to use the positioning of the icon that allows text to wrap around it. 
Once you have done this, it's only a stone's throw away.

At this point, you should already have something that looks like the screenshot 
provided. Now, it is time for you to apply what you learn into your own code.


Task 4: Tell Us Who You Are (1 point)
=====================================
Now that you have pretty good grasp of how HTML and CSS works, you will be writing a 
short profile about yourself in HTML/CSS.

**Goals:**  Have sufficient practice with HTML and CSS, and gain confidence 
in writing your own code.

**What you will do:**  Write a basic HTML file, called "task4.html", containing 
at least the following:
- A title containing your name
- An image file
- A link to your Facebook or LinkedIn profile, or any website you like, as a caption to the image
- A list of contact information
- Two short paragraphs describing yourself

Moreover, write a basic stylesheet (this time, put it in a separate .css file) 
to style your HTML page. 3-4 rules should be a good number for this task, but feel free 
to include more as you please.

You might find it helpful to search for ways to accomplish your design goal 
(for example, http://stackexchange.com/ is your one stop for coding questions). 
Be creative and curious. 

Take a screenshot of your work in the browser, and save it as "task4.png".

Submission Instructions
-----------------------
You should already have an access to the repository for this assignment. Push the 
completed index.html, task4.html and task4.png to the repository.