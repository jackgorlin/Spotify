TODO App Again?: A CRUD Application With Persistence
====================================================
(April 2017. Written by Duong Vu and Jason Wangsadinata)

In this assignment you will be continuing a relatively simple and familiar to-do app that demonstrates how to build a RESTful server using NodeJS and ExpressJS. This time, we will implement all of the features in CRUD, namely CREATE, RETRIEVE, UPDATE and DELETE, with the help of MongoDB as our persistence layer.

This assignment will also require you to get familiar with uploading your code to Heroku. Once you are done with the main part, you should set up an app to host your files on Heroku. Your submission will be the link in which your website is hosted.

We have provided you with a starter code, so you only have to modify few parts of the code. It is important that you clone the repository using Git, because it will be easier later on to set up for heroku.

We also give an example of a finished project at [this](https://gentle-hollows-95095.herokuapp.com/) link. Feel free to check it out and play around with it, before you start with the assignment.

Prerequisites
-------------
You will need to be comfortable with the following concepts and skills:

* Firm grasp of JavaScript syntax, datatypes, and control flow

* Thorough understanding of JavaScript DOM Interaction

* Basic HTML and CSS

* Basic Git usage and how to push your code to GitHub

* Unix command-line skills and facility with an editor
to edit code files

* NodeJS and ExpressJS

* MongoDB

Setting Up
==========
First you want to clone the project from your GitHub repository. The best way to do this is to use the command line, and go to the directory where you want to keep the project files. Next, you can type:

```
git clone <your_github_URL>
```

Then, go to the folder by typing

```
cd <folder_name>
```

and inside the folder, you can type

```
npm run dev
```

to start the application. It should show a text saying "Time to practice MongoDB". If you are at this stage, then you are ready to move on.

Tasks List
==========

Before we start, you only have to modify `server.js` for all the main tasks. If you are attempting the optional tasks, then you might have to modify some other files.

Task 0: Connecting to the database
---------------------------------------

Once you have your application cloned, the first thing is to configure the database. To configure the database, you should set up an [mLab](https://mlab.com/) account, and log in to your account.

Once you are done, create a new MongoDB Deployment and set the plan to `sandbox`

![example](https://github.com/jwangsadinata/comp420_hw8/blob/master/screenshots/mlab1.png)

Once you’re done creating the deployment, head into it and create a database user and database password. **Remember the database user and database password** because you’re going to use it to connect the database you’ve just created.

![example](https://github.com/jwangsadinata/comp420_hw8/blob/master/screenshots/mlab2.png)

Finally, grab the MongoDB url and add it to your `MongoClient.connect` method (replace `dbaddr` below with the url that is shown. Make sure you use your database user and password!

![example](https://github.com/jwangsadinata/comp420_hw8/blob/master/screenshots/mlab3.png)

Replace line 13-15, which is the following:

```
app.listen(app.get('port'), function() {
  console.log('I am listening on port ' + app.get('port'));
})

```

with

```
/** MODIFY THE LINE BELOW **/
var dbaddr = ... /* Your database address from mLab */

MongoClient.connect(dbaddr, (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(app.get('port'), function() {
    console.log('I am listening on port ' + app.get('port'));
  })
})
```

After that, update the value of dbaddr with the URI shown in your mLab account. An example will be:
```
var dbaddr = 'mongodb://<dbuser>:<dbpassword>@ds163340.mlab.com:63340/comp420_mongodb_demo'
```

Now, check your `localhost:3000` and make sure that you can still see "Time to practice MongoDB" without any error. If you are at this stage, then the database has been configured properly.

Task 1: C is for Create (4 point)
---------------------------------

We are creating a new item by using a form, in which it will call a `POST` method. You will try to save this item on the database.

**What you will do**: Look at the file `index.ejs` under the `views` folder. Notice that we have a `<form>` that is calling a `POST` method, and it has an action to go to `/todo`. Your task is to update `server.js` so that it will handle the `POST` request, get the request body, set the body.done to false (example shown below), save it to your database, and redirect it back to `/` (to prevent the user for being stuck forever for waiting the server to move).

**Hint**: Your code should look like this:

```
app.post('/todo', (req, res) => {
  req.body.done = false
  /* YOUR CODE GOES HERE */
})
```

You can use `db.collection('<collection_name>').save(...)` to save your collection to the database.

Once you are done with this, check your mLab and see whether your object has been saved in the database. If it is, then congratulations, you have successfully implemented CREATE feature for this application. Now, moving on to RETRIEVE.

Task 2: R is for Retrieve (4 points)
------------------------------------

Retrieve is one of the most commonly used operation, and you certainly have used retrieve for all the previous assignment. In this task, you will retrieve the item that is in the database, and showing it to the user.

**What you will do**: Update `server.js`, such that in the root path, it will return you all the things in the database. With the view engine that we have set up, you can show it by calling on the `render(view, locals)` function, where the `view` is the name of the `.ejs` file, and `locals` are data that you want to pass in to your `.ejs` document.

**Hint**: Your code should start this way:
```
app.get('/', (req, res) => {
  /* YOUR CODE GOES HERE */
})
```

Remember you can use `db.collection('<collection_name>).find().toArray(...)` to get the collection of TODO items. The `.toArray` method above are necessary to convert the MongoClient cursor object to a more readable JavaScript object.

You should also delete the following lines, before refreshing your page:
```
app.get('/', (req, res) => {
  res.send("Time to practice MongoDB")
})
```

Once you are done, check that you have all the data that you saved in the database shown in the site. If it is, then you have successfully retrieved the items, and it's time to move on to UPDATE.

Task 3: U is for Update (7 points)
---------------------------------

Update, as the name suggest is to update an entry that we have in our database. In this task, you will implement the update feature such that when you click on a checkbox, it will remember the status of the checkbox, whether it is checked or not.

**What you will do**: You want to add code to `server.js`, such that it will process the `put` request that is sent by the event listener in `/public/main.js`, and update the corresponding item in the database. If it is checked, it should be unchecked and vice-versa.

**Note**: Since we did not go through in details on the methods you can do on MongoDB collections, let's assume that all the items in the collections are distinct, that is, there are no items that have the same name. There will be an optional assignment to handle this separately.

**Hint**: As with before, your code should start this way:

```
app.put('/todo', (req, res) => {
  /* YOUR CODE GOES HERE */
})
```

Check the MongoDB [documentation](https://docs.mongodb.com/manual/reference/method/) to find the method that allows you to update a collection.

Once you are done, check that clicking on the checkbox works. Whenever you click on the checkbox, the item will be crossed, and if you reload the page, the items should also stays the same. It's finally time to move on to our last feature, DELETE.

Task 4: Finally, D is for Delete (5 points)
-------------------------------------------

Again, delete as the name implies allows us to delete an entry in our database. Here, you will be deleting the entry whenever you click on the `X` button.

**What you will do**: Similar to the previous assignment, you want to write code that deletes the item in the collection, based on the item you selected. The selection of the item has already been handled for you in `main.js`, and you just have to call the appropriate mongo method to delete the item. The approach should be very similar to the previous tasks.

(Optional) Task 5: Update distinct elements (10 points)
-------------------------------------------------------

**What you will do**: In Task 3, we have implemented update based on the assumption that the items are all distinct. Think of a way to implement how to update a specific item, think of what query can you make such that it is guaranteed that if you have an item of the same name, you will pick the one you choose. You are allowed to modify other files in the starter code.

**Hint**: There are many ways you can implement this, but the easiest way is to implement an indexing in the items you put. Another way is to have a unique id to identify the element. You should think about modifying `index.ejs` and `main.js` if you are thinking of adding more elements to save.

(Optional) Task 6: Update item name (10 points)
-------------------------------------------------------

**What you will do**: Most TODO list will also allow you to change the name of the todo item you put in the database. Your task is to implement this feature.

Submission Instructions
=======================
Your finished code should be uploaded back to GitHub.

Another part of this submission is also to be able to host your code on Heroku. If you have not setup heroku, follow the instructions listed on [this](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction) website. Complete the Introduction and Set up stage.

Once you are done, if you clone it using the instructions above (`git clone`), then you can do the following command.

```
git add .                     -> add new files to be committed
git commit -m "your_message"  -> commit a file
```

So far so good, this is similar to the process for GitHub. Make sure you have Heroku CLI installed. If this is the first time you are uploading your files to Heroku, then you want to do the following after:

```
heroku login                          -> login to heroku and put in your credentials
heroku create                         -> create a new heroku app
heroku git:remote -a <your_app_name>  -> replace your_app_name with the name given by heroku create. An example will be serene-cliffs-23122.
```

The last step is then to push your code to heroku repository. To do this, you can just type

```
git push heroku master
```

That's it, if everything goes correctly, then your app should be live on heroku. To open the site, type `heroku open`.

In case you want to make any changes to your application, the process is similar to GitHub, you just have to add, commit and push. So, the list of commands will be the following.

```
git add .
git commit -m "my changes"
git push heroku master
```

Let us know if you have any questions.
