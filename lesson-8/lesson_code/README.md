# Browser JavaScript & Your Project
JS was originally meant to be run on the browser. It is the scripting language to manipulate the HTML elements, change their style, move them around, etc. It can also be used to fetch data from other websites, and do everything a programming language usually should be able to do. The main constraint is that when running JS in the browser, you don't have access to system operations like with other programming languages (such as "open file", "delete file", "shutdown the computer").

Everything you have learnt in the previous lessons is a precursor to browser JS so make sure to keep a reference open from lesson-6 code.

## Events
Browser JS lies heavily on events that happen on the site. An **Event** can be anything. Some examples:
* user clicked on a button, 
* user moved the mouse around, 
* user submitted a form, 
* user hovered over a HTML element
* user pressed a key down on a keyboard

These events can be captured like this: 
```javascript
// Don't forget to wrap you code inside DOMContentLoaded event listener, 
// because we need to wait for the DOM to be loaded before we can start working with it.
document.addEventListener('DOMContentLoaded', function() {

    document.addEventListener('click', function(event) {
        var target = event.target;
        if (target.classList.contains('my-green-button')) {
            // do something
        }
    });

    document.addEventListener('mousemove', function(event) {
        // Print the mouse position
        console.log(event.pageX);
        console.log(event.pageY);
    });

    // Listen to submit events on the form
    // Let's say the form looks like this:
    // <form>
    //     <input id="input-name" type="text" name="name" />
    //     <input id="input-age" type="text" name="age" />
    //     <button id="button-submit" type="submit">Submit</button>
    // </form>
    document.addEventListener('submit', function(event) {
        // Optionally, prevent the form from submitting (this will prevent the page from reloading and you most probably want to do this)
        //event.preventDefault();
        
        // get the form input values
        var name = document.getElementById('name-input').value; 
        var age = document.getElementById('age-input').value;

        // NB! Don't forget that input elements by default store the value as a STRING, so if you want to use the age as a NUMBER, you need to parse it
        age = parseInt(age);
        // you can also do age = parseFloat(age); Then you have the number as 23.00, not 23

        // do something with the values
    });

    // Hovered over the button
    document.addEventListener('mouseover', function(event) {
        var target = event.target;
        if (target.classList.contains('my-green-button')) {
            // do something
        }
    });

    // Hovered out of the button
    document.addEventListener('mouseout', function(event) {
        var target = event.target;
        if (target.classList.contains('my-green-button')) {
            // do something
        }
    });

    document.addEventListener('keydown', function(event) {
        console.log(event.key); 
        if (event.key === 'ArrowLeft') {
            // do something
        }
        // Full reference: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values
    });

    // You can also listen for keyup events
    document.addEventListener('keyup', function(event) {
        console.log(event.key); 
        if (event.key === 'ArrowLeft') {
            // do something
        }
    });

    // You can add Events to elements as well, not just the document.
    // I prefer to use the document, because then if you programmaically add elements to the page, 
    // you don't have to add the event listeners to them as well.
    // But you can do it like this:
    var myButton = document.getElementById('my-button');
    myButton.addEventListener('click', function(event) {
        // do something
    });
});
```

## Creating new elements in the DOM
Let's say you want to add a `<h1 class="my-green-title">Hello world</h1>` when the user clicks a button. You can do it like this:
```javascript
// 
var myButton = document.getElementById('my-button');
myButton.addEventListener('click', function(event) {
    // Create the element
    var myTitle = document.createElement('h1');
    // Add a class to it
    myTitle.classList.add('my-green-title');
    // Add some text to it
    myTitle.textContent = 'Hello world';
    // The full reference for what you can do with elements: 
    // https://developer.mozilla.org/en-US/docs/Web/API/Element

    // Add it to the page
    document.body.appendChild(myTitle);

    // You can also add it to a specific parent element, like this:
    // var myDiv = document.getElementById('my-div');
    // myDiv.appendChild(myTitle);
    // PS! then you don't need to do document.body.appendChild(myTitle); 
});
```

## Editing existing elements in the DOM
Let's say you want to change the text of the button when the user clicks it. You can do it like this:

```javascript
// Get the button
var myButton = document.getElementById('my-button');
myButton.addEventListener('click', function(event) {
    // Change the text
    myButton.textContent = 'I was clicked';
    // Want to change the background color? You can do it like this:
    myButton.style.backgroundColor = 'red';
    // the full reference for styles: 
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
    // but mainly it just means you camelCase the CSS property name and set it to the value you want.
});
```

## Now, let's talk scope.
* Scope is the context in which a variable is defined.
* In JavaScript, there are two types of scope: global and local.
* Global scope is the scope that is available everywhere in your code.
* Local scope is the scope that is only available inside a function.

