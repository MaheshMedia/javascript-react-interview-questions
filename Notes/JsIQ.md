
## JavaScript Interview Questions

1) Differenece b/w normal function and arrow function?
2) Difference b/w map filter and Reduce?
3) Do you know about callback hell?
4) What is Hosting? can you give example. difference b/w var and let when hosted?
5) What is event loop?
6) Tell me about this keyword in Js?
7) Diff b/w call(), bind(), apply()?
9) what is scope and what type of scope we have in js?
10) what all different types of events we have in Js?
11) what is onBlur event handler?
12) How we will handle errors in Js?
13) can you tell me what is promise? can you give one example
14) what is prototype?
15) what is closure?
16) what is the use of the progressive web app?
17) what is service worker in react ?
18) Have you worked on webaccess ability?
19) without using the javascript can we able to validate the form?
20) what is W3c standards?
21) can you name ES6 Features and which one you have used in your project?
22) difference b/w var, let and const?
23) if i have declared array by const can we add or remove elements in array?
24) can you show me an example of spread operator and rest operator?
25) Javascript is single threaded or multi thread?
26) what is function currying and can you explain with an example?
27) can you tell me browser side storages?
28) difference b/w local storage and session storage?
29) Explain Higher Order Functions in javascript with example?
30) what is Lexical scoping in the javascript with example?
32) What is deep copy and shallow copy in Javascript?
33) What is promise, callback function, async await in Javascript?
34) What is difference between promise and callback in Javascript?
35) Difference between Async/Await and Generators usage to achieve the same functionality?
36) What is event bubbling and event capturing in Javascript?
37) How many way to create object in Javascript?
38) What is prototype inheritance in Javascript?
39) What is typescript?
40) What are the array method, string method?
41) What is difference between java and javascript?
42) What is throttling and debouncing in js?
43) What is Null and undefined in javascript?
44) What are the falsy values in javascript?
45) What is execution context, event loop, stack, call queue, microtask queue in Javascript?
46) What is setTimeOut and setInterval in Javascript?
47) What is object.seal and object.freeze in Javascript?
48) What is difference between map and set in Javascript?
49) What is Weakmap and Weakset in Javascript?
50) What is use of json.stringify and json parse() method in Javascript?
51) How to stop event propagation in Javascript?
52) What is dead zone in Javascript?
53) What is mutation observer in Javascript?
54) What is memorization in javascript?
55) What is DOM in Javascript?
56) What is Status codes or HTTP response status codes?
57) Javasscript Versions and features added ?
58) What is memoization?
59) Explain passed by value and passed by reference?
60) Explain Implicit Type Coercion in javascript?
61) Javasscript Versions and features added ?








## Question & Answers

Qns) Differenece b/w normal function and arrow function?

    - An arrow function in JavaScript is like a shorthand way of writing a function.
    - Instead of using the function keyword, you use an arrow => to define the function
    - However, they have some differences from regular functions, particularly in how they handle the "this" keyword.
        - Basically in arraow function constructer realeted properties will not support.

Normal function:-
function sayHello() {
    comsole.log("Hello world");
}

Arrow function:-
const sayHello = () => {
    console.log("Hello world");
}

Qns) Difference b/w map filter and Reduce?

    - `map`, `filter`, and `reduce` are three commonly used higher-order array methods in JavaScript, each serving a different purpose when it comes to manipulating arrays:

    1. **map**:
    - **Purpose:** The `map` method is used to transform each element in an array and create a new array with the same length but with modified values.
    - **Return Value:** `map` returns a new array without modifying the original array.

        const numbers = [1, 2, 3, 4];
        const doubledNumbers = numbers.map((num) => {
            return num * 2
            });
        // o/p: [2, 4, 6, 8]

    2. **filter**:
    - **Purpose:** The `filter` method is used to create a new array containing all elements that satisfy a specified condition or criteria.
    - **Return Value:** `filter` returns a new array containing only the elements that passed the condition, without modifying the original array.

        const numbers = [1, 2, 3, 4, 5, 6];
        const evenNumbers = numbers.filter((num) => {
            return  num % 2 === 0;
         });
        // o/p: [2, 4, 6]

    3. **reduce**:
    - **Purpose:** The `reduce` method is used to accumulate or reduce the elements of an array into a single value. It can perform complex operations on an array.
    - **Usage:** It is commonly used for tasks like summing all elements, finding the maximum or minimum value, or any operation that requires aggregating values.

        const numbers = [1, 2, 3, 4, 5];
        const sum = numbers.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        });
        // o/p: 15

Qns) Do you know about callback hell?

    - Yes, "callback hell" is a term used to describe a situation in JavaScript programming where multiple nested callbacks or asynchronous functions make the code difficult to read and maintain. This typically occurs when you have asynchronous operations, such as AJAX requests or file I/O, nested within one another. Callback hell can result in code that is hard to follow, error-prone, and challenging to debug.

    Example of callback Function:-

    setTimeout(()=>{
        console.log("Hello")
    },2000)

    Example of callback hell:-

    1.Create Order.
    2.Payment.
    3.Order Summary.
    4.updateWallet

    const cart = ["shoes", "shirt", "pants", "mobile"];

    api.createOrder(cart, function(){
        api,proceedToPayment(function(){
            api.showOrderSummary(function(){
                api.updateWallet()
            })
        })
    })

    Asynchronous operations are often used for tasks like reading files, making network requests, or interacting with databases. In such cases, callbacks or promises are used to handle the results of these operations once they are complete. When multiple asynchronous operations are nested like this, it can create a pyramid-shaped structure of callbacks, which is where the term "callback hell" comes from.

Qns) What is Hosting? can you give example. difference b/w var and let when hosted?

    - Hoisting is the default behaviour of javascript where all the variable and function declarations are moved to top of the scope.

    - The main difference in hoisting behavior between var and let is that `var` variables are initialized with `undefined`, so you can access them before their declaration without causing an error. On the other hand, `let` variables are not initialized during hoisting, and accessing them before declaration results in a ReferenceError.

    - Because of this difference, using let can help catch errors and make your code more predictable by preventing the use of variables before they are defined. It's generally recommended to use let or const instead of var in modern JavaScript, as it provides better scoping and reduces the risk of unexpected behavior in your code.

    **var hosting:** num = 10;
                     console.log(num);
                     var num;
                // o/p: 10

    **let hosting:** str = "nitish"
                     console.log(str);
                     let str;
                // o/p: Throws a ReferenceError

    **function hosting:** greet();
                         function greet() {
                         console.log(“Hello!”);
                         }
                 // o/p: “Hello!”

Qns) What is event loop?

    - An event loop is something that pulls stuff out of the queue and places it onto the Function execution stack whenever the Function stack becomes empty.
    It is a mechanism that allows JavaScript to handle asynchronous operations, such as callbacks, timers, and I/O, in a non-blocking and efficient way. It continuously checks for pending tasks and executes them in a specific order, ensuring that the application remains responsive to user interactions and other events.

    console.log('Start');

    setTimeout(() => {
    console.log('Inside setTimeout callback');
    }, 1000);

    console.log('End');

Qns) Tell me about this keyword in Js?

    - In JavaScript, the this keyword refers to an object. Which object depends on how this is being invoked (used or called).
      The this keyword refers to different objects depending on how it is used:

        a.Normal Function: scope of this will be calling object.
        b.Arrow Function: scope of this will be the lexical scope (parent's scope)

    Here are the main rules that govern the value of `this` in different contexts:

     **this in global space.**
        console.log(this);

        o/p= window // it depands on the where you are checking. if it is in web o/p is window. node o/p global.

    **this inside a function.**
    function x(){
        console.log(this);
    }
    x();
       value of o/p dependes on strict mode = undefined
       value of o/p dependes on non strict mode = window

    **this in strict mode -(this substitution)**
        If the value of this keyword is undefined or null. this keyword will be replaced with globalObject only in non strict mode.

    **this keyword value depends on how the function is called (window) strict mode.**
    function x(){
        console.log(this);
    }
    x() = o/p = undefined
    window.x() // o/p = window object. because it is called to window

    **this inside a object's method**
        const obj = {
            a: 10,
            x: function() {
                console.log(this);
            }
        }
        obj.x(); // o/p = {a:10, x: f}. because the value of this keyword is obj. where this is present.

        const obj = {
            a: 10,
            x: function() {
                console.log(this.a);
            }
        }
        obj.x(); // o/p = 10. because the value of this keyword is obj and it is calling "a" value.

    **this inside a object's method and call apply bind methods (sharing methods)**

        const student = {
            name: "Akshay",
            printName: function(){
                console.log(this.name); // value of this is object
            }
        }
        student.printName();

        const student2 = {
            name: "Deepika",
        }
        student.printName.call(student2) // o/p= Deepak.bcz in call(student2) value of this = student2

    **this inside arrow function**

        const obj = {
            a:10,
            x: ()=> {
                console.log(this);
            }
        }
        obj.x(); //o/p = window object. bcz even it is inside the function. it behaves like it is in global space(it retains the this value of the enclosing lexical context)

        // What is lexical scope? A varable defined outside a function can be accessible inside another function defined after the variable declaration.

    **this inside nested arrow function**

        const obj2 = {
            a:20,
            x: function(){
                const y = () => {
                    console.log(this);
                }
                y();
            }
        }
        obj2.x(); // o/p = {a:20, x:f}. the value of this keyword in the arrow function is where the this is lexicaly enclosed.

    **this inside DOM elements.**

    <button onclick="alert(this)">Click Me </button>
    o/p = [object HTMLButtonElement] // reference to HTMLelement

    <button onclick="alert(this.tagName)">Click Me </button>
    o/p = BUTTON

Qns) Diff b/w call(), bind(), apply()?

    1. **call():**
    - using call method we can do the function borrowing

    let name = {
        firstName: "Nitish",
        lastName: "Ramesh",
    }

    let printDetails = function (hometown, state) {
            console.log(`${this.firstName} ${this.lastname} ${hometown}, ${state}`);
        }

    printDetails.call(name, "Pavagada", "Karnataka" )// output: Nitish Ramesh Pavagada Karnataka

    2. **apply():**
    - The only difference b/w call() and apply() method is the way we pass the arguments.
    - here we will pass the arguments as array insted of camma.

    // apply()
    printDetails.apply(name, ["Pavagada", "Karnataka"] )// output: Nitish Ramesh Pavagada Karnataka

    3. **bind():**
    - The bind() method looks exactly same as call() method. insted of directly calling method the bind() method binds method with object and returns the copy of the method.
    - it gives you a copy we can invoke it later.

    // bind()
    let result = printDetails.bind(name, "Pavagada", "Karnataka" );
    result(); // output: Nitish Ramesh Pavagada Karnataka

