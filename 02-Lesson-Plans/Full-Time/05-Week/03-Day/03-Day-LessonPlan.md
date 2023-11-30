# 5.3 Full-Time Lesson Plan: Node.js and Object-Oriented Programming (OOP)

## Overview

In this class, we will start by doing the mini-project from Module 09 on Node.js. Then students will be introduced to object-oriented programming. They will learn about key OOP concepts like constructors, prototypes, classes, and inheritance.

> **Important**: Ensure that all activities using the `inquirer` package is using version 8.2.4. The latest version of `inquirer` (version 9+) introduces breaking changes to activities. All activities have version 8.2.4 in their respective `package.json` files but should you or your students install `inquirer`, please use `npm i inquirer@8.2.4`.

## Instructor Notes

* In this lesson, students will complete activities `28-Stu_Mini-Project` from Module 09 through `08-Stu_Inheritance` in Module 10.

* Be sure to review the activities before class. Try to anticipate any questions that students might have, especially on these core OOP topics!

* You might find it difficult to remember a time when classes were unfamiliar to you. Read the [MDN web docs on classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) to review the most basic components.

* Familiarize yourself with classes, subclasses, and the `super()` method before the lesson, because it deals heavily with ES6 classes.

* **Important**: Trilogy as a company values transparency and data-driven change quite highly. We know that some areas will need improvement as we grow. It’s hard for us to know what these areas are unless we ask questions. Your candid input truly matters to us, as you are vital members of the Trilogy team. In addition to individual feedback at the end of each lesson plan, we would appreciate the feedback of all instructors and TAs in the [mid-course instructional staff survey](https://forms.gle/yPfrY4CjNeAqbVKD6).

* Constructors are extremely useful in creating objects of similar types and allow for the development of very interesting applications. Make sure your students have a firm understanding of how objects function.

* Remind students to do a `git pull` of the class repo to have today's activities ready and open in VS Code.

* If you are comfortable doing so, live-code the solutions to the activities. If not, use the solutions provided and follow the prompts and talking points for review.

* Let students know that the Bonus at the end of each activity is not meant to be extra coding practice, but is a self-study on topics beyond the scope of this module for those who want to further their knowledge.

## Learning Objectives

By the end of class students will be able to:

* Create new objects using constructor functions.

* Add methods to objects using prototypical inheritance.

* Implement classes to create new instances of objects.

## Slide Deck

* [Module 10: Object-oriented programming](https://docs.google.com/presentation/d/1DtkslDqhc1kio8D9d3N2jRUAKzJW3BXa6RWRQHzV7Nc/edit?usp=sharing)

## Time Tracker

| Start   |  #  | Activity Name                   | Duration |
|---------|-----|---------------------------------|----------|
| 10:00AM | 1   | Instructor Demo: Mini Project   | 0:05     |
| 10:05AM | 2   | Student Do: Mini Project        | 0:60     |
| 11:05AM | 3   | Instructor Review: Mini Project | 0:10     |
| 11:15AM | 4   | Introduce Challenge             | 0:05     |
| 11:20AM | 5   | FLEX                            | 0:30     |
| 11:50PM | 6   | Instructor Do: Stoke Curiosity  | 0:10     |
| 12:00PM | 7   | BREAK                           | 0:30     |
| 12:30PM | 8   | Instructor Demo: Constructors   | 0:05     |
| 12:35PM | 9   | Student Do: Constructors        | 0:15     |
| 12:50PM | 10  | Instructor Review: Constructors | 0:10     |
| 1:00PM  | 11  | Instructor Demo: Prototypes     | 0:05     |
| 1:05PM  | 12  | Student Do: Prototypes          | 0:15     |
| 1:20PM  | 13  | Instructor Review: Prototypes   | 0:10     |
| 1:30PM  | 14  | Instructor Demo: Classes        | 0:05     |
| 1:35PM  | 15  | Student Do: Classes             | 0:15     |
| 1:50PM  | 16  | Instructor Review:Classes       | 0:10     |
| 2:00PM  | 17  | Instructor Demo: Inheritance    | 0:05     |
| 2:05PM  | 18  | Student Do: Inheritance         | 0:15     |
| 2:20PM  | 19  | Instructor Review: Inheritance  | 0:10     |
| 2:30PM  | 20  | END                             | 0:00     |

---

## Class Instruction

### 1. Instructor Demo: Mini-Project (5 min)

* Welcome students to class.

* Ask if anyone has questions before starting the mini-project.

* Open `28-Stu_Mini-Project/README.md` in your browser and demonstrate the following:

* Run `node index.js` from the command line and demonstrate the following:

  * 🔑 Notice that when we run the application, we are presented with a series of prompts by `inquirer`.

  * 🔑 After the inputs are entered, we are presented with a message that `index.html` has been written to.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 We would import `inquirer`, gather the required responses from the user and use those responses in conjunction with the `fs` module to write some html to a file. It will also require some creative string concatenation.

* Answer any questions before allowing students to start the mini-project.

### 2. Student Do: Mini-Project (60 min)

* Direct students to the activity instructions found in `28-Stu_Mini-Project`.

* Break your students into groups that will work together on this activity.

```md
# Mini-Project

In this activity, you will build a command-line tool that generates an HTML portfolio page from user input.

## Instructions

* Your application should prompt the user for information like their name, location, bio, LinkedIn URL, and GitHub URL. Feel free to add any additional prompts you think of.

* An HTML document containing the information collected from the prompts should be constructed and written to the file system. Be sure to add some CSS styling to the document.

* You’ll need the following tools and technologies to accomplish this:

  * `fs` for writing to the file system

  * `inquirer` for collecting user input

  * String template literals for generating a string version of the HTML document before it is written to the file system

## 💡 Hints

It might be a good idea to start building out the HTML skeleton in a real HTML file. Once you're happy with the HTML file's appearance in the browser, you can copy and paste its contents into a string template literal. Then you can write a function to insert the user input into the appropriate places in the HTML string before writing it to the file system.

## 🏆 Bonus

* Instead of using callback functions, what are some other tools in JavaScript we can use to handle asynchronous functionality?
```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 3. Instructor Review: Mini-Project (10 min)  

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with this mini-project? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Template literal syntax

  * ✔️ `inquirer.prompt()`

  * ✔️ `fs.writeFile()`

* Open `28-Stu_Mini-Project/Main/index.js` in your IDE and explain the following:

  * We import the required packages first, as follows:

    ```js
    const inquirer = require("inquirer");
    const fs = require("fs");
    ```

  * 🔑 We destructure our `answers` object to retrieve the values we desire to fill in our template.

  * 🔑 We can construct an HTML string using string template literals in the function `generateHTML()`:

    ```js
    function generateHTML({ name, location, github, linkedin }) {
      return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
      <title>Document</title>
    </head>
    <body>
      <header class="p-5 mb-4 header bg-light">
      <div class="container">
        <h1 class="display-4">Hi! My name is ${name}</h1>
        <p class="lead">I am from ${location}.</p>
        <h3>Example heading <span class="badge bg-secondary">Contact Me</span></h3>
        <ul class="list-group">
          <li class="list-group-item">My GitHub username is ${github}</li>
          <li class="list-group-item">LinkedIn: ${linkedin}</li>
        </ul>
      </div>
    </header>
    </body>
    </html>`;
    }
    ```

  * 🔑  `inquirer.prompt({})` will collect the needed responses from the user and assign them to an object for us. We called the object `answers`, as shown in the following example:

    ```js
    inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?"
      },
      {
        type: "input",
        name: "location",
        message: "Where are you from?"
      },
      {
        type: "input",
        name: "hobby",
        message: "What is your favorite hobby?"
      },
      {
        type: "input",
        name: "food",
        message: "What is your favorite food?"
      },
      {
        type: "input",
        name: "github",
        message: "Enter your GitHub Username"
      },
      {
        type: "input",
        name: "linkedin",
        message: "Enter your LinkedIn URL."
      }
    ]);
    ```

  * 🔑  We then use `fs.writeFile()` inside of the Promise returned by `inquirer.prompt()` to generate the HTML file with our answers:

    ```js
    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can asynchronous code help developers write better code?

  * 🙋 Asynchronous programming allows the code to execute logic without blocking the rest of the application’s functionality.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on asynchronous JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 4. Instructor Demo: Introduce Challenge (5 min)