```javascript
// Let's say you have a variable defined like this:
var myGlobalVariable = 'Hello world';
// This variable is available everywhere in your code.

// You can access the global variable inside the function like this
function myFunction() {
    console.log(myGlobalVariable); // 'Hello world'

    // This is a local variable
    var myLocalVariable = 'Hello world';
}

// The myLocalVariable is only available inside the function. and you can't access it outside of the function.
// If you try to access it outside of the function, you will get an error.
console.log(myLocalVariable); // Uncaught ReferenceError: myLocalVariable is not defined

// Let's say you have a function defined like this:

function mySecondFunction() {
    // You can define myLocalVariable again, even though another function already defined it, because they are in different scopes.
    var myLocalVariable = 'Hello world';
    // This is a global variable
    myGlobalVariable = 'Hello world';
}

// This means multiple functions can use the same variable to store data and work in the same context.

// an example of two methods that use the same variable to store data with DOM event listeners:
// Let's say we can increment a counter when we click a button. 
// Then every 10 seconds we see if the counter is over 10. If it is, alert "You have clicked the button quite a lot! Maybe take a break!"
// And then reset the counter anyway.
var myCounter = 0;

var myButton = document.getElementById('my-button');
myButton.addEventListener('click', function(event) {
    myCounter++;
    console.log(myCounter);
});

setInterval(function() {
    if (myCounter > 10) {
        alert('You have clicked the button quite a lot! Maybe take a break!');
    }
    myCounter = 0;
}, 10 * 1000); // 10 seconds (setInterval takes milliseconds, so 1000 milliseconds = 1 second and 10 * 1000 = 10 seconds)
```

## Things you will most likely learn to love in JavaScript
```javascript
// *********************************************************************************************************************
// Adding and removing classes (You can style the classes in your CSS)
// *********************************************************************************************************************
var myElement = document.getElementById('my-element');
myElement.classList.add('my-class');

var myElement = document.getElementById('my-element');
myElement.classList.remove('my-class');

// Checking if an element has a class.
var myElement = document.getElementById('my-element');
if (myElement.classList.contains('my-class')) {
    // do something
}

// You can also toggle a class, which means if it has the class, it removes it, and if it doesn't have the class, it adds it.
var myElement = document.getElementById('my-element');
myElement.classList.toggle('my-class');

// You can also add multiple classes at once
var myElement = document.getElementById('my-element');
myElement.classList.add('my-class', 'my-other-class');

// *********************************************************************************************************************
// Adding and removing attributes
// *********************************************************************************************************************
var myElement = document.getElementById('my-element');
myElement.setAttribute('my-attribute', 'my-value');
// The result is <div id="my-element" my-attribute="my-value"></div>
// Attributes are used to store data on elements, which you can then use in your JavaScript.

// Example 
// Let's say you have a button that you want to disable after it's been clicked.
var myButton = document.getElementById('my-button');
myButton.addEventListener('click', function(event) {
    myButton.setAttribute('disabled', 'disabled');
});

// Or let's say you want to figure out where the pawns are on a chess board
// The HTML looks like this:
// <div class="chess-piece" data-coordinate="h4" data-piece="rook"></div>
// <div class="chess-piece" data-coordinate="c2" data-piece="pawn"></div>
// <div class="chess-piece" data-coordinate="g8" data-piece="pawn"></div>
// <div class="chess-piece" data-coordinate="a1" data-piece="knight"></div>

var myChessPieces = document.getElementsByClassName('chess-piece');
for (var i = 0; i < myChessPieces.length; i++) {
    var myChessPiece = myChessPieces[i];
    if (myChessPiece.getAttribute('data-piece') == 'pawn') {
        console.log(myChessPiece.getAttribute('data-coordinate'));
    }
}

// You can also remove attributes
var myElement = document.getElementById('my-element');
myElement.removeAttribute('my-attribute');

// *********************************************************************************************************************
// Adding and removing event listeners
// *********************************************************************************************************************

// You can add event listeners to elements like this:
var myButton = document.getElementById('my-button');
function whenButtonIsClicked(event) {
    // do something
}
myButton.addEventListener('click', whenButtonIsClicked);

// You can also remove event listeners like this:
myButton.removeEventListener('click', whenButtonIsClicked);

// *********************************************************************************************************************
// Creating and removing elements
// *********************************************************************************************************************

// You can create elements like this:
var myElement = document.createElement('img');
// Add some content to the element
myElement.setAttribute('src', 'http://placekitten.com/200/300');
myElement.classList.add('my-image');
// Add the picture to your gallery
var myGallery = document.getElementById('my-gallery');
myGallery.appendChild(myElement);

// You can also remove elements like this:
myGallery.removeChild(myElement);

// *********************************************************************************************************************
// Intervals and timeouts
// *********************************************************************************************************************

// You can set an interval like this:
var myInterval = setInterval(function() {
    // do something every 10 seconds
}, 10000);

// You can also clear the interval like this:
clearInterval(myInterval);

// You can set a timeout like this:
var myTimeout = setTimeout(function() {
    // do something after 10 seconds
}, 10000);

// You can also clear the timeout like this:
clearTimeout(myTimeout);

// *********************************************************************************************************************
// Using Local Storage https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
// *********************************************************************************************************************

// Local storage is a way to store data in the browser, so that it persists even if you close the browser.
// So this means you can set variables into the browser's "Database" and then retrieve them later.

// You can set a variable like this:
localStorage.setItem('my-variable', 'my-value');

// You can get a variable like this:
var myVariable = localStorage.getItem('my-variable');

// You can remove a variable like this:
localStorage.removeItem('my-variable');

// You can clear all variables like this:
localStorage.clear();

// Mind you, localStorage only stores values as strings, so if you want to store an object, you need to convert it to a string first.
// You can do this like this:
var myObject = {
    name: 'John',
    age: 30
};

localStorage.setItem('my-object', JSON.stringify(myObject));

// And then you can retrieve it like this:
var myObject = JSON.parse(localStorage.getItem('my-object'));

// *********************************************************************************************************************
// AJAX (More advanced, you can read more about it here: https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX)
// *********************************************************************************************************************

// You can make AJAX requests like this:
var myRequest = new XMLHttpRequest();
myRequest.open('GET', 'http://www.example.com');
myRequest.onload = function() {
    if (myRequest.status === 200) {
        // do something with the response
        console.log(myRequest.responseText);
    } else {
        // do something else
    }
}

// *********************************************************************************************************************
// Promises (More advanced, you can read more about it here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
// NB! Promises are not supported in Internet Explorer, so you will need to use a polyfill which you can find here:
// <script src="https://cdn.jsdelivr.net/npm/promise-polyfill@8/dist/polyfill.min.js"></script>
// *********************************************************************************************************************

// You can create a promise like this:
var myPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        // do something async
        // Randomly resolve or reject the promise
        if (Math.random() > 0.5) {
            resolve('Success!');
        } else {
            reject('Failure!');
        }
    }, 1000);
});

// You can then use the promise like this:
myPromise.then(function(result) {
    // do something with the result
    console.log(result); // Success!
}).catch(function(error) {
    // do something with the error
    console.log(error); // Failure!
});
```

