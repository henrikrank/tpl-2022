# Today's lesson
Making boxes and layouts.

## Shortcuts to know by heart

| Shortcut | Description |
| ---------|-------------|
| ALT + Tab | (keep pressing ALT, then quickly press Tab and relase the key, then release ALT) You will switch between the 2 most recently used applications - like VSCode and your Browser. |
| Windows + Tab | Scatter windows to a birds-eye view. Use the cursor to select the program you want to use. |
| CTRL + C and CTRL + V | Copy & Paste. Learn it by heart and only copy files like this from now on. <br> When you have higlighted a word, it will copy only the word, but qhen you just have your cursor on the line, it will copy the whole line |
| CTRL + F          | Find text in file |
| CTRL + <- or ->   | Move cursor one word at a time |
| Home | Move to the start of line |
| End | Move to the end of line |
| Delete | Like, backspace, but forwards |
| CTRL + Backspace | Delete whole word |
| CTRL + Delete | Delete the word forwards |
| Shift + <- or -> | Select text |
| Shift + CTRL +  <- or -> | Select words at a time |
| Highlight a word and press CTRL + D | Add a new cursor to next occurrence of word |
| CTRL + Shift + P | Open command dialog |

## Extra: Helpful Shortcuts to set up in VSCode
* Create new file
* Create new folder
* Append cursor to selection
* Toggle line comment (I use CTRL+Shift+7, I don't use block comments at all)

## Open these tabs in your browser if you're feeling stuck
The [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML) is an excellent place where to learn everything superfast.
* [HTML Syntax and Guide](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
* [CSS Syntax and Guide](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/Getting_started)
* [HTML & CSS Cheat Sheet](https://acchou.github.io/html-css-cheat-sheet/html-css-cheat-sheet.html)

## 1. Task for learning CSS Flexbox and working with `<div>`'s
* Make the Italian flag using CSS Flexbox. [In-depth Flexbox Reference](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* Make the flag the whole width of the screen. (hint - width: 33.33%; or would you like to use `flex: 1;` instead?)
* In the "white" portion of the flag, center a picture of Pizza. Make sure it doesn't skew the flag's proportions
* In the bottom of the Red portion, add your name. Make the text **bold** and color it white. Also, don't use Times New Roman.

## 2. Start with your homework project
* Have a look [here](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/Styling_a_biography_page) for basic inpiration. You can also refer to the lesson-1/lesson_code project.
* Create a one-page website about a subject you like. It can be a personal profile page, a page about your interests, etc.
* Make sure to use `<div>` and CSS Flexbox to structure the layout.
* Add a grid of pictures (if 3x3 grid, then at least 2 rows)
* Make sure the grid pictures don't stick together. Use margin or padding to create some air

> Ideas you can add to the website. 
* Use the `var someRandomVariable = window.prompt('My Random Question'); alert('Hello ' + someRandomVariable);` code snippet to add some interactivity to your page
* Create a custom section with a different background color to highlight some key information
* add a `.grid-item:hover img {filter: hue-rotate(90deg); transition: filter ease 0.4s; }` effect to your CSS. Play around with the [Transition CSS rules](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)