Qns) what is scope and what type of scope we have in js?

    - In JavaScript, the "scope" refers to the accessibility and visibility of variables within different parts of the code during runtime. It determines where variables and functions are accessible in your code and which part of the code can access them. JavaScript has two main types of scope:

    1. **Global Scope:**
    - Variables declared outside of any function or block have global scope. They can be accessed from anywhere within the JavaScript code, including inside functions and blocks.
    - Global variables become properties of the global object (e.g., `window` in a browser environment or `global` in Node.js).
    - Variables declared with `var` keyword outside of functions have global scope, while those declared with `let` or `const` have limited to the current script or module.

    var globalVar = 'I am global';

    function testFunction() {
        console.log(globalVar); // Accessible here
    }

    console.log(globalVar); // Accessible here

    2. **Local Scope:**
    - Variables declared inside a function or block have local scope and are only accessible within that function or block.
    - Functions create a new scope, so variables declared inside a function are not accessible outside of it.

    function testFunction() {
        var localVar = 'I am local';
        console.log(localVar); // Accessible here
    }

    console.log(localVar); // Not accessible here

    3. **Lexical Scope:**
        - A varable defined outside a function can be accessible inside another function defined after the variable declaration. The opposite is NOT true.

    function outerFunc() {
        let x = 5;
        let y = 6;
        function innerFunc(){
            console.log(x) // Accessible here
        }
        innerFunc();
    }
    // o/p: 5

Qns) what all different types of events we have in Js?
    - events like any activity we do with the mouse and keyboard
    - like we have the "onClick", "onChange", "onMousehover", "onMouseOut", "onKeydown", "onKeyUp", "onLoad"

Qns) what is onBlur event handler?

    - The `onBlur` event handler is a commonly used event in JavaScript that is triggered when an element loses focus. This typically happens when a user interacts with an input field or any other focusable element and then moves the focus away from that element, often by clicking outside of it or tabbing to another element.

    // Example 1
    import React, { useState } from 'react';

    const MyComponent = () => {
    const [value, setValue] = useState('');

    const handleBlur = (event) => {
        // Perform actions when the input field loses focus
        console.log('Input field lost focus');
    };

    return (
        <div>
        <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={handleBlur}
        />
        </div>
    );
    };

    export default MyComponent;

    // Example 2
    <input id="input" type="text" placeholder="enter number" value="Nitish" onBlur="hangleBlurr()"  >

    <script>
    function hangleBlurr() {
    let x = document.getElementById("input");
    x.value = x.value.toUpperCase();
    }
    </script>
    // o/p: NITISH
```

`````Js

Qns) How we will handle errors in Js?

    - to handling errors in JavaScript we have the

    1. **Try...Catch Blocks:**
    - Use a `try...catch` block to catch and handle exceptions that may occur within a block of code. This approach allows you to execute a block of code and catch any resulting errors, preventing them from crashing the application.

    try {
        // Code that may throw an error
    } catch (error) {
        // Handle the error
    }

    2. **Throwing Custom Errors:**
    - Use the `throw` statement to create custom error messages and throw them when specific conditions are met. This helps you provide meaningful error messages to users or developers when unexpected scenarios occur.

    if (condition) {
        throw new Error('Custom error message');
    }

Qns) can you tell me what is promise? can you give one example

    - Promise is like the enhanced version of the callback. It allows you to write asynchronous code in a more manageable and readable way, avoiding the use of deeply nested callbacks, also known as "callback hell."

    A promise has three possible states:

    1. Pending: Initial state, neither fulfilled nor rejected.
    2. Fulfilled: The operation completed successfully.
    3. Rejected: The operation failed.

    //Example of Promise

    function printString(str){
        return new Promise ((resolve, reject)=> {
            setTimeout(()=>{
                resolve("success")
                console.log(str);
            },1000)
        })
    }

    function printAll(){
        printString("a")
        .then((res)=>{
            console.log(res);
            return printString("b")
            .then((res)=>{
                console.log(res);
                return printString("c");
            })
        })
    }
    printAll();

    Promises are a fundamental part of modern JavaScript and are commonly used in various asynchronous operations, such as fetching data from a server, reading files, or making API calls, allowing you to write more maintainable and predictable asynchronous code.

Qns) what is prototype?

    -  a prototype in JavaScript is like a blueprint that describes the properties and behaviors of an object. It serves as a reference for other objects to inherit properties and methods from. When you create an object in JavaScript, it is linked to a prototype object. If the object does not have a property or method, JavaScript looks for it in the prototype of that object.

Qns) what is closure?

        - In JavaScript, a closure is a function that has access to its own scope, the outer function's scope, and the global scope. This means that a function defined inside another function has access to the variables declared in the outer function, even after the outer function has finished execution. Closures are an important and powerful feature of JavaScript, as they allow for data encapsulation and the creation of private variables.

    function outerFunction() {
        let a = 10;
        let b = 20;

        function innerFunction() {
            console.log(a+b); // Accessing outerVariable from the outer function
        }
        return innerFunction;
    }

    var closure = outerFunction(); // closure now holds a reference to the inner function
    closure(); // o/p: 30