> Before you head on to the next section: We are learning just plain javascript which is also called "Vanilla JS" so if you google stuff, this keyword might help you. We will not touch on libraries such as [JQuery](https://jquery.com), which massively improve your browser coding experience, because they come with a slight learning curve and it's not *vanilla*. If you want to code **a lot** for your project, I suggest you learn it on your own. Watch a YouTube tutorial on how to get started with JQuery.

# Project
Your goal for November is to create a cool interactive web application. This means you will create a website using HTML and CSS and then make it interactive with JavaScript. The requirements for the project are:
* Looks nice: Colors, Images, Fonts - everything you learned in September
* Has an interactive component to it with JavaScript. The user must be able to use your program and get some value out of it.

> You can do anything your heart desires, but make sure you don't bite more than you can chew but also don't go too easy. If you finish too fast, you can also create a collection of smaller programs and create a "Portfolio" so the user can select between multiple projects.

Some possible project ideas:
* Calculator: Input some variables into form input elements and do some calculations with them, then outout a result
    * example: [https://palgakalkulaator.com/](https://www.16personalities.com/free-personality-test)
    * math solver
* Personality Quiz
    * example: [https://www.16personalities.com/free-personality-test](https://www.16personalities.com/free-personality-test)
* A picture gallery maker: upload images to the website and download a HTML page with the images in the code (so it generates HTML)
* Game: Tamagotchi, Cookie Clicker, Pong, Snake, Flappy Bird etc 
* A map showing your favorite restaurant locations, with text bubble recommendations and texts
* A restaurant table booking system
* A scoreboard to keep track of school football games. Then you can have a "season" and see which players are the best. or who has the best "Šnelli ring" time!
* A music player:
    * example: [https://tpl.edu.ee/oppetoo/opivara/prantsuse-keel/](https://tpl.edu.ee/oppetoo/opivara/prantsuse-keel/])
* Just a good-old-fashioned website with neat JavaScript code
    * example: [https://tpl.edu.ee/kool-ja-inimesed/kooli-lugu/ajalugu/](https://tpl.edu.ee/kool-ja-inimesed/kooli-lugu/ajalugu/)

> **You are more than welcome, even encouraged to come up with a project idea on your own.**

I will be available throughout the month and can help you out with coding problems. Please don't hesitate to contact me or discuss in the Messenger group.

The aim is to showcase your work in December when we have the Christmas café going on. Then other students and teachers can go and test out your project.

GL & HF! ✌️