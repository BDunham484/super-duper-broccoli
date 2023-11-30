# 05.5 Full-Time Lesson Plan: Promises

## Overview

Today's lesson builds on previous knowledge of Promises and goes in-depth. Students will practice writing promises from scratch, learning to chain promises together, and handling errors.

> **Important**: Ensure that all activities using the `inquirer` package are using version 8.2.4. The latest version of `inquirer` (version 9+) introduces breaking changes to activities. All activities have version 8.2.4 in their respective `package.json` files but should you or your students install `inquirer`, please use `npm i inquirer@8.2.4`.

## Instructor Notes

* In this lesson, students will complete activities `21-Ins_Promise-Chain` through `28-Stu_Mini-Project`.

* You might find it difficult to remember a time when Promises were unfamiliar to you. Read the [MDN web docs on Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) to review the most basic components.

* Remind students to do a `git pull` of the class repo to have today's activities ready and open in VS Code.

* If you are comfortable doing so, live-code the solutions to the activities. If not, use the solutions provided and follow the prompts and talking points for review.

* Let students know that the Bonus at the end of each activity is not meant to be extra coding practice, but is a self-study on topics beyond the scope of this module for those who want to further their knowledge.

* If the students struggle with the `Everyone Do: Git` activity, walk through it with the students using the talking points provided. Otherwise, support the students as they do the activity and do a brief review at the end.