* Navigate to `02-Challenge/Main` and run `npm i` in your command line.

* Run `node index.js` from your command line and demonstrate the following:

  * We will build a command-line application that will generate REAMDEs for us.

  * You might actually want to use this application for all your Challenges in the future. It will also help keep each of your projects looking professional when you are applying for jobs.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are we learning?

  * 🙋 We are learning how to use `inquirer` to gather responses from the user, how to use `fs` to write the content to a markdown file, and also how to use the responses to inject data into the template strings.

  * ☝️ How does this project build off or extend previously learned material?

  * 🙋 Much like the mini-project, we will be using the `inquirer` responses to write to a file.

  * ☝️ How does this project relate to your career goals?

  * 🙋 It will help us learn how to use Node's `fs` module. It also carries an added benefit of helping keep readme files looking fresh. Employers often view job seekers' pinned projects on GitHub, and a sleek readme can be the difference between piquing their interest or seeing them move on to the next candidate.

* Ask TAs to direct students to the Challenge Requirements found in `02-Challenge/README.md`.

* Answer any questions before ending the class.

### 5. FLEX (30 mins)

* This time can be utilized for reviewing key topics learned so far in this module or getting started on the Challenge.

### 6. Instructor Do: Stoke Curiosity (10 min)

* Open the [slide deck](https://docs.google.com/presentation/d/1DtkslDqhc1kio8D9d3N2jRUAKzJW3BXa6RWRQHzV7Nc/edit?usp=sharing) and follow these prompts on their corresponding slides:

  * **Object-oriented Programming**
  
    * This module introduces object-oriented programming (OOP). In today's class, we will cover objects and constructors.

  * **What is programming?**
  
    * **Programming** refers to designing and building an executable program that accomplishes a specific computing task. Essentially, programming is problem-solving.

  * **What problems do we solve?**

    * Programming enables us to solve almost any task or problem on a computer, usually in one of two primary categories: algorithms and automation.

  * **What is DRY?**
  
    * **DRY**, or **Don’t Repeat Yourself**, is a fundamental programming principle.  Duplicate code wastes time and memory and can confuse readers or contributors to your project.

  * **What is an object?**
  
    * **Objects** in JavaScript are unordered collections of related data built on a key-value structure in which values can be any data type, including functions.

  * **Why are objects important in Javascript?**

    * Because everything in JavaScript is an object! Well, except for primitive data types. Everything else is an object&mdash;essentially, a list of key-value pairs.

    * Data types that are objects:

      * Arrays

      * Dates

      * Math

      * Functions

      * And others!

    * Primitive data types (NOT objects):

      * `null`

      * `undefined`

      * Strings

      * Numbers

      * Symbols

      * Booleans
  
  * **How do we create objects?**
  
    * We can use **object** literals, which define and create an object in one statement.

    * We can use the `new` keyword, which defines and creates a single object.

    * Or we can use **constructors**, which create objects from a blueprint.

  * **What is object-oriented programming?**

    * **OOP** is a programming paradigm, or pattern, centered around objects. In OOP, we solve problems by employing collections of objects that work together. Their ability to communicate with each other makes objects particularly well-suited to address large, complex problems.

    * OOP offers the following benefits:

      * **Encapsulation**&mdash;object data (and often functions) can be neatly stored (i.e., encapsulated).

      * **Inheritance**&mdash;new classes can be created based on other classes (i.e., the `Person` class is parent to the `Student` and `Teacher` classes).

      * **Abstraction**&mdash;the process of creating a simple model of something complex.

      * **Polymorphism**&mdash;multiple object types can implement the same functionality.

  * **How can we learn to use OOP?**
  
    * OOP is a broad concept that is best learned through real-life examples. We begin to see the value of OOP when we use objects to model real-world things in code and provide functionality that would otherwise be hard or impossible to achieve.

    * Try some of the following techniques to learn OOP:

      * Read the docs and practice with the provided examples.

      * Reverse-engineer finished code to see how it was created.

      * Build something from scratch.

      * Debug a broken app using Chrome DevTools.

      * And most importantly, ask questions.

  * **Mini-Project**

    * For this module's mini-project, you will build a task list application that outputs an HTML.

* Navigate to `01-Class-Content/10-OOP/01-Activities/28-Stu_Mini-Project/Main` and run `npm install` in your command line.

* Run `npm start` to start the task list application and demonstrate the following:

  * In this assignment, we will use OOP to build a task list generator.

  * This will be our chance to use classes in conjunction with Inquirer and Node.js to build a common and frequently used type of application.

  * We can create a list of prioritized tasks that is output onto a generated HTML file.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are we learning?

  * 🙋 We are learning how to implement OOP, ES6 classes, constructor functions, and testing to build a command-line application.

  * ☝️ How does this project extend previously learned material?

  * 🙋 This project builds on your knowledge of Node.js, newer ES6 syntax, and testing.

  * ☝️ How does this project relate to your career goals?

  * 🙋 Building an app like this is an exercise in using JavaScript outside of the browser&mdash;a fundamental characteristic of back-end development. We are just starting to scratch the surface!

* Answer any questions before proceeding to the next activity.

### 7. BREAK (30 min)

### 8. Instructor Demo: Constructors (5 min)

* Navigate to `01-Ins_Constructors` and run `node index.js` from the command line to demonstrate the following:

  * 🔑 When we run the program, we see the following output in the console:

    ```text
    Zzzzzzzzz
    ```

* Open `01-Ins_Constructors/index.js` in your IDE and explain the following:

  * 🔑 We create a constructor function called `Dog()` that takes in three parameters, `name`, `age`, and `breed`, as follows:

    ```js
    function Dog(name, age, breed) {
    ```

  * 🔑 We pass the `name`, `age`, and `breed` parameters into the object's keys as their value, as shown in the following example:

    ```js
    this.name = name;
    this.age = age;
    this.breed = breed;
    ```

  * 🔑 The third key is a function called `nap()` that logs `Zzzzzzz` in the console. See the following code for an example:

    ```js
    this.nap = function () {
      console.log('Zzzzzzzzz');
    };
    ```

  * When we run `node index.js` in the console, a `dog` object is created and the `nap()` method is called as shown in the following example:

    ```js
    // Sets the variable "dog" to a Dog object and initializes with name, age, and breed properties
    const dog = new Dog('Rex', 2, 'Bulldog');

    // Calling dog's nap method
    dog.nap();
    ```

* Ask the class the following question (☝️) and call on students for the answer (🙋):

  * ☝️ What is the purpose of the constructor function?

  * 🙋 **Constructor functions** act as a kind of blueprint for creating many objects of the same type. They indicate the necessary criteria for creating an object and allow instances of that object to be **instantiated** (or created) by using the `new` keyword.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `02-Stu_Constructors/README.md`.

### 9. Student Do: Constructors (15 min)

* Direct students to the activity instructions found in `02-Stu_Constructors/README.md`.

* Break your students into pairs to work together on this activity.

  ```md
  # 🏗️ Create Objects Using a Constructor Function

  Work with a partner to implement the following user story:

  * As a developer, I want to create new objects using a constructor function.

  ## Acceptance Criteria

  * It's done when the constructor function is named `BlogPost()` and takes in four parameters, `authorName`, `title`, `text`, and `createdOn` (this should be a date).

  * It's done when the parameters are passed into the object's keys as their values.

  * It's done when the object's fifth key is a method called `printMetaData()` that prints a message in the console saying `Created by (authorName) on (createdOn)`.

  * It's done when I create a new object using the `BlogPost()` constructor with my own custom values.

  * It's done when the meta data is printed to the console.

  ---

  ## 💡 Hints

  How can we use template literals to print an introduction like "Created by John Doe on December 5th, 2022"?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What are some built-in JavaScript constructors for native objects?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, remind students and the rest of the instructional staff that questions on Slack or elsewhere are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 10. Instructor Review: Constructors (10 min)

* Ask the class the following question (☝️) and call on students for the answer (🙋):

  * ☝️ How comfortable do you feel with constructors? (Poll via Fist to Five, Slack, or Zoom.)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `BlogPost()` constructor function

  * ✔️ `printMetaData()` method

* Open `02-Stu_Constructors/Solved/index.js` in your IDE and explain the following:

  * 🔑 We create a constructor function named `BlogPost()` that takes in four parameters, `authorName`, `title`, `text`, and `createdOn`, as shown in the following example:

    ```js
    function BlogPost(authorName, title, text, createdOn) {

    }
    ```

  * We pass the `authorName`, `title`, `text`, and `createdOn` parameters into the object's keys as their values, as shown in the following example:

    ```js
    this.authorName = authorName;
    this.title = title;
    this.text = text;
    this.createdOn = createdOn;
    ```

  * 🔑 The third key is a method called `printMetaData()`. We use template literals to print the message in the console, as shown in the following example:

    ```js
    this.printMetaData = function () {
      console.log(`Created by ${this.authorName} on ${this.createdOn}`);
    };
    ```

  * We create a new object to test the `BlogPost` constructor. We can use any name, title, text, and created on date, but in the following example, we will use `John Doe`, `My First Post`, `Dogs are super cute!`, and `12/15/2021` when instantiating our new `post` object:

    ```js
    const post = new BlogPost(
      'John Doe',
      'My First Post',
      'Dogs are super cute!',
      '12/15/2021'
    );
    ```

  * We call the `printMetaData()` method on `post` to print the message in the console, as follows:

    ```js
    post.printMetaData();
    ```

* Run `node index.js` from your command line and demonstrate the following:

  * We see the posts's meta data in the console, as follows:

    ```string
    Created by John Doe on 12/15/2021
    ```

* Ask the class the following question (☝️) and call on students for the answer (🙋):

  * ☝️ How can we add a method to a constructor?

  * 🙋 We can add methods to an object constructor inside the constructor function or we can use the `prototype` property to add methods to existing constructors.

* Answer any questions before proceeding to the next activity.

### 11. Instructor Demo: Prototypes (5 min)

* Navigate to `03-Ins_Prototypes/index.js` and show the following:

  * 🔑 Nearly everything in JavaScript is an object. Strings, dates, numbers, and arrays are all standard built-in objects in JavaScript.
  
  * 🔑 Objects in JavaScript have prototype objects. A link is made between the object instance and its prototype (its `__proto__` property, which is derived from the `prototype` property on the constructor). Properties and methods are found by walking up the chain of prototypes.

  * 🔑 We start by creating a new array, as follows:

    ```js
    const myArray = [2, 4, 6, 8];
    ```

  * Next, navigate to `03-Ins_Prototypes` and open `index.html` in a default browser and open the console.
  
  * In the console, type `myArray.`. Once we type the period, we see a list of properties and methods defined on `myArray`'s prototype object, which is `Array.prototype`. If we click on `__proto__`, we can see the full list of inherited methods. Among them is the `forEach()` method.

  * Let's apply that method to `myArray`. Within `index.js`, show students the following:

    ```js
    myArray.forEach((num) => console.log(num));
    ```

  * As a result, every number in the array will log in the console. We were able to use the `Array.prototype.forEach()` method because `myArray` was derived from the built-in `Array` object.
  
  * 🔑 Additionally, we can access methods and properties further up the prototype chain. We create a `person` object with the occupation of `Full-Stack Web Developer`, which is a string. See the following code inside of `index.js` for an example:

    ```js
    const person = {
      name: 'Eric',
      age: 28,
      occupation: 'Full-Stack Web Developer',
    };
    ```
  * Then go back to the browser's console to view our `person` object. From there, expand the `[[Prototype]]` object to demonstrate that even our newly created `person` object automatically inherits properties and methods upon creation.
  * Because `occupation` is a string, it has access to the `String` prototype. Of the many methods available, let's try `toLowerCase()` to convert the `occupation` into all lowercase. Referencing methods via the prototype chain is also an efficient use of memory. Rather than creating multiple copies of the same method in memory, we can create one and point to it, as shown in the following example:

    ```js
    console.log(person.occupation.toLowerCase());
    ```

  * But these are all built-in methods of JavaScript. What if you wanted to make your own prototype methods?

  * Let's create a constructor function named `Movie()`, which will take in two arguments, `title` and `releaseYear`, as shown in the following example:

    ```js
    function Movie(title, releaseYear) {
      this.title = title;
      this.releaseYear = releaseYear;
    }
    ```

  * Create a movie using the constructor function, as follows:

    ```js
    const superman = new Movie('Superman', 1978);
    ```

  * Let's say that we want to modify the `prototype` property of this constructor function by adding a method that will then be available on all object instances created from the constructor. This method, `logInfo()`, will log information about the movies in the console, as shown in the following example:

    ```js
    Movie.prototype.logInfo = function () {
      return `${this.title} was released in ${this.releaseYear}`;
    };
    ```

  * To test it, call the method on the `superman` object, as shown in the following example:

    ```js
    console.log(superman.logInfo()); // => Superman was released in 1978
    ```

  * This new method is now available on all object instances derived from the `Movie()` constructor!
  
  * We can check whether or not a property was inherited by using the `hasOwnProperty()` method. This will return `true` if the specified property is a direct method. Otherwise it will return false if the specified property was inherited. See the following code for an example:

      ```js
      console.log(superman.hasOwnProperty('logInfo'));
      ```
  
  * And although we added this new method to the constructor's prototype AFTER we created the `superman` object instance from the constructor, the method was still available on the `superman` object instance!

* Ask the class the following question (☝️) and call on students for the answer (🙋):

  * ☝️ How can we use the `hasOwnProperty()` method to check whether an object's property is its own or was inherited?

  * 🙋 The `hasOwnProperty()` method will return `false` if it is not a direct method.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `04-Stu_Prototypes/README.md`.

### 12. Student Do: Prototypes (15 min)

* Direct students to the activity instructions found in `04-Stu_Prototypes/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📐 Add Comments to Implementation of Prototypes

  Work with a partner to add comments describing the functionality of the code found in [Unsolved](./Unsolved/index.js).

  ## 📝 Notes

  Refer to the documentation:

  [MDN web docs on constructors and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#constructors)

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What is the difference between adding a method inside the constructor and adding it to the prototype?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, remind students and the rest of the instructional staff that questions on Slack or elsewhere are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 13. Instructor Review: Prototypes (10 min)

* Ask the class the following question (☝️) and call on students for the answer (🙋):

  * ☝️ How comfortable do you feel with prototypes? (Poll via Fist to Five, Slack, or Zoom.)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `prototype`

* Open `04-Stu_Prototypes/Solved/index.js` in your IDE and explain the following:

  * This function is a constructor called `BlogPost()` that will take in four arguments. We assign those arguments to keys in the `constructor` as well as an empty array and a method called `printMetaData`, as follows:

    ```js
    function BlogPost(authorName, title, text, createdOn) {
      this.authorName = authorName;
      this.title = title;
      this.text = text;
      this.createdOn = createdOn;
      this.comments = [];
      this.printMetaData = function () {
        console.log(`Created by ${this.authorName} on ${this.createdOn}`);
      };
    };
    ```

  * 🔑 We add a method called `addComment()` to the prototype of `BlogPost()`, to avoid redeclaring the method in memory each time we create an instance of `BlogPost()`. We can define the method once on the prototype and simply point each instance to it, as follows:

    ```js
    // Method that takes in a comment and adds it to the BlogPost's comments array
    BlogPost.prototype.addComent = function (comment) {
      this.comments.push(comment);
    };
    ```

  * Finally we can create a `post` object by using the constructor function and add a new post using the `addComment` prototype method as shown in the following example:

    ```js
    post.addComent("Nice post, I like it!");

    // Should show an array with 1 child that says 'Nice post, I like it!'
    console.log(post.comments);
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why don't we just declare the methods in the constructor?

  * 🙋 When we bind a function using the `this` keyword, the method only exists on that instance of the object. For any method bound to `this`, it will be redeclared with each new instance of an object.

  * ☝️ How does the prototype help us solve this problem?

  * 🙋 The prototype allows us to declare methods that will be attached to all instances of an object of that prototype. Because the method is applied to the prototype, it is only stored in memory once for all instances.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN web docs on object prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 14. Instructor Demo: Classes (5 min)

* Open `05-Ins_Classes/index.js` in your IDE and explain the following:

  * 🔑 In an ES6 class declaration, we do not declare the parameters of the new object at the top of the function like we would in a constructor function. Instead, we use a built-in function called `constructor()`, as shown in the following example:

    ```js
    class Cat {
      constructor(name, age, breed) {
        this.name = name;
        this.age = age;
        this.breed = breed;
      }

      nap() {
        console.log('Zzzzzzzzz');
      }
    }
    ```

  * 🔑 The syntax for class methods differs from any function that we have encountered before. Instead of using arrow functions or the `prototype` property, the syntax looks similar to how we declare functions&mdash;just without the `function` keyword, as shown in the following example:
    ```js
    nap() {
      console.log('Zzzzzzzzz');
    }
    ```

  * Although we are now using classes in JavaScript, JavaScript does not have classical inheritance like some programming languages do. Fundamentally, JavaScript still works the same&mdash;inheritance happens through prototypes. The class syntax merely makes developers' lives easier.

  * We instantiate objects the same way we did with constructor functions, as follows:

    ```js
    const catOne = new Cat('Tom', 2, 'Shorthair');
    const catTwo = new Cat('Garfield', 3, 'Bengal');
    ```

* Ask the class the following question (☝️) and call on students for the answer (🙋):

  * ☝️ How would we build something like this?

  * 🙋 We could look up more information on how to use the ES6 class syntax.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `06-Stu_Classes/README.md`.

### 15. Student Do: Classes (15 min)

* Direct students to the activity instructions found in `06-Stu_Classes/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Create Objects Using a Class Constructor

  Work with a partner to implement the following user story:

  * As a developer, I want to create new objects using a Class Constructor.

  ## Acceptance Criteria

  * It's done when a class constructor is created named `BlogPost()` and it takes in five parameters, `authorName`, `title`, `text`, `comments`, `createdOn` (this should be a date).

  * It's done when the parameters are passed into the object's keys as their values.

  * It's done when the object's fifth key is a method called `printMetaData()` that prints a message in the console saying `Created by (authorName) on (createdOn)`.

  * It's done when the object's sixth key is a method called `addComment()` that takes in a comment and adds it to the `comments` array on the BlogPost.

  * It's done when I create a new object using the `BlogPost()` class constructor with my own custom values.

  * It's done when a class constructor is created named `Comment()` and it takes in four parameters, `authorName`, `text`, `createdOn`, and `reaction` (reaction should be a text emoji 🏃) 

  * It's done when the object's fifth key is a method called `printMetaData()` that prints a message in the console saying `Created by (authorName) on (createdOn) (reaction)`

  * It's done when I create a new object using the `Comment()` class constructor with my own custom values.

  * It's done when I add the newly created Comment to the BlogPost using the `addComment()` method.

  * It's done when the meta data for both the BlogPost and the Comment are printed to the console.

  ---

  ## 💡 Hints

  What method needs to be written inside the Class to initialize its properties?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * "Encapsulation" is one of the four pillars of OOP. Explain the benefits of encapsulation. What is meant by the "state" of an object?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, remind students and the rest of the instructional staff that questions on Slack or elsewhere are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 16. Instructor Review: Classes (10 min)

* Ask the class the following question (☝️) and call on students for the answer (🙋):

  * ☝️ How comfortable do you feel with ES6 classes? (Poll via Fist to Five, Slack, or Zoom.)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `constructor()`

  * ✔️ `this`

  * ✔️ Method syntax

* Open `06-Stu_Classes/Solved/index.js` in your IDE and explain the following:

  * 🔑 The `BlogPost` class includes a `constructor()` method that accepts four arguments, as follows:

    ```js
    class BlogPost {
      constructor(authorName, title, text, createdOn) {
        this.authorName = authorName;
        this.title = title;
        this.text = text;
        this.createdOn = createdOn;
        this.comments = [];
      }
    }
    ```

  * 🔑 The `printMetaData()` method uses `this` to reference the properties on the blog post, as shown in the following example:

    ```js
    printMetaData() {
      console.log(`Created by ${this.authorName} on ${this.createdOn}`);
    }
    ```

  * 🔑 The `addComment()` method pushes comments passed in as arguments into the method into the comments array as shown in the following example:

    ```js
    addComment(comment) {
      this.comments.push(comment);
    }
    ```

  * 🔑 The `Comment` class includes a `constructor()` method that accepts four arguments, as follows:

    ```js
    class Comment {
      constructor(authorName, text, createdOn, reaction) {
        this.authorName = authorName;
        this.text = text;
        this.createdOn = createdOn;
        this.reaction = reaction;
      }
    }
    ```

  * 🔑 The `printMetaData()` method uses `this` to reference the properties on the blog post, as shown in the following example:

    ```js
    printMetaData() {
      `Created by ${this.authorName} on ${this.createdOn} ${this.reaction}`
    }
    ```

  * We use the `new` keyword to create two new objects, an instance of `Comment` and an instance of `BlogPost`, as follows:

    ```js
    // TODO: Create a new object using the Comment class constructor.
    const newComment = new Comment(
      'Jane Doe',
      'This post is super cool!',
      '12/18/2021',
      '🐶😺'
    );

    // TODO: Create a new object using the BlogPost class constructor.
    const newPost = new BlogPost(
      'John Doe',
      'My Third Post',
      'Both dogs and cats are super cute!',
      '12/17/2021'
    );
    ```

  * Finally, we call the method `addComment` from `newPost` and `printMetaData` method from both the `newPost` and `newComment` objects:

  ```js
  // TODO: Use the addComment() method on your newly created BlogPost to add your newly created Comment to its comments array.
  newPost.addComment(newComment);

  // TODO: Print the meta data for both the BlogPost and the Comment to the console.
  newPost.printMetaData();
  newComment.printMetaData();
  ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ On a technical level, how are these classes behaving differently than constructor functions?

  * 🙋 They aren't; classes are just syntactical sugar for constructors.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN web docs on classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 17. Instructor Demo: Inheritance (5 min)

* Open `07-Ins_Inheritance/index.js` in your IDE and explain the following:

  * In programming, inheritance is a way for a constructor function or a class to inherit properties and methods from another class. We'll demonstrate how to accomplish inheritance through constructor functions, but it will be up to students to do the same but using classes.

  * 🔑 We begin by creating a constructor function called `Animal` that has three properties and a method. See the following code for an example:

    ```js
    // Constructor can be used to create objects containing properties "name", "age", "breed", and the "nap()" function
    function Animal(name, age, breed) {
      this.name = name;
      this.age = age;
      this.breed = breed;
      this.nap = function () {
        console.log('Zzzzzzzzz');
      };
    }
    ```

  * We then create two new constructor functions called `Dog` and `Cat` that use the `call()` method to inherit the `name`, `age`, `breed`, and `nap()` method as shown in the following example:

    ```js
    // Dog constructor can use the Animal constructor's call method to inherit properties "name", "age", "breed", and the "nap()" function
    function Dog(name, age, breed, puppies) {
      Animal.call(this, name, age, breed);
      this.puppies = puppies;
    }

    Dog.prototype.bark = function () {
      console.log('Woof!');
    };

    // Cat constructor can use the Animal constructor's call method to inherit properties "name", "age", "breed", and the "nap()" function
    function Cat(name, age, breed, kittens) {
      Animal.call(this, name, age, breed);
      this.kittens = kittens;
    }

    Cat.prototype.meow = function () {
      console.log('Meow!');
    };
    ```

  * Then we instantiate two objects, `dog` and `cat`, from the `Dog` and `Cat` constructor functions respectively, as follows:

    ```js
    const dog = new Dog('Rex', 2, 'Bulldog', ['Baxter', 'Marley', 'Scooby']);
    const cat = new Cat('Tom', 2, 'Shorthair', ['Garfield', 'Felix', 'Salem']);
    ```

  * Finally, we call the methods `bark()` and `meow()` as shown below:

  ```js
  dog.bark();
  cat.meow();
  ```

* Run `node index.js` in the command line to demonstrate the following:

  * If we try to run `index.js` with `choresDone` set to `false`, we get an error in the console, as follows:

    ```text
    Woof!
    Meow!
    ```

* Ask the class the following question (☝️) and call on students for the answer (🙋):

  * ☝️ What method is being used to allow the properties of one constructor function to be used in another?

  * 🙋 We use the `call()` method to inherit properties and methods from another constructor function.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `08-Stu_Inheritance/README.md`.

### 18. Student Do: Inheritance (15 min)

* Direct students to the activity instructions found in `08-Stu_Inheritance/README.md`.

* Break your students into pairs to work together on this activity.

  ```md
  # 📖 Implement Inheritance for Multiple Classes

  Work with a partner to implement the following user story:

  * As a developer, I want to be able to instantiate several classes that inherit from a parent class.

  ## Acceptance Criteria

  * It's done when a `ForumItem()` class is created that has properties for `authorName`, `text`, and `createdOn`.

  * It's done when these properties are removed from `BlogPost()` and `Comment()`, leaving only the ones that are different for each constructor.

  * It's done when `BlogPost()` and `Comment()` inherit their structure from `ForumItem()` and pass the relevant data to the parent class.

  * It's done when a new instance of `BlogPost()` and `Comment()` are created and both are logged to the console to verify that they were correctly instantiated.

  ## 📝 Notes

  Refer to the documentation: 

  [MDN web docs on class inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#inheritance)

  ## 💡 Hints

  How are `extends` and `super()` used for class inheritance?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * Explain the benefits and disadvantages of inheritance in OOP.

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, remind students and the rest of the instructional staff that questions on Slack or elsewhere are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 19. Instructor Review: Inerhitance (10 min)

* Ask the class the following question (☝️) and call on students for the answer (🙋):

  * ☝️ How comfortable do you feel with Inheritance? (Poll via Fist to Five, Slack, or Zoom.)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `extends`

  * ✔️ `super()`

* Open `08-Stu_Inheritance/Solved/index.js` in your IDE and explain the following:

  * We create a new class called `ForumItem` that will act as our parent class, as shown in the following example:

    ```js
    class ForumItem {
      constructor(authorName, text, createdOn) {
        this.authorName = authorName;
        this.text = text;
        this.createdOn = createdOn;
      }
    }
    ```

  * We then make changes to `BlogPost` and `Comment` classes to inherit properties from the `ForumItem` class using the `extends` keyword and the `super()` method, as shown in the following example:

    ```js
    class BlogPost extends ForumItem {
      constructor(authorName, title, text, createdOn) {
        super(authorName, text, createdOn);
        this.title = title;
        this.comments = [];
      }

      addComment(comment) {
        this.comments.push(comment);
      }
    }

    class Comment extends ForumItem {
      constructor(authorName, text, createdOn, reaction) {
        super(authorName, text, createdOn);
        this.reaction = reaction;
      }
    }
    ```

  * 🔑 Explain that the `extends` keyword is used during class creation and is how we tell JavaScript that a class will be a child of another class.

  * 🔑 Then explain that the `super()` method is we invoke a superclass or parent class' constructor.

  * We then instantiate new objects using the `newPost` and `newComment` classes and log both to the console, as shown in the following example:

  ```js
  // TODO: Create a new object using the BlogPost class constructor.
  const newPost = new BlogPost(
    'John Doe',
    'My Fourth Post',
    'Dogs, cats, and snakes are super cute!',
    '12/19/2021'
  );

  // TODO: Create a new object using the Comment class constructor.
  const newComment = new Comment(
    'Jane Doe',
    'This post is really awesome!',
    '12/20/2021',
    '🐶😺🐍'
  );
  // TODO: Log both newly created BlogPost and Comment to the console.
  console.log(newPost);
  console.log(newComment);
  ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are some syntactical differences between JavaScript constructor function inheritance and class inheritance?

  * 🙋 Inheritance with constructor functions uses the `call()` method whereas inheritance with classes uses the `extends` keyword and `super()` method.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN web docs on JavaScript classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#sub_classing_with_extends), and stick around for office hours to ask for help.

* After all questions have been answered you can end class for the day.

### 20. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this [anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