```

````Js

    In the example above, the `innerFunction` has access to the `outerVariable` declared in the `outerFunction`, even after the `outerFunction` has finished executing. This behavior is possible due to closures in JavaScript. Closures are often used to create private variables and to control access to them within functions. They are widely used in JavaScript for various purposes, such as maintaining state in asynchronous operations, event handling, and more.

Qns) what is the use of the progressive web app?

        - Progressive Web Apps (PWAs) are a type of application software delivered through the web, built using common web technologies such as HTML, CSS, and JavaScript. They are designed to work on any platform that uses a standards-compliant browser, including both desktop and mobile devices. PWAs aim to combine the best features of the web and mobile applications, providing an enhanced user experience similar to native apps without the need for installation from an app store.

    Some key uses and benefits of Progressive Web Apps include:

    1. **Cross-Platform Compatibility:**
    2. **Offline Functionality:**
    3. **Responsive Design:**
    4. **App-Like Experience:**
    5. **Faster Loading and Performance:**
    6. **Cost-Effective Development:**

Qns) what is service worker in react ?

    - In React, a service worker is a script that runs in the background and is separate from the web page. It provides several features such as caching, handling push notifications, and enabling offline functionality. React applications can leverage service workers to improve performance and provide a better user experience, especially in scenarios with limited or intermittent network connectivity.

Qns) Have you worked on webaccess ability?

- Web accessibility refers to the practice of making websites and web applications usable by people of all abilities and disabilities. It ensures that people with disabilities can perceive, understand, navigate, interact with, and contribute to the web. Web accessibility also benefits others, including older people with changing abilities due to ageing.

Qns) without using the javascript can we able to validate the form?

    - Yes, you can validate a form without using JavaScript, although the validation will typically occur on the server side instead of in the client's browser. Server-side validation is crucial for ensuring the integrity of the data being submitted and provides an additional layer of security for your application.

    Common methods for validating a form without JavaScript include:

    1. **HTML5 Form Validation:** HTML5 provides built-in form validation attributes, such as `required`, `min`, `max`, `pattern`, and more, which allow you to specify certain validation rules for form inputs. These attributes can help ensure that the data entered by users meets specific criteria before being submitted. Although this is client-side validation, it can provide a basic level of validation without the need for JavaScript.

    2. **Server-Side Validation:** With server-side validation, you validate the form data on the server after the form is submitted. You can use various server-side technologies, such as PHP, Python, Ruby, Java, or .NET, to process the form data, check for any errors, and return appropriate error messages to the user if the data does not meet the specified criteria.

    While client-side validation is convenient for providing immediate feedback to users, server-side validation is essential for ensuring the security and integrity of your data. It is recommended to use a combination of both client-side and server-side validation to create a robust and secure form validation system.

Qns) what is W3c standards?

    - The World Wide Web Consortium (W3C) is an international community that develops open standards to ensure the long-term growth of the web. Founded and led by Tim Berners-Lee, the inventor of the World Wide Web, the W3C aims to develop protocols and guidelines that promote the evolution of the web and its interoperability. W3C standards are crucial for ensuring that the web remains open, accessible, and usable for all users.

Qns) can you name ES6 Features and which one you have used in your project?

    - ES6, also known as ECMAScript 2015, introduced significant enhancements to the JavaScript programming language. Some of the key features introduced in ES6 include:

    1. **Arrow Functions:** A concise syntax for writing anonymous functions, providing a shorter and cleaner way to define functions.

    2. **Let and Const:** Introduces block-scoped variables (`let`) and constants (`const`) that offer more predictable behavior than `var` in terms of scoping.

    3. **Template Literals:** A way to create strings that allows embedded expressions and multi-line strings, providing a more readable and flexible syntax for string manipulation.

    4. **Destructuring Assignment:** Enables extracting data from arrays and objects using a shorter syntax, making it easier to work with complex data structures.

    5. **Spread and Rest Operators:** The spread operator (`...`) allows an iterable such as an array to be expanded in places where zero or more arguments are expected. The rest parameter allows gathering remaining arguments into an array.

    6. **Classes:** ES6 introduced a more convenient syntax for creating objects and implementing inheritance through class-based object-oriented programming.

    7. **Promises:** A built-in mechanism for handling asynchronous operations, providing a cleaner and more robust way to work with asynchronous code compared to callbacks.

    8. **Modules:** ES6 introduced a standardized module format, allowing developers to create reusable code and better organize their JavaScript projects.

Qns) difference b/w var, let and const?

    - The main differences between `var`, `let`, and `const` in JavaScript are related to their scope, hoisting behavior, and reassignment capabilities:

    1. **var:**
    - Variables declared with `var` are function-scoped, meaning they are visible throughout the function in which they are declared.
    - `var` declarations are hoisted to the top of their scope, which means they can be accessed before they are declared.
    - `var` variables can be redeclared and updated within their scope.

    2. **let:**
    - Variables declared with `let` are block-scoped, meaning they are only accessible within the block in which they are defined (a block is typically a set of curly braces {}).
    - `let` declarations are not hoisted to the top of their scope, so they are not accessible before the declaration.
    - `let` variables can be updated but not redeclared within their scope.

    3. **const:**
    - Variables declared with `const` are also block-scoped and behave similarly to variables declared with `let` in terms of block scope and hoisting.
    - The key difference is that a variable declared with `const` cannot be reassigned after it has been initialized. However, for objects and arrays declared with `const`, their properties or elements can be modified.

    // var example
    var x = 10;
    if (true) {
        var x = 20;
    }
    console.log(x); // Output: 20

    // let example
    let y = 10;
    if (true) {
        let y = 20;
    }
    console.log(y); // Output: 10

    // const example
    const z = 10;
    // z = 20; // This will result in an error
    const obj = { name: 'John' };
    obj.name = 'Doe'; // This is valid
    console.log(obj.name); // Output: Doe

Qns) if i have declared array by const can we add or remove elements in array?

        - Yes, if you have declared an array using `const`, you can still add or remove elements within the array, but you cannot reassign the array itself to a different value. The `const` declaration only prevents the variable from being reassigned to a different array or value.

    Here is an example demonstrating how you can modify an array declared with `const` by adding or removing elements:

    const myArray = [1, 2, 3, 4];

    // Adding elements to the array
    myArray.push(5);
    console.log(myArray); // Output: [1, 2, 3, 4, 5]

    // Removing elements from the array
    myArray.pop();
    console.log(myArray); // Output: [1, 2, 3, 4]

    you cannot assign a new array to the `myArray` variable once it has been declared with `const`.

    myArray = [5,8,3] // it will show error for reassigned

Qns) can you show me an example of spread operator and rest operator?

    - Certainly! The spread operator and rest operator are both denoted by three consecutive dots (`...`), but they are used in different contexts.

    1. **Spread Operator:** The spread operator is used to expand elements of an array or object. It allows us to create copies of arrays or objects, merge them, or pass them as arguments to functions. Here's an example of the spread operator in action:

    // Spread operator example with arrays
    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
    const mergedArray = [...array1, ...array2];
    console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

    // Spread operator example with objects
    const obj1 = { name: 'John', age: 30 };
    const obj2 = { city: 'New York', country: 'USA' };
    const mergedObject = { ...obj1, ...obj2 };
    console.log(mergedObject); // Output: { name: 'John', age: 30, city: 'New York', country: 'USA' }

    2. **Rest Operator:** The rest operator is used to represent an indefinite number of arguments as an array. It is typically used in function parameters to capture multiple arguments into a single array. Here's an example of the rest operator in a function:


    // Rest operator example in a function
    function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
    }

    console.log(sum(1, 2, 3, 4, 5)); // Output: 15

    In this example, the `sum` function uses the rest operator `...numbers` to capture multiple arguments into an array. The `reduce` method is then used to sum up all the numbers in the array. The rest operator allows us to work with an indefinite number of arguments as an array within the function.

Qns) Javascript is single threaded or multi thread?

    - JavaScript is generally considered to be a single-threaded language, meaning it has a single call stack and one execution context at a time. This single-threaded nature is a fundamental characteristic of JavaScript, which was initially designed for simpler tasks such as form validation and simple interactions within web pages.

Qns) what is function currying and can you explain with an example?

    - Function currying is a technique in JavaScript where a function with multiple arguments is transformed into a sequence of nested functions, each taking a single argument. This allows you to create new functions by partially applying a set of arguments to the original function, resulting in a more specialized version of the original function.

    Adventage:-
     Currying breaks down a complex function into smaller, reusable units. Each curried function focuses on a single argument, making it easier to understand and maintain. These smaller functions can be reused across different parts of your codebase

   // Non-curried function
    function add(a, b, c) {
    return a + b + c;
    }

    // Curried version
    function curryAdd(a) {
    return function(b) {
        return function(c) {
        return a + b + c;
        };
    };
    }

    // Usage of the curried function
    const curriedAdd = curryAdd(2)(3)(4);
    console.log(curriedAdd); // Output: 9


    // Using the curried function for objects
    userObj = {
        name: "Nitish",
        age: 28,
    }

    function userInfo(obj){
        return function(userinfo){
            return obj[userinfo];
        }
    }
    let res = userInfo(userObj);
    console.log(res('name'))  // Output: Nitish

    /* This is the example of function currying using the bind method. we make a copy of multiply method and we create a more method out of it. by resetting the arguments inside the function  */

    let multiply = function(x,y){
        console.log(x*y);
    }

    /*  this is how bind method looks like inside
    let multiplyByTwo = function(y){
    let x = 2;
    console.log(x*y);
    }
    */

    let multiplyByTwo = multiply.bind(this, 2);
    multiplyByTwo(5);


    let multiplyByThree = multiply.bind(this, 3);
    multiplyByThree(5);


    Function currying is useful for creating reusable functions with fixed parameters, which can be helpful in scenarios where you have a set of functions that share common parameters but require varying degrees of specialization. It promotes code reusability and can make code more maintainable and easier to reason about.

Qns) can you tell me browser side storages?

    - Certainly! There are several types of browser-side storage mechanisms available in web development, each serving different purposes and use cases. Some common browser-side storage options include:

    1. **Cookies:** Cookies are small pieces of data stored in the user's browser by websites. They are primarily used for storing user preferences, session information, and tracking data. However, they have limitations on the amount of data they can store (usually up to 4KB) and can affect performance due to sending the data with every HTTP request.

    2. **Web Storage (localStorage and sessionStorage):** Web Storage provides a simple key-value storage mechanism that allows web applications to store data in the user's browser. The two types of Web Storage are localStorage and sessionStorage.
    - `localStorage` stores data without an expiration date, and the data persists even after the browser is closed.
    - `sessionStorage` stores data for a single session, and the data is cleared when the browser tab is closed.

    3. **IndexedDB:** IndexedDB is a more advanced client-side storage system that allows you to store larger amounts of structured data, including objects and files. It provides a powerful API for managing a full database in the browser, enabling you to perform complex queries and transactions.

Qns) difference b/w local storage and session storage?

    1. **Data Persistence:**
    - Local Storage: Data stored using local storage persists even after the browser is closed. It remains available until it is explicitly cleared by the user or the application.
    - Session Storage: Data stored using session storage is available only for the duration of the page session. It is cleared when the page session ends, typically when the browser is closed or the tab is closed.

    2. **Scope:**
    - Local Storage: Data stored in local storage is available across all tabs and windows within the same browser.
    - Session Storage: Data stored in session storage is specific to the particular tab that created the data. It is not shared between different tabs or windows.

    3. **Use Cases:**
    - Local Storage: Local storage is often used for persisting user settings, preferences, and other data that should be retained across browser sessions.
    - Session Storage: Session storage is commonly used for storing temporary data that is only relevant for the current browsing session, such as data that needs to be available during a specific browsing session but does not need to persist across multiple sessions.

    4. **Storage Limitations:**
    - Local Storage: The maximum size of data that can be stored in local storage is typically around 5 MB, although this limit may vary depending on the browser.
    - Session Storage: The storage limit for session storage is the same as that for local storage, generally around 5 MB.

Qns) Explain Higher Order Functions in javascript with example?

    - Higher-order functions are functions that can takes one or multiple functions as arguments or return functions as their results.
    This concept is an essential part of functional programming, allowing for the creation of more reusable and flexible code.

    // Example for multiple functions as arguments
    function printName(func, count){
        for(let i=0; i<= count; i++){
        func();
    }
    }

    let myName = function() {
        console.log("Nitish")
    }

    printName(myName, 3) // o/p = "Nitish" "Nitish" "Nitish"

    // Example for Returns a function
    function oddEvenFactory(request){
        if(request == 'odd'){
            let odd = function(n){
                console.log(!(n%2 == 0));
            }
            return odd;

        } else if(request == 'even'){
            let even = function(n){
                    console.log(n%2 == 0);
            }
            return even;

        } else {
            console.log("wrong input");
        }
    }

    let request = 'even';
    let result = oddEvenFactory(request);
    console.log(result(2)); // o/p = true

    //Example 3
    function x(){
    console.log("Namaste Nitish!")
    }

    function y(x){
        x();
    }

    y(x);
    /* x is the callback function and y is an higher order function  */

    //Example 4
    let radius = [2,3,5,6];
    const area = function(radius){
        return Math.PI * radius * radius;
    }

    const cicumference = function(radius){
        return 2 * Math.PI * radius;
    }

    const diameter = function(radius){
        return 2 * radius;
    }

    const calculate = function (arr, logic){
        const output = [];
    for(let i = 0; i<arr.length;i++){
        output.push(logic(arr[i]));
    }
    return output;
    }

    console.log(calculate(radius, area));
    console.log(calculate(radius, cicumference));
    console.log(calculate(radius, diameter));


Qns) what is Lexical scoping in the javascript with example?

    - Lexical scope means any inner function can have access to its outer scope variables.

    //global scope
    const username = "Nitish";

    function callMe() {
    // callMe function scope
    console.log('callme:', `calling ${username}`)
    // callMe function scope
    }

    //global scope
    callMe();
    console.log('global:', `User name is ${username}` )


o/p = "callme:", "calling Nitish"
"global:", "User name is Nitish"


Qns) What is deep copy and shallow copy in Javascript?

- A deep copy is a copy that creates a new object with new memory locations for all of its properties and nested objects or arrays. It means that if you make changes to the copied object or any of its nested objects or arrays, it will not affect the original object.

  Example: const deepCopy = JSON.parse(JSON.stringify(originalObj));

        Using spread operator
        Using Object.assign operator
        Using JSON.stringify and JSON.parse

  Shallow Copy:

  - Top-level properties or elements are copied to the new object or array.
  - Nested objects or arrays are referenced, not copied.
  - Changes to nested objects or arrays in the shallow copy will affect the original object or array.

  Example: // Original array
  const originalArray = [1, 2, 3, [4, 5]];

            // Shallow copy using slice()
            const shallowCopyArray = originalArray.slice();

            // Modifying the shallow copy
            shallowCopyArray[3].push(6);

            console.log(originalArray); // Output: [1, 2, 3, [4, 5, 6]]

Qns) What is  callback function,promise, async await in Javascript?

    - In JavaScript,  `callback functions`, `Promise` and `async/await` are all mechanisms for managing asynchronous code execution. They help in dealing with tasks that take some time to complete, such as fetching data from a server, reading files, or performing other operations that might be time-consuming.

    ### 1. Callback Functions:
    A callback function is a function that is passed as an argument to another function and is executed after the completion of some operation. Callbacks are a fundamental part of JavaScript and are commonly used in asynchronous programming.

    Example of a callback function and callback hell.

    function printString(str, callback){
        setTimeout(()=>{
            console.log(str);
            if(callback){
                callback();
            }
        },1000)
    }

    function printAll(){
        printString("a", ()=>{
            printString("b", ()=>{
                printString("c")
            })
        })
    }

    printAll();

    ### 2. Promise:
    A `Promise` is an object representing the eventual completion or failure of an asynchronous operation. It allows you to handle asynchronous operations more easily and with more control over the flow of your code.

    Example of using a Promise:

    function printString(str){
    return new Promise ((resolve, reject)=> {
        setTimeout(()=>{
            resolve("success")
            console.log(str);
        },1000)
    })
    }

    function printAll(){
        printString("a")
        .then((res)=>{
            console.log(res);
            return printString("b")
            .then((res)=>{
                console.log(res);
                return printString("c");
            })
        })
    }
    printAll();

    ### 3. Async/Await:
    `Async` and `await` are keywords introduced in ES8/ES2017 that provide a more elegant way to write asynchronous code and handle promises. The `async` keyword is used to define an asynchronous function, and the `await` keyword is used to wait for a Promise to resolve before proceeding further in the code.

    Example of using async/await:

    function printString(string){
    return new Promise((resolve, reject) => {
        setTimeout(
        () => {
        console.log(string)
        resolve()
        }, 1000

        )
    })
    }

    async function printAll(){
    await printString("A")
    await printString("B")
    await printString("C")
    }
    printAll()


    ### Comparison:
    - **Callbacks** are the traditional way of handling asynchronous operations in JavaScript, but they can lead to "callback hell" when dealing with multiple nested callbacks.
    - **Promises** provide a cleaner and more organized way to handle asynchronous code, allowing you to chain multiple asynchronous operations.
    - **Async/Await** is the modern approach to handling asynchronous operations, providing cleaner and more readable code by allowing you to write asynchronous code in a synchronous-like manner.

    In summary, `Promises` and `Async/Await` are more preferred and modern ways to handle asynchronous operations in JavaScript, offering better readability and maintainability compared to traditional callback functions.

Qns) What is difference between promise and callback in Javascript?

//ref= https://medium.com/front-end-weekly/callbacks-promises-and-async-await-ad4756e01d90

- In JavaScript, both promises and callbacks are used to handle asynchronous code execution, but they have different approaches and patterns.

  ### Callbacks:

  - **Definition**: A callback is a function that is passed as an argument to another function and is executed after the completion of some operation.
  - **Usage**: Callbacks are the traditional way of handling asynchronous operations in JavaScript.
  - **Example**:

  function fetchData(callback) {
  // Simulate fetching data from a server after 2 seconds
  setTimeout(() => {
  const data = { name: "John", age: 30 };
  callback(data);
  }, 2000);
  }

  // Using the fetchData function with a callback
  fetchData((data) => {
  console.log(data);
  });

  - **Pros**:
  - They are simple and easy to understand.
  - They are widely supported and have been around in JavaScript for a long time.

  - **Cons**:
  - Nested callbacks can lead to "callback hell" or "pyramid of doom", making the code difficult to read and maintain.
  - Error handling can become complex when dealing with multiple nested callbacks.

  ### Promises:

  - **Definition**: A promise is an object representing the eventual completion or failure of an asynchronous operation.
  - **Usage**: Promises provide a cleaner and more organized way to handle asynchronous code.
  - **Example**:

  function fetchData() {
  return new Promise((resolve, reject) => {
  // Simulate fetching data from a server after 2 seconds
  setTimeout(() => {
  const data = { name: "John", age: 30 };
  resolve(data);
  }, 2000);
  });
  }

  // Using the fetchData function with a Promise
  fetchData()
  .then((data) => {
  console.log(data);
  })
  .catch((error) => {
  console.error(error);
  });

  - **Pros**:
  - They allow chaining of multiple asynchronous operations, making the code more readable.
  - Error handling is straightforward using `.catch()`.

  - **Cons**:
  - They require familiarity with the Promise API.
  - They can sometimes be more complex to understand for beginners.

Qns) Difference between Async/Await and Generators usage to achieve the same functionality?

        -Async/await and generators are both features in JavaScript that help with asynchronous programming, but they have different use cases, syntax, and behavior. Here are the key differences:

    ### Async/Await:

    1. **Syntax:**
    - `async/await` provides a more straightforward and synchronous-like syntax for dealing with asynchronous code. It uses the `async` keyword to define an asynchronous function and the `await` keyword to pause execution until a promise is resolved.

    async function fetchData() {
        try {
        const result = await fetch('https://api.example.com/data');
        const data = await result.json();
        console.log(data);
        } catch (error) {
        console.error('Error:', error);
        }
    }

    fetchData();

    2. **Error Handling:**
    - Error handling in `async/await` is done using traditional `try/catch` blocks, making it similar to synchronous error handling.

    3. **Control Flow:**
    - `async/await` simplifies the control flow by allowing developers to write asynchronous code in a more linear and readable manner.

    4. **Return Values:**
    - An `async` function always returns a promise, and the resolved value of the promise is the value that the `async` function returns.

    ### Generators:

    1. **Syntax:**
    - Generators use the `function*` syntax, and they produce iterators. The `yield` keyword is used to pause and resume the execution of the generator function.

    function* fetchData() {
        try {
        const result = yield fetch('https://api.example.com/data');
        const data = yield result.json();
        console.log(data);
        } catch (error) {
        console.error('Error:', error);
        }
    }

    const generator = fetchData();
    const promise = generator.next().value;

    promise.then(result => generator.next(result).value)
            .then(data => generator.next(data));

    2. **Error Handling:**
    - Error handling in generators is done using `try/catch` blocks within the generator function.

    3. **Control Flow:**
    - Generators provide more manual control over the flow of execution. The developer needs to manually call `next()` on the iterator to advance to the next `yield`.

    4. **Pausing Execution:**
    - The `yield` keyword in generators allows the function to pause and resume, making it useful for handling asynchronous operations in a sequential manner.

    ### Summary:
    - `async/await` is generally preferred for its simplicity and readability, especially for linear asynchronous operations.
    - Generators offer more manual control over asynchronous code but might be considered more complex and less readable in typical scenarios.
    - `async/await` is widely adopted in modern JavaScript for handling promises and asynchronous code. It's well-supported and is the standard approach in many asynchronous scenarios.

Qns) What is Event propagation? event bubbling and event capturing in Javascript?

    - Event propagation in JavaScript is a mechanism that dictates how events travel through the Document Object Model (DOM) when an event occurs, eventually reaching the target element and possibly executing further actions based on the event.

- **Event bubbling** and **event capturing** are two mechanisms that describe the order in which events are handled as they propagate through the DOM (Document Object Model) hierarchy. These mechanisms are essential to understand when working with event handling in JavaScript.

  ### Event Bubbling:

  - **Definition**: Event bubbling is the default behavior in which an event starts at the target element and then bubbles up through its ancestors in the DOM hierarchy.
  - **Flow Direction**: From the target element to its parent elements.
  - **Example**:

    <div id="parent">
        <button id="child">Click me!</button>
    </div>

    <script>
        const parent = document.getElementById('parent');
        const child = document.getElementById('child');

        child.addEventListener('click', function() {
        console.log('Child clicked');
        });

        parent.addEventListener('click', function() {
        console.log('Parent clicked');
        });
    </script>

  - When you click the button (`child`), the event handler for the button fires first (`Child clicked`), then the event bubbles up to its parent (`parent`), firing the parent's event handler next (`Parent clicked`).

  ### Event Capturing (or Trickling):

  - **Definition**: Event capturing is the opposite of event bubbling. The event starts at the top of the DOM hierarchy and trickles down to the target element.
  - **Flow Direction**: From the top-most parent element to the target element.
  - **Example**:

    <div id="parent">
        <button id="child">Click me!</button>
    </div>

    <script>
        const parent = document.getElementById('parent');
        const child = document.getElementById('child');

        child.addEventListener('click', function() {
        console.log('Child clicked');
        }, true);

        parent.addEventListener('click', function() {
        console.log('Parent clicked');
        }, true);
    </script>

  - In this example, the `true` as the third argument to `addEventListener` enables event capturing for both `parent` and `child` elements.
  - When you click the button (`child`), the event starts from the top (`parent`), firing the parent's event handler first (`Parent clicked`), then trickles down to the target element (`child`), firing the child's event handler next (`Child clicked`).

  ### Order of Execution:

  - **Event Capturing**: Events are triggered from the top of the DOM hierarchy to the target element.
  - **Event Bubbling**: Events are triggered from the target element to the top of the DOM hierarchy.

  ### Usage:

  - **Event Bubbling**:
  - Often used because it is the default behavior.
  - Allows handling events in the order of their appearance in the DOM.
  - Useful when you want a single event handler on a parent element to manage events for multiple child elements.

  - **Event Capturing**:
  - Less commonly used but can be helpful in certain situations.
  - Allows you to handle events at a higher level in the DOM hierarchy before they reach the target element.
  - Useful for global event handling or when you want to prevent certain events from reaching the target element.

  ### Controlling Event Flow:

  - You can control whether event capturing or event bubbling is used by passing a third argument to `addEventListener`.
  - `false` (default): Event bubbling.
  - `true`: Event capturing.

  ### Summary:

  - **Event Bubbling**: Events start at the target element and propagate up through its ancestors.
  - **Event Capturing**: Events start at the top of the DOM hierarchy and propagate down to the target element.
  - Both mechanisms are important to understand when working with event handling in JavaScript, especially when dealing with complex DOM structures or multiple event handlers.

Qns) How many way to create object in Javascript?

    - In JavaScript, there are several ways to create objects. Here are some common methods:

    ### 1. Object Literal:
    The most common and simplest way to create an object is using the object literal syntax `{}`.

    const person = {
    name: "John",
    age: 30,
    city: "New York"
    };

    console.log(person.name); // Output: John

    ### 2. Constructor Function:
    You can create objects using constructor functions, which are regular functions that are used with the `new` keyword.

    function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
    }

    const person1 = new Person("John", 30, "New York");

    console.log(person1.age); // Output: 30

    ### 3. Object.create() Method:
    The `Object.create()` method allows you to create a new object with the specified prototype object.

    const personPrototype = {
    greet: function() {
        return `Hello, my name is ${this.name}.`;
    }
    };

    const person = Object.create(personPrototype);
    person.name = "John";

    console.log(person.greet()); // Output: Hello, my name is John.

    ### 4. ES6 Classes:
    With ES6, JavaScript introduced the class syntax, which is syntactical sugar over the prototype-based inheritance.

    class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }

    greet() {
        return `Hello, my name is ${this.name}.`;
    }
    }

    const person1 = new Person("John", 30, "New York");

    console.log(person1.greet()); // Output: Hello, my name is John.

    ### 5. Factory Functions:
    Factory functions are functions that return an object.

    function createPerson(name, age, city) {
    return {
        name: name,
        age: age,
        city: city,
        greet: function() {
        return `Hello, my name is ${this.name}.`;
        }
    };
    }

    const person1 = createPerson("John", 30, "New York");

    console.log(person1.greet()); // Output: Hello, my name is John.

    ### 6. Singleton Pattern:
    Singleton pattern ensures that a class has only one instance and provides a global point of access to it.

    const singleton = (function() {
    let instance;

    function createInstance() {
        const object = new Object("Singleton Instance");
        return object;
    }

    return {
        getInstance: function() {
        if (!instance) {
            instance = createInstance();
        }
        return instance;
        }
    };
    })();

    const instance1 = singleton.getInstance();
    const instance2 = singleton.getInstance();

    console.log(instance1 === instance2); // Output: true

    These are some common methods to create objects in JavaScript. The choice of method depends on your specific requirements, such as the need for inheritance, encapsulation, or the pattern you want to implement in your code.

Qns) What is prototype inheritance in Javascript?

- Prototypal inheritance is a dynamic mechanism in JavaScript, where objects inherit properties and methods from other objects. Every object in JavaScript has an internal link to another object called its prototype, which serves as a blueprint for shared properties and behaviors

Qns) What is typescript?

- TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript that adds optional static typing and other features to the language. TypeScript is designed for large-scale applications, especially those that are developed collaboratively or maintained over a long period.

  Key Features of TypeScript:

- TypeScript allows you to specify types for variables, function parameters, and return values.
- Helps catch errors during development and provides better code documentation.

Qns) What are the array method, string method?

### Array Methods in JavaScript:

Here are some common array methods in JavaScript:

1. **`push()`**: Adds one or more elements to the end of an array and returns the new length of the array.

2. **`pop()`**: Removes the last element from an array and returns that element.

3. **`shift()`**: Removes the first element from an array and returns that element.

4. **`unshift()`**: Adds one or more elements to the beginning of an array and returns the new length of the array.

5. **`slice()`**: Returns a shallow copy of a portion of an array into a new array object.

6. **`splice()`**: Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

7. **`concat()`**: Returns a new array combining the array on which it is called with the array(s) and/or value(s) provided as arguments.

8. **`forEach()`**: Calls a function for each element in the array.

9. **`map()`**: Creates a new array with the results of calling a provided function on every element in the array.

10. **`filter()`**: Creates a new array with all elements that pass the test implemented by the provided function.

11. **`reduce()`**: Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

### String Methods in JavaScript:

Here are some common string methods in JavaScript:

1. **`toUpperCase()`**: Converts a string to uppercase.

2. **`toLowerCase()`**: Converts a string to lowercase.

3. **`charAt()`**: Returns the character at the specified index.

4. **`indexOf()`**: Returns the index of the first occurrence of a specified value in a string.

5. **`substring()`**: Returns a new string containing a portion of the original string, specified by start and end indices.

6. **`split()`**: Splits a string into an array of substrings based on a specified separator.

7. **`replace()`**: Replaces a specified value with another value in a string.

Qns) What is difference between java and javascript?

- Java and JavaScript are two distinct programming languages with different origins, purposes, and syntax. Here are some key differences between Java and JavaScript:

  ### Origin and History:

  - **Java**:
  - Developed by Sun Microsystems (now owned by Oracle Corporation) in 1995.
  - Originally designed for developing applications for embedded systems and desktop computers.
  - Later became popular for server-side applications, web applications (Java Servlets, JSP), and Android app development.

  - **JavaScript**:
  - Developed by Brendan Eich at Netscape in 1995.
  - Originally created as a scripting language to add interactivity to web pages in the Netscape Navigator browser.
  - Evolved into a full-fledged programming language used for both front-end (client-side) and back-end (server-side) web development.

  ### Type:

  - **Java**:
  - Statically typed language: Requires explicit declaration of data types for variables.
  - Strongly typed language: Requires strict adherence to data type rules.

  - **JavaScript**:
  - Dynamically typed language: Variables are not assigned a specific data type at declaration.
  - Weakly typed language: Allows for more flexibility in type conversions and operations.

  ### Syntax and Usage:

  - **Java**:
  - C-based syntax: Java syntax is similar to C and C++, making it familiar to developers of those languages.
  - Used for building standalone applications, web applications (using Java EE), mobile applications (Android), enterprise software, and more.
  - Requires compilation of source code into bytecode, which runs on the Java Virtual Machine (JVM).

  - **JavaScript**:
  - C-like syntax: JavaScript syntax is similar to C and Java, but it has its own unique features.
  - Used primarily for front-end web development to create interactive and dynamic web pages.
  - Also used for back-end development (Node.js), mobile app development (React Native, Ionic), desktop app development (Electron), and more.
  - Interpreted language: JavaScript code is executed by the browser or JavaScript engine directly without compilation.

  ### Inheritance and OOP:

  - **Java**:
  - Class-based inheritance: Uses classes and objects for defining and instantiating.
  - Supports traditional Object-Oriented Programming (OOP) principles like encapsulation, inheritance, and polymorphism.

  - **JavaScript**:
  - Prototype-based inheritance: Uses prototypes to create objects and link them together.
  - Prototypal OOP: Objects can inherit properties and methods directly from other objects.

  ### Example Differences:

  - **Java**:

  // Java example
  public class HelloWorld {
  public static void main(String[] args) {
  System.out.println("Hello, World!");
  }
  }

  - **JavaScript**:

  // JavaScript example
  console.log("Hello, World!");

  ### Summary:

  - Java is a statically typed, class-based, object-oriented programming language primarily used for enterprise-level applications, server-side development, and Android app development.
  - JavaScript is a dynamically typed, prototype-based, multi-paradigm programming language mainly used for front-end web development, but also widely used for back-end development, mobile app development, and more.

  While Java and JavaScript share some similarities in syntax due to their C-based roots, they are distinct languages designed for different purposes and environments.

Qns) What is throttling and debouncing in js?

- **Throttling** and **debouncing** are two techniques used in JavaScript to improve the performance and efficiency of functions that are repeatedly called, especially in response to events such as scrolling, resizing, or typing. They help in controlling the rate at which certain functions are executed.

  ### Throttling:

  Throttling limits the rate at which a function is executed. It ensures that the function is not called more often than a specified delay between calls.

  - **Usage**:
  - Used when you want to limit the number of times a function is executed, especially for performance optimization.
  - Useful for tasks like resizing events, scroll events, or any event that triggers frequently.

  function throttle(func, delay) {
  let timer;
  return function() {
  if (!timer) {
  timer = setTimeout(() => {
  func.apply(this, arguments);
  timer = null;
  }, delay);
  }
  };
  }

  const throttledFunc = throttle(() => {
  console.log("Throttled function executed");
  }, 1000);

  window.addEventListener("scroll", throttledFunc);

  In this example, the `throttle` function ensures that the function provided as an argument (`func`) is executed at most once every `delay` milliseconds. If the function is called more frequently than that, it will be "throttled" and its execution will be delayed until the next available interval.

  ### Debouncing:

  Debouncing ensures that a function is not called until a certain amount of time has passed without it being called. It postpones the execution of a function until after a specified delay.

  - **Usage**:
  - Used when you want to wait for some time after the last event before performing an action.
  - Useful for tasks like search suggestions, auto-saving forms, or any action that should only occur after a user has stopped typing or interacting.

  function debounce(func, delay) {
  let timer;
  return function() {
  clearTimeout(timer);
  timer = setTimeout(() => {
  func.apply(this, arguments);
  }, delay);
  };
  }

  const debouncedFunc = debounce(() => {
  console.log("Debounced function executed");
  }, 1000);

  input.addEventListener("input", debouncedFunc);

  In this example, the `debounce` function ensures that the function provided as an argument (`func`) is not executed until `delay` milliseconds have passed without the function being called again. If the function is called multiple times within the specified delay, the timer is reset, and the function execution is postponed.

  ### Comparison:

  - **Throttling**:
  - Ensures a function is not called more frequently than a specified delay.
  - Guarantees that the function will be executed at a regular interval, even if the triggering event occurs more frequently.
  - Useful for tasks where you want to limit the rate of execution.

  - **Debouncing**:
  - Ensures a function is not called until a specified delay has passed without it being called.
  - Guarantees that the function will only be executed once after the last event in a series of frequent events.
  - Useful for tasks where you want to wait for a pause in events before performing an action.

  Both throttling and debouncing are useful techniques to manage how often certain functions are executed, improving the performance and efficiency of web applications. The choice between them depends on the specific requirements of the task at hand.

Qns) What is Null and undefined in javascript?

- Null in JavaScript means an empty value and is also a primitive type in JavaScript. The variable which has been assigned as null contains no value

- Undefined means a variable has been declared but has yet not been assigned a value.

Qns) What are the falsy values in javascript?

    - false, 0, " ", null, undefined, NaN.

Qns) What is execution context, event loop, stack, call queue, microtask queue in Javascript?

- Understanding the JavaScript event loop, execution context, stack, call queue, and microtask queue is crucial for understanding how JavaScript manages asynchronous operations and executes code. Let's break down each of these concepts:

  ### 1. Execution Context:

  - **Definition**: The execution context is the environment in which JavaScript code is executed. It includes variables, functions, scope chains, and the value of the `this` keyword.
  - **Types**:
  - **Global Execution Context**: The default context where code that is not inside any function is executed.
  - **Function Execution Context**: Created every time a function is called, containing local variables, arguments, and a reference to the outer lexical environment.
  - **Eval Function Execution Context**: Created when code is executed inside the `eval()` function.
  - **Scope Chain**: Determines the accessibility of variables and functions within an execution context.
  - **`this` Keyword**: Refers to the object to which a function belongs when it is called.

  ### 2. Stack (Call Stack):

  - **Definition**: The stack is a data structure that stores function calls in the order they are called.
  - **How it Works**:
  - When a function is called, it is added to the top of the stack.
  - When a function returns, it is removed from the top of the stack.
  - JavaScript is single-threaded, meaning it can only do one thing at a time, which is managed by the stack.
  - **Example**:

  function firstFunction() {
  secondFunction();
  }

  function secondFunction() {
  thirdFunction();
  }

  function thirdFunction() {
  // Do something
  }

  firstFunction();

  - When `firstFunction` is called, it is added to the stack.
  - Inside `firstFunction`, `secondFunction` is called and added to the stack.
  - Inside `secondFunction`, `thirdFunction` is called and added to the stack.
  - When `thirdFunction` completes, it is removed from the stack.
  - Then `secondFunction` completes and is removed.
  - Finally, `firstFunction` completes and is removed.

  ### 3. Event Loop:

  - **Definition**: The event loop is a mechanism in JavaScript that handles asynchronous operations and ensures that the code continues to run without getting blocked.
  - **How it Works**:
  - Monitors the Call Stack and the Callback Queue.
  - When the Call Stack is empty, it takes the first function from the Callback Queue and adds it to the Call Stack.
  - This process continues, allowing asynchronous tasks to be executed when they are complete.
  - **Example**:

  console.log("Start");

  setTimeout(() => {
  console.log("Async task");
  }, 2000);

  console.log("End");

  - Outputs: "Start", "End", "Async task" (after 2 seconds).
  - The `setTimeout` function is added to the Callback Queue after 2 seconds, then executed when the Call Stack is empty.

  ### 4. Call Queue (Task Queue):

  - **Definition**: The call queue holds tasks (callbacks) that are ready to be executed.
  - **How it Works**:
  - Tasks from event listeners, timers (e.g., `setTimeout`), and other asynchronous operations are placed in the queue when they are ready to be executed.
  - The event loop checks the Call Stack and, when empty, moves tasks from the Call Queue to the Call Stack for execution.

  ### 5. Microtask Queue (Job Queue):

  - **Definition**: The microtask queue holds tasks (microtasks) that should execute immediately after the currently executing script completes.
  - **How it Works**:
  - Microtasks include `Promise` callbacks (resolved or rejected), `process.nextTick` in Node.js, and `queueMicrotask` in modern browsers.
  - Microtasks have higher priority than tasks in the Call Queue.
  - Microtasks are executed before the next event loop iteration.

  ### Summary:

  - **Execution Context**: The environment in which JavaScript code is executed, including variables, functions, and `this`.
  - **Stack (Call Stack)**: Stores function calls and manages the order of execution.
  - **Event Loop**: Manages the Call Stack and the Callback Queue, ensuring that asynchronous tasks are executed.
  - **Call Queue (Task Queue)**: Holds tasks (callbacks) that are ready to be executed after the Call Stack is empty.
  - **Microtask Queue (Job Queue)**: Holds tasks (microtasks) that should execute immediately after the current script completes, with higher priority than tasks in the Call Queue.

  Understanding these concepts is crucial for writing efficient JavaScript code, especially when dealing with asynchronous operations, event handling, and managing the order of execution.

Qns) What is setTimeOut and setInterval in Javascript?

- `setTimeout` and `setInterval` are two functions in JavaScript used for executing code asynchronously after a specified delay or at regular intervals. They are commonly used for animations, timers, and executing tasks after a certain period.

  ### 1. setTimeout:

  - **Definition**: `setTimeout` is a function that executes a specified function or code block once after a specified delay in milliseconds.
  - **Syntax**:

  const timeoutID = setTimeout(function, delay, arg1, arg2, ...);

  - `function`: The function to be executed after the delay.
  - `delay`: The time in milliseconds to wait before executing the function.
  - `arg1, arg2, ...`: Optional arguments to pass to the function.
  - **Usage**:

  console.log("Start");

  setTimeout(() => {
  console.log("Delayed task executed");
  }, 2000);

  console.log("End");

  - Outputs: "Start", "End", "Delayed task executed" (after 2 seconds).
  - The function passed to `setTimeout` is executed after the specified delay.

  ### 2. setInterval:

  - **Definition**: `setInterval` is a function that executes a specified function or code block repeatedly at specified intervals.
  - **Syntax**:

  const intervalID = setInterval(function, delay, arg1, arg2, ...);

  - `function`: The function to be executed repeatedly.
  - `delay`: The time in milliseconds between each execution of the function.
  - `arg1, arg2, ...`: Optional arguments to pass to the function.
  - **Usage**:

  let count = 0;

  const intervalID = setInterval(() => {
  console.log(`Interval task executed ${count} times`);
  count++;

        if (count === 5) {
        clearInterval(intervalID); // Stop the interval after 5 executions
        }

  }, 1000);

  - Outputs: "Interval task executed 0 times", "Interval task executed 1 times", ..., "Interval task executed 4 times".
  - The function passed to `setInterval` is executed repeatedly at the specified interval until `clearInterval` is called.

  ### Difference:

  - **setTimeout**:
  - Executes a function once after a specified delay.
  - Use when you want to execute code only once after a certain delay.
  - To stop the execution, you need to use `clearTimeout` with the timeout ID returned by `setTimeout`.

  - **setInterval**:
  - Executes a function repeatedly at specified intervals.
  - Use when you want to execute code repeatedly at regular intervals.
  - To stop the execution, you need to use `clearInterval` with the interval ID returned by `setInterval`.

  ### Notes:

  - Both `setTimeout` and `setInterval` return a unique ID (`timeoutID` or `intervalID`) that can be used to cancel the execution using `clearTimeout` or `clearInterval`.
  - It's important to manage memory and performance when using `setInterval`, especially if the interval is short or the function takes a long time to execute. Always clear the interval when it's no longer needed to prevent memory leaks.

  In summary, `setTimeout` and `setInterval` are essential functions in JavaScript for executing code asynchronously after a delay or at regular intervals. They are commonly used for animations, periodic tasks, and other time-based operations in web development.

Qns) What is object.seal and object.freeze in Javascript?

- In JavaScript, `Object.seal()` and `Object.freeze()` are methods used to control the modification of objects, but they have different levels of restriction. Let's explore each of them:

  ### 1. `Object.seal(obj)`:

  - **Definition**: The `Object.seal()` method seals an object, preventing new properties from being added or existing properties from being deleted. However, you can still modify the values of existing properties.

  - **Usage**:
  - Used when you want to prevent the addition or removal of properties, but still allow the modification of existing properties.

  - **Example**:

  const person = {
  name: "John",
  age: 30
  };

  Object.seal(person);

  person.age = 31; // Allowed
  person.city = "New York"; // Not allowed

  delete person.name; // Not allowed

  console.log(person); // { name: 'John', age: 31 }

  - **Behavior**:
  - Modifying the values of existing properties is allowed.
  - Adding new properties or deleting existing properties is not allowed.
  - The `Object.seal()` method does not affect the attributes of the existing properties (e.g., `writable`, `configurable`).

  ### 2. `Object.freeze(obj)`:

  - **Definition**: The `Object.freeze()` method freezes an object, preventing any changes to its properties. This includes preventing the addition, deletion, or modification of properties.

  - **Usage**:
  - Used when you want to completely prevent any changes to an object and its properties.

  - **Example**:

  const person = {
  name: "John",
  age: 30
  };

  Object.freeze(person);

  person.age = 31; // Not allowed
  person.city = "New York"; // Not allowed

  delete person.name; // Not allowed

  console.log(person); // { name: 'John', age: 30 }

  - **Behavior**:
  - Modifying the values of existing properties is not allowed.
  - Adding new properties or deleting existing properties is not allowed.
  - The `Object.freeze()` method also sets all existing properties as non-writable and non-configurable.

  ### Differences:

  - **Modification**:
  - `Object.seal()`: Allows modification of existing property values, but does not allow addition or deletion of properties.
  - `Object.freeze()`: Prevents any modifications to existing properties, as well as addition or deletion of properties.

  - **Use Case**:
  - Use `Object.seal()` when you want to allow modification of existing properties but prevent addition or deletion of properties.
  - Use `Object.freeze()` when you want to completely lock down an object, preventing any changes to its properties.

  - **Impact**:
  - `Object.seal()`: Less restrictive, allowing some level of modification.
  - `Object.freeze()`: More restrictive, completely preventing any modifications.

  ### Summary:

  - `Object.seal()` and `Object.freeze()` are used to restrict modifications to objects in JavaScript.
  - `Object.seal(obj)` seals an object, allowing modification of existing properties but preventing addition or deletion of properties.
  - `Object.freeze(obj)` freezes an object, preventing any changes to its properties, including modification, addition, or deletion.
  - Use `Object.seal()` when you want to allow some modifications but restrict property addition or deletion.
  - Use `Object.freeze()` when you want to completely lock down an object, preventing any changes to its properties.

Qns) What is difference between map and set in Javascript?

- In JavaScript, both `Map` and `Set` are data structures introduced in ES6 (ECMAScript 2015) for storing collections of unique values, but they have different characteristics and use cases. Here are the main differences between `Map` and `Set`:

  ### Map:

  - **Key-Value Pairs**: `Map` is a collection of key-value pairs, where each key can be any value (including objects, primitives, or functions).
  - **Order**: Maintains the insertion order of elements, so the order in which elements are added is preserved.
  - **Duplicates**: Allows duplicate values, but keys must be unique. If a duplicate key is added, it will overwrite the existing value.
  - **Iterability**: Supports iterators, making it easy to iterate over keys, values, or entries (key-value pairs).
  - **Size**: Has a `size` property that indicates the number of key-value pairs in the `Map`.
  - **Usage**:
  - Useful for storing data with custom keys, such as dictionaries or associative arrays.
  - Commonly used when the relationship between keys and values is important and needs to be maintained.

  #### Example:

  const myMap = new Map();

  myMap.set("key1", "value1");
  myMap.set("key2", "value2");
  myMap.set("key3", "value3");

  console.log(myMap.get("key2")); // Output: "value2"
  console.log(myMap.size); // Output: 3

  for (const [key, value] of myMap.entries()) {
  console.log(`${key}: ${value}`);
  }

  ### Set:

  - **Unique Values**: `Set` is a collection of unique values, meaning it cannot contain duplicate values.
  - **Order**: Does not maintain the insertion order of elements. The order of elements is based on the order in which they are added, but it's not guaranteed.
  - **Values as Keys**: In a `Set`, the value itself is both the key and the value.
  - **Iterability**: Supports iterators, allowing you to loop through the values.
  - **Size**: Has a `size` property indicating the number of unique values in the `Set`.
  - **Usage**:
  - Used when you need to store a collection of unique values and don't need key-value pairs.
  - Useful for removing duplicates from an array or checking for the existence of a value in a collection.

  #### Example:

  const mySet = new Set();

  mySet.add("value1");
  mySet.add("value2");
  mySet.add("value3");
  mySet.add("value2"); // Duplicate, will be ignored

  console.log(mySet.has("value2")); // Output: true
  console.log(mySet.size); // Output: 3

  for (const value of mySet) {
  console.log(value);
  }

  ### Comparison:

  - **Use Case**:
  - Use `Map` when you need to associate values with keys and maintain the order of insertion.
  - Use `Set` when you need to store a collection of unique values and order is not important.
  - **Duplicates**:
  - `Map` allows duplicate values, but keys must be unique.
  - `Set` does not allow duplicate values, ensuring that each value appears only once in the collection.
  - **Access**:
  - `Map` allows you to access values using their keys.
  - `Set` does not have keys; you can only check for the existence of a value in the set.
  - **Iterability**:
  - Both `Map` and `Set` support iterators for easy looping through their elements.

  ### Summary:

  - `Map` is a collection of key-value pairs, allowing duplicates for values but requiring unique keys.
  - `Set` is a collection of unique values, ensuring that each value appears only once.
  - Use `Map` when you need to associate values with custom keys and maintain the order of insertion.
  - Use `Set` when you need to store a collection of unique values and order is not important.

Qns) What is Weakmap and Weakset in Javascript?

    - `WeakMap` and `WeakSet` are specialized versions of `Map` and `Set` in JavaScript that allow you to store weakly referenced objects. They have some distinct characteristics compared to `Map` and `Set`.

    ### 1. WeakMap:
    - **Definition**: `WeakMap` is a collection of key-value pairs where the keys are weakly held references to objects. This means that if there are no other references to a key object, it can be garbage collected.

    - **Key Characteristics**:
    - Only objects can be used as keys, not primitive values.
    - Keys in a `WeakMap` are weakly held, meaning they do not prevent the garbage collector from disposing of the key if there are no other references to it.
    - Keys are not enumerable, so you cannot iterate through them.
    - Does not have methods like `size` or `forEach` because the size of a `WeakMap` and its keys are not directly accessible.

    - **Usage**:
    - Used when you need to associate additional data with an object without interfering with the garbage collection of the object itself.
    - Useful for scenarios where you want to attach private data or metadata to objects without affecting their memory management.

    - **Example**:

    let person1 = { name: "John" };
    let person2 = { name: "Jane" };

    const weakMap = new WeakMap();
    weakMap.set(person1, "Information about John");
    weakMap.set(person2, "Information about Jane");

    console.log(weakMap.get(person1)); // Output: "Information about John"

    person1 = null; // Removing the reference to person1
    // At this point, the entry associated with person1 in the WeakMap may be garbage collected


    ### 2. WeakSet:
    - **Definition**: `WeakSet` is a collection of unique objects where object references are weakly held. Like `WeakMap`, the objects in a `WeakSet` can be garbage collected if there are no other references to them.

    - **Key Characteristics**:
    - Only objects can be added to a `WeakSet`, not primitive values.
    - Objects in a `WeakSet` are weakly held, allowing them to be garbage collected if there are no other references.
    - Does not have methods like `size` or `forEach` because the size of a `WeakSet` and its objects are not directly accessible.
    - Does not allow iterating through its values.

    - **Usage**:
    - Used when you need to store a collection of objects with weak references, allowing them to be automatically removed from the set when they are no longer used elsewhere.
    - Useful for scenarios where you want to keep track of a group of objects but do not want to prevent them from being garbage collected.

    - **Example**:

    let obj1 = { name: "Apple" };
    let obj2 = { name: "Banana" };

    const weakSet = new WeakSet();
    weakSet.add(obj1);
    weakSet.add(obj2);

    console.log(weakSet.has(obj1)); // Output: true

    obj1 = null; // Removing the reference to obj1
    // At this point, obj1 may be removed from the WeakSet if there are no other references to it


    ### Key Differences:
    - **Reference Weakness**:
    - `WeakMap` and `WeakSet` hold weak references to their keys or values, allowing them to be garbage collected if no other references exist.
    - `Map` and `Set` hold strong references, preventing their keys or values from being garbage collected as long as they are in the collection.

    - **Iterable**:
    - `Map` and `Set` are iterable, allowing you to iterate through their keys and values.
    - `WeakMap` and `WeakSet` are not iterable, as you cannot directly access their keys or values.

    - **Garbage Collection**:
    - Objects in `WeakMap` and `WeakSet` can be automatically removed by the garbage collector if they are no longer referenced elsewhere.
    - Objects in `Map` and `Set` will remain in the collection until explicitly removed, even if they are not referenced elsewhere.

    ### Summary:
    - `WeakMap` and `WeakSet` are specialized collections in JavaScript that hold weak references to objects.
    - They are useful when you need to associate additional data with objects without preventing their garbage collection.
    - `WeakMap` associates values with objects, while `WeakSet` is a collection of unique objects.
    - Objects in `WeakMap` and `WeakSet` can be automatically removed by the garbage collector if no other references to them exist.

Qns) What is use of json.stringify and json parse() method in Javascript?

    - `JSON.stringify()` and `JSON.parse()` are two important methods in JavaScript for working with JSON (JavaScript Object Notation), which is a lightweight data interchange format commonly used for sending data between a server and a web application. Let's explore each of these methods:

    ### 1. `JSON.stringify()`:
    - **Definition**: The `JSON.stringify()` method converts a JavaScript object or value into a JSON string.

    - **Usage**:
    - Used when you want to convert a JavaScript object into a JSON string for sending data to a server, storing data locally, or for other purposes where a string representation of the data is needed.

    - **Syntax**:

    const obj = { name: "John", age: 30 };
    const jsonString = JSON.stringify(obj);

    console.log(jsonString);
    // Output: '{"name":"John","age":30}'

    - **Key Points**:
    - Converts JavaScript objects into JSON strings.
    - Handles data types such as objects, arrays, strings, numbers, booleans, and `null`.
    - Optionally accepts a "replacer" function or an array of property names to include or exclude specific properties from the serialization.
    - Also accepts a "space" parameter to control the spacing in the resulting JSON string for better readability.

    ### 2. `JSON.parse()`:
    - **Definition**: The `JSON.parse()` method parses a JSON string and converts it into a JavaScript object.

    - **Usage**:
    - Used when you receive JSON data from a server, read JSON data from a file, or handle JSON data from any external source, converting it into a JavaScript object for manipulation.

    - **Syntax**:

    const jsonString = '{"name":"John","age":30}';
    const obj = JSON.parse(jsonString);

    console.log(obj);
    // Output: { name: "John", age: 30 }

    - **Key Points**:
    - Converts JSON strings into JavaScript objects.
    - Validates the JSON syntax and converts it into the corresponding JavaScript object structure.
    - Handles data types such as objects, arrays, strings, numbers, booleans, and `null`.
    - Optionally accepts a "reviver" function that can modify the parsed data before it is returned.

    ### Example Scenario:
    Suppose you have JSON data received from a server, and you want to convert it into a JavaScript object for further processing:


    const jsonData = '{"name":"Alice","age":25,"city":"New York"}';

    // Parsing JSON string to JavaScript object
    const person = JSON.parse(jsonData);

    console.log(person.name); // Output: "Alice"
    console.log(person.age); // Output: 25
    console.log(person.city); // Output: "New York"

    ### Use Cases:
    - **Sending Data**: Use `JSON.stringify()` to convert JavaScript objects into JSON strings before sending them to a server via AJAX, fetch, or WebSocket.
    - **Receiving Data**: Use `JSON.parse()` to convert JSON responses from a server into JavaScript objects for further manipulation or display.
    - **Storing Data**: Use `JSON.stringify()` to serialize JavaScript objects into JSON strings for local storage in browsers using `localStorage` or `sessionStorage`.

    ### Summary:
    - `JSON.stringify()` converts JavaScript objects into JSON strings.
    - `JSON.parse()` converts JSON strings into JavaScript objects.
    - These methods are commonly used for working with JSON data in web applications, facilitating data interchange between servers and clients, and storing data locally.

Qns) How to stop event propagation in Javascript?

    - stopPropagation() to immediately stop the event from bubbling or capturing to its parent or child.

Qns) What is dead zone in Javascript?

- The "Temporal Dead Zone" (TDZ) is a concept in JavaScript that refers to the period between the creation of a variable with let or const and the actual declaration of that variable. During this period, any reference to the variable will result in a ReferenceError.

  console.log(myVar); // Output: ReferenceError: Cannot access 'myVar' before initialization
  let myVar = "Hello";

Qns) What is mutation observer in Javascript?

- A MutationObserver is a built-in JavaScript API that provides a way to asynchronously observe changes in the DOM (Document Object Model). It allows you to react to changes in the DOM structure, such as adding or removing elements, modifying attributes, or changing the content of elements. MutationObservers are particularly useful for tasks such as implementing auto-saving features, tracking changes in a web application, or updating UI elements in response to dynamic content changes.

Qns) What is Status codes or HTTP response status codes?

    Informational responses (100 – 199)
    Successful responses (200 – 299)
    Redirection messages (300 – 399)
    Client error responses (400 – 499)
    Server error responses (500 – 599)

Qns) What is DOM in Javascript?

    - The DOM(Document Object Model) represents a document with a logical tree. It allows us to manipulate/change webpage content (HTML elements)


Qns) Javasscript Versions and features added ?

    - ES14: is the ECMAScript 2023
        - toSorted method.
        - toReversed.
        - findLast, and findLastIndex methods on Array.prototype and TypedArray.prototypet.

Qns) Explain Implicit Type Coercion in javascript?

    - Implicit type coercion in javascript is the automatic conversion of value from one data type to another. It takes place when the operands of an expression are of different data types.

    ref: https://www.interviewbit.com/javascript-interview-questions/amp/


Qns) Explain passed by value and passed by reference?

##passed by value:-

    var y = 234;
    var z = y;

  - In the above example, the assign operator knows that the value assigned to y is a primitive type (number type in this case), so when the second line code executes, where the value of y is assigned to z, the assign operator takes the value of y (234) and allocates a new space in the memory and returns the address. Therefore, variable z is not pointing to the location of variable y, instead, it is pointing to a new location in the memory.

    var y = #8454; // y pointing to address of the value 234

    var z = y;

    var z = #5411; // z pointing to a completely new address of the value 234

    // Changing the value of y
    y = 23;
    console.log(z);  // Returns 234, since z points to a new address in the memory so changes in y will not effect z
    From the above example, we can see that primitive data types when passed to another variable, are passed by value. Instead of just assigning the same address to another variable, the value is passed and new space of memory is created.

##passed by reference:-

    var obj = { name: "Vivek", surname: "Bisht" };
    var obj2 = obj;
   - In the above example, the assign operator directly passes the location of the variable obj to the variable obj2. In other words, the reference of the variable obj is passed to the variable obj2.

    var obj = #8711;  // obj pointing to address of { name: "Vivek", surname: "Bisht" }
    var obj2 = obj;

    var obj2 = #8711; // obj2 pointing to the same address

    // changing the value of obj1

    obj.name = "Akki";
    console.log(obj2);

    // Returns {name:"Akki", surname:"Bisht"} since both the variables are pointing to the same address.
    From the above example, we can see that while passing non-primitive data types, the assigned operator directly passes the address (reference).

    Therefore, non-primitive data types are always passed by reference.


Qns) What is memoization?

    - Memoization is a form of caching where the return value of a function is cached based on its parameters. If the parameter of that function is not changed, the cached version of the function is returned.
    Let’s understand memoization, by converting a simple function to a memoized function:

    function memoizedAddTo256(){
    var cache = {};

    return function(num){
        if(num in cache){
        console.log("cached value");
        return cache[num]
        }
        else{
        cache[num] = num + 256;
        return cache[num];
        }
    }
    }

    var memoizedFunc = memoizedAddTo256();

    memoizedFunc(20); // Normal return
    memoizedFunc(20); // Cached return

    In the code above, if we run the memoizedFunc function with the same parameter, instead of computing the result again, it returns the cached result.

    Note- Although using memoization saves time, it results in larger consumption of memory since we are storing all the computed results.


Qns) What is the use of a constructor function in javascript?

    - Constructor functions are used to create objects in javascript.

    When do we use constructor functions?

    If we want to create multiple objects having similar properties and methods, constructor functions are used.

    Note- The name of a constructor function should always be written in Pascal Notation: every word should start with a capital letter.
    Example:

    function Person(name,age,gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
    }


    var person1 = new Person("Vivek", 76, "male");
    console.log(person1);

    var person2 = new Person("Courtney", 34, "female");
    console.log(person2);

    In the code above, we have created a constructor function named Person. Whenever we want to create a new object of the type Person, We need to create it using the new keyword:

    var person3 = new Person("Lilly", 17, "female");
    The above line of code will create a new object of the type Person. Constructor functions allow us to group similar objects.















```
`````