* The next module will have students writing and testing Express.js routes using an app called Insomnia. Direct students to the [Insomnia download page](https://insomnia.rest/download) and advise them to have it installed before the next module.

* Students will also start using Heroku in the upcoming module. Advise them to sign up for a Heroku account and install the Heroku CLI before they start the next module. Direct students to the [Heroku CLI installation guide on the Full-Stack Blog](https://coding-boot-camp.github.io/full-stack/heroku/how-to-install-the-heroku-cli) for extra guidance.

## Learning Objectives

By the end of class, students will be able to:

* Implement `Promise` chaining using multiple `.then()` methods.

* Extend functionality of promises by using the `.catch()` method for error handling.
  
## Time Tracker

| Start   | #   | Activity Name                       | Duration |
| ------- | --- | ----------------------------------- | -------- |
| 10:00AM | 1   | Instructor Do: Stoke Curiosity      | 0:10     |
| 10:10AM | 2   | Instructor Demo: Promise-Chain      | 0:05     |
| 10:15AM | 3   | Student Do: Promise-Chain           | 0:15     |
| 10:30AM | 4   | Instructor Review: Promise-Chain    | 0:10     |
| 10:40AM | 5   | Instructor Demo: Promise-Catch      | 0:05     |
| 10:45AM | 6   | Student Do: Promise-Catch           | 0:15     |
| 11:00AM | 7   | Instructor Review: Promise-Catch    | 0:10     |
| 11:10AM | 8   | Instructor Demo: Construct-Promise  | 0:05     |
| 11:15AM | 9   | Student Do: Construct-Promise       | 0:15     |
| 11:30AM | 10  | Instructor Review: Construct-Promise| 0:10     |
| 11:40AM | 11  | Everyone Do: Git Stash/Pop          | 0:20     |
| 12:00PM | 12  | BREAK                               | 0:30     |
| 12:30PM | 13  | Instructor Demo: Mini Project       | 0:05     |
| 12:35PM | 14  | Student Do: Mini Project            | 0:60     |
| 1:35PM  | 15  | Instructor Review: Mini Project     | 0:10     |
| 1:45PM  | 16  | Introduce Challenge                 | 0:05     |
| 1:50PM  | 17  | FLEX                                | 0:40     |
| 2:30PM  | 18  | END                                 | 0:00     |

---

## Class Instruction

### 1. Instructor Do: Stoke Curiosity (10 min)

* Welcome students to class.

* Explain that we will revisit Promises, but with extended functionality.

* The **Promise** object represents the completion or failure of an asynchronous operation and its result.

* The purpose of promises in JavaScript is to help make code more manageable and readable when compared to only using callbacks.

* But promises themselves are just proxies for a value. Therefore, the value of a `Promise` is not known at the time of creation. Instead, the `Promise` will output one of three **states**: pending, fulfilled, or rejected.

* Open the [MDN web docs on Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) in your browser and explain the following:

  * When a `Promise` is in a **fulfilled** state, it will then return a value. When a `Promise` is in a **rejected** state, it means that the `Promise` has failed and it will then return an error. A `Promise` is in a **pending** state any time it is neither in a fulfilled nor a rejected state.

  ```js
  // Using the inquirer package, we create a `.prompt()` that uses promises! Prior to the `.then()` or `.catch()`, the `Promise` is in a **pending** state.
  inquirer
    .prompt({
      type: 'input',
      name: 'name',
      message: 'Enter your first name:',
    })

    // If the `Promise` is in a fulfilled state, then the data is returned within the `.then()` method.
    .then((res) => res.json())

    // If the `Promise` is in a rejected state, we then send the error in this `.catch()` method.
    .catch((err) => console.error(err));
  ```
  
  * Don't worry about going too in-depth with the `.catch()` method yet as we'll touch on that later in the lesson. The big takeaway with the above example is to track the state of a promise.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Where have we seen the JavaScript `Promise` before?

  * 🙋 While using `fetch` API in previous modules and while using inquirer prompts.

  * ☝️ When it comes to asynchronous operations, what do Promises help us to solve?

  * 🙋 It helps us to avoid what's known as "callback hell".

* Answer any questions before moving on to the next activity.

### 2. Instructor Demo: Promise Chain (5 min)

* Open `21-Ins_Promise-Chain/index.js` in your IDE and explain the following:

  * 🔑 Since a **Promise** is a returned object to which you attach callbacks, instead of passing callbacks into a function. Callbacks added using `then()` will be called AFTER the success or failure of the asynchronous operation

  * 🔑 We can add multiple callbacks by calling `then()` several times. The callbacks are exectured one by one in the order in which they were inserted, as follows:

    ```js
    inquirer
      .prompt({
        type: 'input',
        name: 'username',
        message: 'Enter a Github Username:',
      })

      // promises are chained to directly pass inquirer data into fetch request
      .then((res) => fetch(`https://api.github.com/users/${res.username}`))

      // promises are chained to parse the request for the json data
      .then((res) => res.json())

      // json data is accepted as user and logged to the console
      .then((user) => console.log(user));
    ```

* Ask the class the following question (☝️) and call on students for the answer (🙋):

  * ☝️ How many `.then()` methods can we have in a single promise?

  * 🙋 We can use `.then()` in a single `Promise` as many times as we want and they will all execute in sequential order after the success or failure of the asynchronous operation.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `22-Stu_Promise-Chain/README.md`.

### 3. Student Do: Promise Chain (15 min)

* Direct students to the activity instructions found in `22-Stu_Promise-Chain/README.md`.

* Break your students into pairs to work together on this activity.

  ```md
  # 🏗️ Generate Blog Post HTML using JSON data

    Work with a partner to implement the following user story:

    * As a developer, I want a utility that can read data from a JSON file and generate an HTML document for a blog post, so that I can update the HTML more efficiently.

    ## Acceptance Criteria

    * It's done data is asynchronously read from `blogPost.json`.

    * It's done when an HTML string is generated using the `render()` method of the `BlogPost` class.

    * It's done when an HTML document is written to `post.html`.

    * It's done when a message is printed to in the terminal after the HTML file is created successfully.

    ## Assets

    The following image demonstrates the web application's appearance and functionality:

    ![Screenshot of the generated HTML.](./Images/01-generated-blog.png)

    ---

    ## 💡 Hints

    * How can promises be used to perform multiple asynchronous tasks in a sequence?

    * How can the built-in `fs/promises` Node module be used to read and write files asynchronously?

    ## 🏆 Bonus

    If you have completed this activity, work through the following challenge with your partner to further your knowledge:

    * What does the `Promise.all()` method do?

    Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, remind students and the rest of the instructional staff that questions on Slack or elsewhere are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 4. Instructor Review: Promise Chain (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with `Promise` chaining? (Poll via Fist to Five, Slack, or Zoom.)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `.then()`

* Open `22-Stu_Promise-Chain/Solved/index.js` in your IDE and explain the following:

  * We start by using the `readFile` method from the `fs/promise` module to asynchronously read the data from `data/post.json`, as follows:

    ```js
    readFile('./data/post.json', 'utf-8')
      .then((json) => {
        const blogData = JSON.parse(json);
        // Use BlogPost to generate the html
        const post = new BlogPost(
          blogData.title,
          blogData.text,
          blogData.author,
          blogData.createdOn
        );
        const html = post.render();

    })
    ```
  
  * Within the `readFile` method, we use `return` with the `writeFile` method which returns another `Promise` so that yet another `.then()` can be chained, as follows:

  ```js
  readFile('./data/post.json', 'utf-8')
      .then((json) => {
        const blogData = JSON.parse(json);
        // Use BlogPost to generate the html
        const post = new BlogPost(
          blogData.title,
          blogData.text,
          blogData.author,
          blogData.createdOn
        );
        const html = post.render();

        // Use return with the writeFile method which returns a `Promise` so that another .then() can be chained that will
        // wait for writeFile to resolve.
        return writeFile('./dist/post.html', html);
    })
  ```

  * 🔑 We then create a new `.then()` under the `readFile` method that will only execute after the `writeFile` method has resolved:

    ```js
    .then(() => {
      console.log('Created post.html');
    });
    ```

* Ask the class the following question (☝️) and call on students for the answer (🙋):

  * ☝️ How does the outer `.then()` know to wait for the `writeFile` method to resolve before executing?

  * 🙋 Because the `writeFile` method also uses promises and so the outer `.then()` must wait until previous promises are resolved.

* Answer any questions before proceeding to the next activity.

### 5. Instructor Demo: Promise Catch (5 min)

* Open `23-Ins_Promise-Catch/index.js` in your IDE and demonstrate the following:

  * In addition to using just `.then()` methods, we can also use a `.catch()` method. `Promise` execution will rout to the `.catch()` callback when an error occurs anywhere within the `Promise` chain.

  * Much like before, we create an inquirer prompt, as follows:
  
    ```js
    inquirer
      .prompt({
        type: 'input',
        name: 'username',
        message: 'Enter a Github Username:',
      })
    ```

  * Using `Promise` chaining, we create several `.then()` methods to execute in sequential order:

    ```js
    .then((res) => fetch(`https://api.github.com/users/${res.username}`))
    .then((res) => res.json())
    .then((user) => console.log(user))
    ```

  * However, we use the `.catch()` method after our `.then()` methods:

    ```js
    .catch((err) => console.log(err));
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Can you use the `.catch()` method to handle data in a similar way to the `.then()` method?

  * 🙋 No. Although the `.then()` and `.catch()` methods are similar in appearance and behavior, the `.catch()` method deals with rejected cases only.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `24-Stu_Promise-Catch/README.md`.

### 6. Student Do: Promise Catch (15 min) 

* Direct students to the activity instructions found in `24-Stu_Promise-Catch/README.md`.

* Break your students into pairs to work together on this activity.

  ```md
  # 📖 Handle Exceptions in Promises

  Work with a partner to implement the following user story:

    * As a developer, I want to debug and handle errors when they occur in a promise, so that I can debug my code more efficiently.

  ## Acceptance Criteria

    * It's done when the exception within the asynchronous code is caught and logged in the terminal.

    * It's done when I see `Unable to read post data` printed in the terminal.

  ## 📝 Notes

  Refer to the documentation:

  [MDN web docs on .catch()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)

  ## Assets

  The following image demonstrates the web application's appearance and functionality:

  ![Screenshot of an error that has been caught being logged in a terminal.](./Images/01-caught-error.png)

  ---

  ## 💡 Hints

  * With multiple calls to `.then()` in a chain, how can you write one function to handle an error in any of the `.then()` calls in the chain?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What does the Node `promisfy` utility do?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, remind students and the rest of the instructional staff that questions on Slack or elsewhere are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 7. Instructor Review: Promise Catch (10 min)  

* Ask the class the following question (☝️) and call on students for the answer (🙋):

  * ☝️ How comfortable do you feel with `Promise` Catches? (Poll via Fist to Five, Slack, or Zoom.)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `catch()`

* Open `24-Stu_Promise-Catch/Solved/index.js` in your IDE and explain the following:

  * We start by requiring in both the `fs/promises` module and the `BlogPost` class:

    ```js
    const { readFile, writeFile } = require('fs/promises');
    const BlogPost = require('./lib/blogPost');
    ```

  * Next, we use the `readFile` method from the `fs/promises` module and return the `writeFile` method within a `.then()`. We use a another `.then()` method that will execute only after the previous promises are resolved, as follows:

    ```js
    readFile('./data/post.json', 'utf-8')
    .then((json) => {
      const blogData = JSON.parse(json);
      const post = new BlogPost(
        blogData.title,
        blogData.text,
        blogData.author,
        blogData.createdOn
      );
      const html = post.render();
      return writeFile('./dist/post.html', html);
    })
    .then(() => {
      console.log('Created post.html');
    })
    ```

  * 🔑 The `.catch()` method is called under the `.then()` method that will "catch" any exceptions that occur in any of the previous promises in the chain:

    ```js
    .catch((error) => {
      console.log(error);
      console.log('Unable to read post data.');
    });
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What happens if an error is returned within the `readFile` method?

  * 🙋 Because the `.catch()` method is being used at the very end of our `Promise` chain, exceptions that occur within the `Promise` chain is caught at the end of the `Promise` composition.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN web docs on the Promise object's .catch() method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 8. Instructor Demo: Construct Promise (5 min)

* So far, we've been using either Inquirer.js or the `fs/promise` module to create promises. But what if we wanted to create our own custom `Promise`? The syntax is just a little different but conceptually, it's identical.

* Navigate to `25-Construct-Promise/index.js` in your IDE and demonstrate the following:

  * We start by creating a new function and instantiate a new `Promise`, as follows:

    ```js
    const wait = () =>
      new Promise((resolve, reject) => {
        
      });
    ```

  * Note that we pass in the `resolve` and `reject` functions as parameters. This will allow us to tell JavaScript what to do when a `Promise` has been resolved or rejected.

  * We then create a `setTimeout()` within our new `Promise` with some additional math logic that will execute in 3 seconds, as follows:

    ```js
    const wait = () =>
      new Promise((resolve, reject) => {

        // a timeout of 3 seconds is initialized
        setTimeout(() => {
          // after 3 seconds a random number is generated
          const randNum = Math.floor(Math.random() * 100);
          // if the random number is even the 'resolve()' sends data through to the '.then()' of the `Promise`
          if (randNum % 2 === 0) {
            resolve(`Success! Even number ${randNum} generated`);
            // if the random number is odd the 'reject()' sends data through to the the '.catch()' of the `Promise`
          } else {
            reject(new Error(`Oops! Odd number ${randNum} generated`));
          }
        }, 3000);

      });
    ```

  * We create a variable called `randNum` and set it to a random number between 1 and 100. Then we write a conditional that will check if that random number is even or odd. Based on this logic, the `Promise` will either result in a `resolve` or `reject`.

  * Then we call the `wait()` `Promise` and display the data that returns from the `Promise` using the `.then()` method and the `.catch()` method, as shown in the following example:

    ```js
    // execution of the 'wait()' function `Promise`
    wait()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    ```

  * Note that in this example, the `.then()` and `.catch()` methods act just as we have seen in previous examples and activities.

* Ask the class the following question(s):

  * ☝️ What do the `resolve()` and `reject()` functions do? How do they relate to subsequent `.then()` and `.catch()` calls?

  * 🙋 The `resolve()` method tells JavaScript what to do when a `Promise` is resolved. The `.then()` method is called after the `Promise` is resolved. Conversly, the `reject()` method tells JavaScript what to do when a `Promise` is rejected. The `catch()` method is called after the `Promise` is rejected.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `26-Construct-Promise/README.md`.

### 9. Student Do: Construct Promise (15 min) 

* Direct students to the activity instructions found in `26-Construct-Promise/README.md`.

* Break your students into pairs to work together on this activity.

  ```md
  # 📐 Add Comments to Implementation of the Promise Constructor

  Work with a partner to add comments describing the functionality of the code found in [promises.js](./Unsolved/promises.js).

  ## 📝 Notes

  Refer to the documentation:

  [MDN web docs on the Promise() constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)

  [Making HTTP requests with Node.js](https://nodejs.dev/en/learn/making-http-requests-with-nodejs)

  ---

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What is the difference between `Promise.all()`, `Promise.allSettled()`, `Promise.any()`, and `Promise.race()`?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, remind students and the rest of the instructional staff that questions on Slack or elsewhere are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 10. Instructor Review: Construct Promise (10 min)  

* Ask the class the following question (☝️) and call on students for the answer (🙋):

  * ☝️ How comfortable do you feel using multiple classes? (Poll via Fist to Five, Slack, or Zoom.)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `resolve()`

  * ✔️ `reject()`

* Open `26-Construct-Promise/Solved/index.js` in your IDE and explain the following: 

  * 🔑 We create a new function called `asyncRequest` and instantiate a new `Promise`, as follows:

    ```js
    const asyncRequest = (url) =>
      new Promise((resolve, reject) => {
        let error;
        let rawData = '';

      });
    ```
  
  * The `asyncRequest` function returns a `Promise` object allowing the caller to chain `.then()` and `.catch()` to asynchronously handle the resolved value or rejected error.

  * 🔑 Then we use the `.on()` method to handle whether an error was thrown from the API call or will what to do when data is successfully received:

    ```js
    .on('close', () => {
      // The 'close' event fires after the incoming message is completely received. Error will be undefined if the
      // response status code was 200.
      if (error) {
        reject(error);
      } else {
        resolve(rawData);
      }
    });
    ```
  
  * Calling `reject()` will reject the `Promise` with the given error. This then executes the callback in `asyncRequest().catch(cb)`.

  * Calling `resolve()` will resolve the `Promise` with the rawData. This then executes callback in `asyncRequest().then(cb)`.

  * 🔑 Finally, we call the `asyncRequest` function and use the `.then()` and `.catch()` method to handle returned resolutions or rejections, as follows:

    ```js
    asyncRequest('http://numbersapi.com/random/trivia')
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
    ```

* Ask the class the following question (☝️) and call on students for the answer (🙋):

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN web docs on classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `27-Evr_Git-Stash-Pop/README.md`.

### 11. Everyone Do: git stash and pop (20 min)

* Open the [Git documentation on stashing](https://www.git-scm.com/docs/git-stash) in your browser and explain the following:

  * `git stash` saves your uncommitted changes in a non-destructive manner, then reverts those changes from your working copy.

* Direct students to the activity instructions found in `27-Evr_Git-Stash-Pop/README.md`.

* While everyone is working on the activity, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

* To demonstrate `git stash`, edit some of the files in the class repository, if you haven't already.

* Open your command line and demonstrate the following:

  * Running `git status` shows that there are untracked changes.

  * Running `git stash` will set aside those changes in the stack.

  * Running `git stash pop` will reapply those changes.
  
* Answer any questions before students go on break.

### 12. BREAK (30 min)

### 13. Instructor Demo: Mini-Project (5 min) 

* Navigate to `28-Stu_Mini-Project/Main` from the command line, run `npm install` and `npm start`, and demonstrate the following:

  * The user is presented with an Inquirer prompt that asks for their name, the name of a task, a priority for the added task, and the ability to add additional tasks.

  * If the user chooses not to add any new tasks, then an HTML file is generated that displays the user's name and all tasks.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is one class that you think you will need to create in order to accomplish this mini-project?

  * 🙋 For this mini-project, you'll need to, at minimum, create a `task` class.

  * ☝️ How can we know that the classes we construct are functioning as we intended?

  * 🙋 We can use test-driven development and write an adequate amount of test cases for our classes

* Answer any questions before allowing students to start the mini-project.

### 14. Student Do: Mini-Project (60 min)

* Direct students to the activity instructions found in `28-Stu_Mini-Project/README.md`.

* Break your students into groups that will work together on this activity.

  ```md
  # 🏗️ Module 10 Mini-Project: Create Tests and Classes for List Generator

    In this mini-project, you will work with a group to create classes and tests for an app that generates an HTML page with a user's task list

    * As a developer, I want to be able to define classes for different pieces of an application.

    * As a developer, I want to create tests to validate the core functionality of all classes in the application.

  ## Acceptance Criteria

    * It's done when I have created a `Component` class that takes in children, which default to an empty array if not provided.

    * It's done when a `render()` method is placed on the `Component` class that throws an error saying `Child class must implement render() method.`

    * It's done when a `renderInnerHTML()` method is placed on the `Component` class that loops over the children and converts any that aren't strings to strings by calling their `render()` method.

    * It's done when I have created a `Header` class that inherits from `Component`.

    * It's done when a `render()` method is placed on the `Header` class that returns a string of HTML following this format: `<header class="header"><h1>Todo Today</h1><p>{DATE_HERE}</p></header>`.

    * It's done when I have created a `TaskListItem` class that inherits from `Component`.

    * It's done when the `TaskListItem` class passes children to its parent class and sets a priority property.

    * It's done when a `render()` method is placed on the `TaskListItem` class and returns a string of html following this format: `<li class="tasks-item">{INNER_HTML}</li>`.

    * It's done when the `render()` method on the `TaskListItem` class optionally places a class name `tasks-item-priority` if the priority property is true.

    * It's done when I have tested the wildcard route by visiting any non-existent path, like `http://localhost/test`.

    * It's done when I have created a `TaskList` class that inherits from `Component`.

    * It's done when the `TaskList` class passes children to its parent class.

    * It's done when a `render()` method is placed on the `TaskList` class and returns a string of html following this format: `<ul class="tasks">{INNER_HTML}</ul>`.

    * It's done when I have created a testing suite for the `Component` class to verify that `render()` throws an error when called directly.

    * It's done when I have created a testing suite for the `Header` class to verify the `Header` renders correctly with the date.

    * It's done when I have created a testing suite for the `TaskListItem` class that verifies that the list item renders correctly.

    * It's done when the `TaskListItem` class testing suite also verifies that a priority task renders correctly.

    * It's done when I have created a testing suite for the `TaskList` class that verifies the unordered list with tasks renders correctly.

    * It's done when I have modified the `createDocument()` method on `document.js` to create a new `Header` and to add `TaskListItem` to a `TaskList`.

    * It's done when the `return` of the `createDocument()` is modified to include the newly created `Header`, `TaskList`, and `TaskListItem`.

  ---

  ## 💡 Hints

    How can we set up inheritance between classes?

    How can we use the `toThrow()` matcher from Jest to check for errors?
  ```

* While breaking everyone into groups, remind students and the rest of the instructional staff that questions on Slack or elsewhere are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 15. Instructor Review: Mini-Project (10 min)  

* Ask the class the following question (☝️) and call on students for the answer (🙋):

  * ☝️ How comfortable do you feel with this mini-project? (Poll via Fist to Five, Slack, or Zoom.)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Class syntax

  * ✔️ Jest Test cases

* Open `28-Stu_Mini-Project/Main/lib` in your IDE and explain the following:

  * We start by creating `header.js`, `taskList.js`, and `taskListItem.js` files that will hold our header, task list, and task list item classes.

* Open `28-Stu_Mini-Project/Main/header.js` in your IDE and explain the following:

  * Create a header class that will contain the title, "Todo Today", and the current date, as follows:

  ```js
  const Component = require('./component.js');
    const { formatDate } = require('./date.js');

    class Header extends Component {
      render() {
        return `<header class="header"><h1>Todo Today</h1><p>${formatDate(
          new Date()
        )}</p></header>`;
      }
    }

    module.exports = Header;
  ```

* Open `28-Stu_Mini-Project/Main/lib/taskList.js` in your IDE and explain the following:

  * Create a task list class that extends the `Component` class and makes use of the `renderInnerHtml` method to render the `ul` tag, as follows:

  ```js
  const Component = require('./component.js');

  class TaskList extends Component {
    constructor(children) {
      super(children);
    }
    render() {
      return `<ul class="tasks">${this.renderInnerHtml()}</ul>`;
    }
  }

  module.exports = TaskList;
  ```

* Open `28-Stu_Mini-Project/Main/lib/taskListItem.js` in your IDE and explain the following:

  * Create a task list item class that extends the `Component` class and makes use of the `renderInnerHtml` method to render an `li` element for each task passed into it, as follows:

  ```js
  const Component = require('./component.js');

  class TaskListItem extends Component {
    constructor(children, priority = false) {
      super(children);
      this.priority = priority;
    }
    render() {
      let classNames = 'tasks-item';
      if (this.priority) {
        classNames += ' tasks-item-priority';
      }
      return `<li class="${classNames}">${this.renderInnerHtml()}</li>`;
    }
  }

  module.exports = TaskListItem;
  ```

* Open `28-Stu_Mini-Project/Main/lib/document.js` in your IDE and explain that we require the `Header`, `TaskList`, and `TaskListItem` classes. We then create a new `Header` object, as well as new `TaskListItem` objects, and add it to a new `TaskList` object, as follows:

  * 🔑 , as shown in the following example:

    ```js
    const Header = require('./header.js');
    const TaskList = require('./taskList.js');
    const TaskListItem = require('./taskListItem.js');

    function createDocument(title, tasks = []) {
      const header = new Header().render();
      const taskListItems = tasks.map(
        (t) => new TaskListItem([t.text], t.priority)
      );
      const taskList = new TaskList(taskListItems).render();

      return `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>${title}</title>
          <link rel="stylesheet" href="../dist/style.css" />
        </head>
        <body>
          <div class="card">
            ${header}
            ${taskList}
          </div>
        </body>
      </html>
      `;
    }

    module.exports = { createDocument };
    ```

  * We then create a `tests` folder and create testing files for the `Component`, `Header`, `TaskList`, and `TaskListItem` classes.

  * 🔑 In the `component.test.js` file, we write an exception test, as follows:

    ```js
    const Component = require('../lib/component.js');

    describe('Component', () => {
      test('should throw error if render() is called', () => {
        const component = new Component();
        const err = new Error('Child class must implement a render() method.')
        expect(component.render).toThrow(err);
      });
    });
    ```

  * 🔑 In the `header.test.js` file we write a test that returns a block of HTML code that includes a header as well as the date, as follows:

    ```js
    const Header = require('../lib/header.js');
    const { formatDate } = require('../lib/date.js');

    describe('Header', () => {
      test('should render header with the date', () => {
        const expectedHtml = [
          '<header class="header">',
          '<h1>Todo Today</h1>',
          `<p>${formatDate(new Date())}</p>`,
          '</header>',
        ].join('');
        const header = new Header();
        expect(header.render()).toEqual(expectedHtml);
      });
    });
    ```

  * 🔑 In the `taskList.test.js` file, we write a test that returns a block of HTML code that includes a `ul` with task items within `li` tags, as shown in the following example:

    ```js
    const TaskList = require('../lib/taskList.js');
    const TaskListItem = require('../lib/taskListItem.js');

    describe('TaskList', () => {
      test('should render ul with tasks', () => {
        const taskItems = [
          new TaskListItem(['First task']),
          new TaskListItem(['Second task'], true),
          new TaskListItem(['Third task']),
        ];
        const expectedHtml = [
          '<ul class="tasks">',
          '<li class="tasks-item">First task</li>',
          '<li class="tasks-item tasks-item-priority">Second task</li>',
          '<li class="tasks-item">Third task</li>',
          '</ul>',
        ].join('');
        const list = new TaskList(taskItems);
        expect(list.render()).toEqual(expectedHtml);
      });
    });
    ```

  * 🔑 In the `taskListItem.test.js` file, we write test cases that checks to see if an `li` tag is returned for each task and another test that checks the functionality of prioritized tasks, as shown in the following example:

    ```js
    const TaskListItem = require('../lib/taskListItem.js');

    describe('TaskListItem', () => {
      test('should render an <li> for a task', () => {
        const text = 'Take over the world';
        const expectedHtml = '<li class="tasks-item">Take over the world</li>';
        const item = new TaskListItem([text]);
        expect(item.render()).toEqual(expectedHtml);
      });

      test('should render a priority task', () => {
        const text = 'Climb a mountain';
        const expectedHtml =
          '<li class="tasks-item tasks-item-priority">Climb a mountain</li>';
        const item = new TaskListItem([text], true);
        expect(item.render()).toEqual(expectedHtml);
      });
    });
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why was it necessary to create classes in different files and require them as needed?

  * 🙋 This way of building of an application adheres to the principles of separation of concerns. It makes our code easier to debug, maintain, and test.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN web docs on classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) and the [Jest API documentation](https://jestjs.io/docs/en/api), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 16. Instructor Demo: Introduce Challenge (5 min)

* Navigate to `02-Challenge/Main` and run `node index.js` from the command line to demonstrate the following:

  * You will build a command-line application that takes in user input, generates a logo, and saves it as a scalable vector graphic file (SVG). The application will prompt the user to select color, shape, and provide text for the logo and save the generated svg to file.
  
  * When we run the application using `node index.js`, we will receive the following output, one-by-one, from Inquirer:

    ```bash
    ? Enter text for the logo. (Must not be more than 3 characters.)

    ? Enter a text color

    ? Select a shape for the logo

    ? Enter a shape color
    ```
  
  * The project must include the classes `CLI`, `Shapes`, `Circle`, `Triangle`, `Square`, and `SVG`. The tests for these classes must all pass.

  * Additionally, the submitted assignment should include tests for `CLI`, `Shapes`, `Circle`, `Triangle`, `Square`, and `SVG`.
  
  * Each test should verify that the user can get names via `getName()`, get ids via `getId()`, get roles via `getRole()`, and also be instantiated with the constructor.

  * This application will take in user input and generate an SVG file that contains the input text for the logo, text color, shape of the logo, and the shape color. Example outputs can be found within the `examples` folder.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are we learning?

  * 🙋 We are learning how to write code that is readable, reliable, and maintainable. We will use Inquirer, the `fs` module, and Jest to test the application.

  * ☝️ How does this project build off or extend previously learned material?

  * 🙋 This exercise offers us more experience with classes, subclasses, and testing. It also allows us to practice writing JavaScript in Node.js.

  * ☝️ How does this project relate to your career goals?

  * 🙋 Object-oriented programming is universal across programming languages, so it will serve you well in any area of the industry. Additionally, test-driven development is becoming more and more popular, which will make you a competitive candidate in applicant pools.

* Ask TAs to direct students to the Challenge Requirements found in `02-Challenge/README.md`.

* Answer any questions before ending the class.

### 17. FLEX (40 min)

* This time can be utilized for reviewing key topics learned so far in this module or getting started on the Challenge.

### 28. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this [anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
