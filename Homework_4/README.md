JS Drumming 101 - Understanding DOM Interaction
=============================================================

(February 2017.  Written by Duong Vu and Jason Wangsadinata)

In this assignment you will be learning how JavaScript is used in the Document Object Model (DOM), to create a more interactive website. You will be asked to read the existing template provided and write your own code.

Prerequisites
-------------

You will need to be comfortable with the following concepts and skills:

* JavaScript syntax, basic datatypes and control flow.

* Thorough understanding of JavaScript DOM Interaction.

* Basic HTML and CSS.

* Basic Git usage and how to push your code to GitHub.

* "Survival level" Unix command-line skills and facility with an editor
to edit code files.

Part 1: Tick Goes the Timer
===========================

In this part of the homework, you will learn how to make a timer from scratch. It will help better familiarize you with Javascript DOM interaction and reinforce your grasp on various functions and how they can work in a unified manner. You will also learn how to schedule a task in Javascript.

**Important**: Do NOT modify the HTML file unless it is for styling purposes. The script should be written in the provided JavaScript file.

Task 1: Readable To The Second (1 point) DONE
----------------------------------------

While it is useful for us developers to have the total time remaining stored in seconds, nobody'd probably use a timer that says "5491 seconds left".

**What you will do**: Write a function that converts a given number of seconds to a user-friendly format. Instead of 5491 seconds, return `"01:31:31"`.

Task 2: Where's my display? (1 point)
-------------------------------------

You might have noticed that there is nothing displayed in the browser window except for the three buttons. Wouldn't it be nice to actually see how much time we have left?

**What you will do**: Write a function that, given a "location" on the screen and a number of seconds, display a readable time string at that location. For example, if the given location is a `div` (call it `displayDiv`) in the middle of the screen, after calling the function with `(displayDiv, 62)`, we will see `00:01:02` displayed where the `div` is.

Task 3: Like clockwork (7 points)
---------------------------------

At this point, all we need to do is to actually make the timer run. Although conceptually this may seem to be an easy task, coding it up might require some more careful planning.

**What you will do**: All the buttons are already there for you. Write functions that help them perform what they are meant to. The comments in the script provide more detailed specs. Some points you might want to consider:
	1. There is a JavaScript function called `setInterval` you might find useful. With `setInterval`, you can tell your script to repeatedly do something according to schedule. Read up about it and some functions related to intervals to see how they can work together.
	2. Possible pitfalls, depending on how your timer is coded:
		* Try pressing start multiple times in a row.
		* Try pressing pause or reset, then resume or start again.
		* See what happens when the timer reaches 0?

Task 4: Design matters (1 point)
--------------------------------

Now that your timer is working, let's make it more presentable.

**What you will do**: Modify the provided CSS file to style your timer. Make it yours, be creative!


Part 2: JS Drumming 101
=======================

In this second part of the homework, you will make your own Javascript drumkit. Pressing any key in the row ASDFGHJKL will play a pre-assigned drum sound and highlight the corresponding virtual key on the screen for a very short duration to indicate which key was pressed on the actual keyboard. Only a short script will accomplish this, but it's trickier than the previous problem. You will learn how to analyze an event object captured by event listeners and selectively use its attributes to carry out various tasks.

**Important**: With the exception of Task 1 and 2, do NOT modify the HTML and CSS files. Everything should be written inside the provided JavaScript file.

**Disclaimer**: This code for this mini-project was originally obtained from [Wes Bos](http://wesbos.com/about/). We have modified it so that it can function as an assignment for the class.

Task 1: All these strange numbers (1 point)
-------------------------------------------

Open the HTML file. Notice that each `.key` div, as well as each audio, has a `data-key` attribute corresponding to a certain value. If you haven't understood why they are there, chances are you are yet ready to write the script.

**What you will do**: Figure out what these numbers are and how they could potentially help you. If you are stuck, [click here](http://keycode.info/) and play around in there to see whether it helps.

After you are done, write a comment inside the HTML file, giving a potential explanation for these `data-key` attributes and how it may be used later. Think of the interaction.

Task 2: On with the glow (1 point)
----------------------------------

Open the CSS file. At the bottom there's something else for you to figure out.

**What you will do**: Follow the instructions given in the CSS file and see how the class `.playing` may help you. Think of the two things that have to happen when a key is pressed (read the description of part 2 again if you are not sure what these two things should be).

Task 3: From A to Clap (4 points)
---------------------------------

Now, let's first understand what the starter code is doing. You are provided with a function `playSound(e)`. What is `e` supposed to be?

To the application window is attached an event listener that registers a `keydown` event i.e. it will invoke whatever function passed in as the second argument whenever a key is pressed. In this case, the function is `playSound`. Recall that the function passed in to `addEventListener` has access to the event object, which the function takes as an argument. We might well have written:
```javascript
window.addEventListener('keydown', function(e) { playSound(e); })
```
That `e` corresponds exactly to the event object under discussion. With some understanding of Javascript functions and a bit of intuition, it should be clear that the `e` in our declaration of the `playSound` function is meant to be the event object resulting from some interaction. This means we can access access inside the `playSound` function to get the information we want.

**What you will do**: Check the browser inspector (F12 on Windows, or right-click then Inspect on Mac) and look at the `console.log` result. See how you can use some of the information inside the event object to write the script. By the end of this task, you should be able to do the following:
	
 1. Pressing a valid key will make a sound and put a glow around the corresponding virtual key (don't worry if it stays there forever).
	
 2. Pressing a key rapidly and repeatedly should make rapid, repeated sounds.
	
 3. Pressing an invalid key should not raise an error.

Task 4: Gone with the sound (4 points)
--------------------------------------

You may notice that the glow around the virtual key never goes away after the key press. This renders the visual interaction meaningless. Let's figure out how to remove this. But first, WHEN do we want to remove it?

With your experience with CSS, you know that the change in appreance results from a CSS transition (from no-glow to glow). One of the obvious points in time when we want to remove the glow is when the transition ends i.e. the key goes back to no-glow immediately after it finishes the transition to glow. There are many ways to do this, but most of them are inefficient and ugly. A big give-away to the most elegant solution is that the end of a CSS transition is also a DOM event.

**What you will do**: Finish the script so that the glow gets removed after you are done pressing any valid key. Everything else should work the same way as before. What you learned from inspecting the event object in the previous task will greatly aid you in this one.
