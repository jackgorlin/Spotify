Instagram Knock-Off: A scaffolded Bootstrap assignment
=============================================================

(February 2017.  Written by Duong Vu and Jason Wangsadinata)

In this assignment you will be learning to use the Bootstrap framework by creating an Instagram Knock-Off site. You will be modifying the code given according to the instructions.

We have provided a scaffold for you to start, and also several screenshots of what the final product should roughly look like. Feel free to email us if there are any questions.

![example](https://github.com/jwangsadinata/comp420_hw2/blob/master/screenshots/t2_final.png)

Prerequisites
-------------

You will need to be comfortable with the following concepts and skills:

* Understanding of Bootstrap grid system.

* Basic concepts behind HTML and CSS structure.

* Basic Git usage and how to push your code to GitHub.

* "Survival level" Unix command-line skills and facility with an editor to edit code files.

Assignment 1 - Book Review
==========================

Task 1 - (1 point) DONE
------------------
Using the Bootstrap grid system, add appropriate markups to the HTML document so that the page:

   1. Displays 4 items in a row when in medium or large windows 12/4 = 3

   2. Displays 2 items in a row when in small windows 6

   3. Displays 1 item in a row when in extra-small windows 12

Once you have calculated the appropriate column numbers, it should be relatively straightforward, following the grid documentation here http://getbootstrap.com/css/#grid

Task 2 - (1 point)
------------------
You may notice that the images go out of their columns. Add a class of `img-responsive` to the images, and they automatically resize to avoid overflow. Adding this class to images on responsive websites is often a desirable practice.

Your submission should look like the screenshots below.

![example](https://github.com/jwangsadinata/comp420_hw2/blob/master/screenshots/t1_final2.png)
![example](https://github.com/jwangsadinata/comp420_hw2/blob/master/screenshots/t1_final4.png)


Assignment 2: Insta-time
========================

Task 0 (Warmup) - Modify the usernames (1 point) DONE
------------------------------------------------
There are three users in here whose usernames are `username`, `another.user.1`, and `another.user.2`. That’s a little boring, so find these name occurrences and change them to something you want. You may change the content of the descriptions and comments as well.

Task 1 - Put the thumbnail inside a column (1 point) DONE
----------------------------------------------------
![example](https://github.com/jwangsadinata/comp420_hw2/blob/master/screenshots/t2_01.png)

By default, the thumbnail class will take on the width of its parent, in this case, the .container div. We don’t want it to be so big, so let’s start thinking in grids and put it in a column. The Bootstrap grid contains 12 columns; try fitting the thumbnail inside 6 (on the normal full-width browser). See http://getbootstrap.com/css/#grid for instructions on how to mark this up.
￼
Hint: the keywords `lg`, `md`, `sm`, `xs` in column classes correspond to large, medium, small, extra-small screen width.

Task 2 - Spacing and aligning (1 point) DONE
---------------------------------------

After having the column, you might notice that the post is off-centered. It’s also too close to the top of the window, which looks awkward.
There is a custom.css file included in the folder. Link to it inside `index.html`. This is where you will write rules to modify the look of this Bootstrap thumbnail. Never overwrite the bootstrap CSS directly! Try to match the look of the screenshot below.

![example](https://github.com/jwangsadinata/comp420_hw2/blob/master/screenshots/t2_02.png)

Hint: While using CSS is fine, there’s a better way to center-align the thumbnail so as to respect the grid system. Again, explore the grids documentation at http://getbootstrap.com/css/#grid and see if you can find the optimal solution.

Task 3 - Typography matters (1 point) DONE
-------------------------------------
Without any means of distinction, it’s difficult to recognize the number of likes, usernames, and hashtags. First, try styling these so that they look like the screenshot, and then play with the padding and margin somehow to leave a nice, comfortable whitespace around the post header and details (they should be uniform). You should see something like below. Better already!

![example](https://github.com/jwangsadinata/comp420_hw2/blob/master/screenshots/t2_03.png)

Hint: remember `<span>`?

Task 4 - User input (1 point) DONE
-----------------------------
Something is off in the “Like, Comment, More” section at the bottom. First, the input doesn’t look like the final product yet (not enough width, for example). Second, the two buttons surrounding it are not positioned all the way to the left and right. Try to modify the text input with your custom CSS and find some appropriate Bootstrap helper classes to position the two buttons where they should be.

![example](https://github.com/jwangsadinata/comp420_hw2/blob/master/screenshots/t2_04.png)

Hint: you might want to specify the width of the comment box in percentage (compared to its parent element), so the proportion stays the same on all screens, big or small.

Task 5 - Where are my icons? (1 point) DONE
--------------------------------------
We are almost there! The only thing left to do is replace the word “Like” with a heart icon and “More” with an ellipsis icon. Bootstrap has a built-in icon library Glyphicon, but there’s a larger and better one out there called font-awesome. Basically, font-awesome provides a package of vector- based icons whose quality stays the same regardless of change in size. We already included a folder `font-awesome-4.7.0` in which you can find the CSS file to include in your HTML, though you can download it anytime from http://fontawesome.io/. Dig around the website to see how one can use font-awesome icons (read their documentation and look at examples, for instance) and replace the inner text of your buttons with the icons. A few moments later, your Instagram knock-off should look something like this:

![example](https://github.com/jwangsadinata/comp420_hw2/blob/master/screenshots/t2_05.png)

Task 6 - Are you really done? (1 point)
---------------------------------------
Compare your product with the final screenshot at the top of this README. Notice something missing in the header of the post? That’s right, the timestamp. Now, try to include it and you should have your own complete version of an Instagram post.

Task 7 (Final touch) Adding meaningful interactions (1 point) DONE
--------------------------------------------------------------
On Instagram, you can click on any of the usernames and it will take you to their profile page. A developer’s concern is how to make it clear that something is clickable (interactable in general). One way to do this is to make it so that when you hover on a username, it changes color or font weight or has an underline to it, and the cursor changes to a pointer. Using your custom CSS, implement any such interactivity you think is suitable and fits your design taste.

Task 8 (Bonus) - Including a navigation bar
-------------------------------------------
If you feel like going forward a bit more, try to design your own version of the navigation bar for the Instagram knock-off. Look at the documentation for Bootstrap navbars here http://getbootstrap.com/components/#navbar. You may look at Instagram’s navbar or you may come up with a totally fresh design. If you can do this, you are a whole big step closer to mastering Bootstrap.

Submission Instructions
-----------------------
You should already have an access to the repository for this assignment. Push the completed files to this repository.
