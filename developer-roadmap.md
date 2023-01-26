# Thoughts on Developer Journey.
A random manifesto of things that helped me become a better developer. I've been coding for 7 years now and I've seen a lot of people struggle with the same things. I hope this helps you.

## 1. Learning multiple languages
It is minimum that you only know 1 programming language. Nowadays JavaScript does what Java failed to achieve - it runs everywhere, can be used for anything. You can learn JS and be a one trick pony, and it will take you far, but you will learn faster and become a better developer if you learn multiple languages in parallel. Why? If you only speak one language, you don't understand if a for-loop is a "nifty feature" of JS or is it a wider programming concept that occurs in most programming languages. Once you speak multiple languages, you will understand more deeply why a concept needs to be applied in a situation, and know exactly what to look up from google. You can always google "How to do a for loop in Python", but it's a bit harder to get answers to "How can I solve this problem", because one question is specific, another can be translated to "I don't know what to do, can you solve this problem for me?". Learning multiple languages (being a polyglot programmer) means whatever is the task at hand, you are not constrained by the environment you are working in: need to compose a PDF invoice from HTML? PHP is the best for that. Need to scrape a website and give you an update on the best prices for luxury t-shirts - python is best. Need a trading bot? Go with C, other languages are just slow in comparison. 

I would recommend learning TypeScript (strongly-typed JavaScript), Python, Rust & C, SQL. I personally use PHP **a lot**, but as time goes by, it's becoming more irrelevant. I still think it's one of the better ecosystems and 80%+ of websites in the world run on PHP.

I mainly use TypeScript and PHP, but knowledge of Swift, C, Python have shaped my style. And Rust is the wonderchild to learn at this time: a syntax similar to Swift & Ruby, with a performance of C. I also like Elixir (spicy Erlang), which is one of the most stable languages, with C-like performance and grants you a high-pay income just like that.

## 2. Getting acquainted with Unix-like systems. 
Unix-like systems are Linux and MacOS.
As a programmer, your daily toolkit includes the terminal - a CLI - that helps you navigate the operating system folder structure and execute all kinds of programs. Using Linux (preferred) or MacOS you will learn the essential terminal commands, and you have access to a larger and more convenient toolkit for coding in general. 
I'm not an advocate for Linux - I really don't care what OS a developer is running - but installing multiple "distros" and using them early in my developer journey helped shape me to a more versatile programmer: I still see developers today who have no idea how to launch .sh files, how to run operations on multiple files at once, how to even use SSH over CLI. 

Installing Linux has benefits, because it basically increases the "difficulty level" of using a computer: less things work out-of-the-box, you don't have access to most conventional programs - such as Adobe Photoshop & Illustrator - and thus you need to start figuring out alternatives and get creative. And most time while working in linux, you will sit on a terminal. There are pros and cons, example:
pro: (while using Arch linux)
- I was unable to connect to my bluetooth headphones because my computer literally didn't have a button on the navigation menu with Bluetooth devices.
I had to open the terminal and run a command like `bluetoothctl scan on` to get the list of devices, `bluetoothctl pair FC:69:47:7C:9D:A3` to pair, and `bluetoothctl connect FC:69:47:7C:9D:A3` to eventually connect to the headphones. Sounds tedious? Yes, it was. But every time I became better at running commands on the terminal + now I know the concept how bluetooth works under the hood. 
> Also later I made a .sh script to run all these commands in a chain. get the output from one command, filter out the bluetooth device I want to connect to, and then pass its ID to the pair and connect commands. Now I know how to write .sh files.

- Because I changed Linux distros so often, I built a good habit never to store project files on my computer, everything important should be backed up in a server. This means that at any point I should be able to hit my computer with an axe and break it - and it would only be an inconvenience to set up the new PC, not a feeling of the end of the world. And you don't need to use an axe - you can also spill coffee on your keyboard and say byebye to the device. 

con:
- I once had to print out an essay on a conventional Canon printer. Arch Linux had no basic printer connectivity whatsoever and while I could have clicked 2 buttons to do it on a normal PC, I spent an entire evening configuring the driver files and eventually failed to print it out. It's very tedious to do normal tasks from time to time. 
The silver lining is now I can better understand what I actually want my computer to be able to do. Now I can pick the right tool for the job.

The distros I had on my computers back in the day were Ubuntu, Debian, Kali, Manjaro, Arch -> the Arch&Manjaro systems being the toughest ones to use but the best ones to learn on.

## 3. Learning all core and cutting-edge concepts of a programming language of choice
* const, let, var - initializing variables. Scope and mutability
* string, float, number, decimal, integer, bigint - basic data types
* arrays and objects (dictionaries)
* difference between null and undefinded
* strongly typed or dynamically typed languages - what are the differences
* Boolean types
* how a string is stored in 0 and 1's. Just food for thought
* Array and Object operations -> Map, Filter, Reduce. Most algorithms can be solved with this.
* functions - and function arguments and return values. Difference between a function signature and calling it.
* preferring for-loops to while loops, but the intricate difference of a do-while loop and a while loop
* break and continue statements
* if-elseif-else and switch statements. combining switch with `return` instead of `break`.
* using functions that return a value as a parameter to another function. Like isThisGreen(getColorOfItem(item));
* callback functions
* OOP (classes, class methods, constructors) - python or TypeScript are best for that
* async/await
* making HTTPRequests to other computers - create a web of computers, not only run your code on 1 toaster

## 4. Learning fundamental web design concepts. This is the "art" part of web development.
Long gone are days where software was created only for nerdy software engineers. Now, everyone uses software. They're people. And people want things to look pretty. So if you want to build a production-ready application that people will use, it needs to look PRETTY and follow some common principles - the lingua franca of webpages. This is what your parents are lacking when they say "I'm so frustrated that they changed the appearance of the banking system" - can you really blame them? Sometimes it's an issue with the banking app developer violating these principles, sometimes it that the parents are just old-school and don't know icons and gestures that are common sense to you. Some things to learn:
* Basics of Web Development: HTML & CSS. Once you get the hang of it, you aren't constrained by what you want to do.
* Components of a conventional web page: Header, Sidebar, Top Menu Bar (or Navigation Bar), Content Area, Footer, Image Grids, Image Fullscreen Viewers, Forms elements -> Inputs, Radio buttons + Checkboxes (and when to use which one), Sliders etc. There are customs where you search for a language selector - either in the navigation at the very top, or at the footer. Also a copyright notice and links to less important webpages are usually in the footer.
* 8-pixel grid system, popularized by Bootstrap (component library of Twitter) and Apple. Creates a uniform way of managing padding and margins
* 2022 Web design trends - and understanding that this is how you target a Gen Z audience. Millenials like it for the "ooh flare" but boomers don't understand it at all because their fantasyland is in 2003, where there were no icons and big texts.
* understand how handheld devices have changed web design in general. New components in web (like Tab Bar Menu and the "+ icon" near the thumb area)
* Understand the difference in JPG, PNG, SVG and GIF file formats and pros-cons of all of them. JPG being smallest size, PNG holding transparency, SVG for sharp shape objects (vector vs rasterize format) and Gif for moving images.
* Understand when and why assets such as images, CSS and JS files should be compressed.
* caniuse.com -> web browsers all evolve over time and different features are released at a different time. For example, Internet Explorer doesn't support the display: grid; CSS layout system very well, so if your goal is to support as many customers as possible, you should avoid using it until it has better support. For this, your toolkit should have a 99% support rate in browsers (not Opera), that is essential. But if you're just building something for yourself for fun and only run it in latest Google Chrome, go for it.
* Have essential Adobe Photoshop & Illustrator (or their equivalent) skills. Remove white background from a JPG so you can save it as a PNG and show a background color through it? Easy. Need a logo on a website but it looks pixelated when enlarged? Image trace in Illustrator and convert it to a vector (SVG). Need to crop an image to remove white space so you don't have to use "margin-top: -8px" in your code? Cut it in Paint if you want to.
* Being mindful when browsing the web -> see which elements look cool, and figure out how you would build them

## 5. Web-Development specific knowledge
* Use Google Chrome's DevTools when developing -> Inspect Element is your biggest friend. This way you can see HTML+CSS, tinker around with it. You also have access to the JavaScript console, and the Network tab for outgoing and inbound requests, and "Application" for Cookie, LocalStorage and SessionStorage management.
* Media Query: Write CSS that only applies to screens of a certain size. Then your website doesn't look broken on Mobile.
* Learning how to pass variables from HTML to JavaScript and vice-versa (data-attributes)
* JQuery. It's basically an easier way to write JS. Even though you can do everything with JS and nowadays things like Vue.js can also replace it, it's just sometimes super convenient to use and you will see it often on webpages.
* React.js, Vue.js or Angular2+. A solid framework to build HTML and CSS in. All modern applications use a wrapper framework around HTML and CSS, and these ones are the best at it. I personally use Angular, but learning React will make the transition to React Native super easy later down the line: it's used to create mobile applications. I as an ex-iOS Swift developer highly recommend it and also built an audiobook player for my Android phone.
* Understand the DOM. The order of loading a webpage, events that happen in it -> waiting for the DOM to load before you execute your JS, otherwise your JS will just say that there isn't a "body" element on the page - what are you talking about? and you will be frustrated when finding the reason your code doesn't work. 
* Project folder structure. How to name files conveniently.
* Naming files and objects in code - the biggest problem of all - to make it understandable not only to you but to other devs. 
* DRY and KISS principles.

## 6. Learning how to use a version control system
* Git and GitHub. Git is the version control system, GitHub is the website where you can host your code and collaborate with other people. Git is the most popular one, but there are others like Mercurial, SVN, etc.

## 7. Self-education
* Be open to critisism and not always getting it right. You will make mistakes, and you will be frustrated. But you will learn from them. And you will get better. And you will be proud of yourself.
* Don't be a vocal nay-sayer of some technologies. For example there is a group of people who hate PHP, however they don't even know how to write PHP and have never used it. **More often than not, when people are negative towards something, they just don't know enough about it** and are just trying to fit in with the crowd. Don't be that person. Be open to learning new things.
* Developing soft-skills for the eventual job interview. How to answer questions, how to present yourself, how to be confident, humble, a team player, a leader, a good listener, a good communicator, a good problem solver, a good coder, a good designer, a good tester, a good manager, a good mentor, a good teacher, a good friend.
* Pick something mildly interesting and give it your all. You will be surprised how much you can learn in a short amount of time. And you will be surprised how much you can learn in a long time.
* Focus only on what you want to learn. The things you learn today will give you your value in the future. But if you learn something that does not interest you that much, you will underperform all the geeks who are passionate about it.
* Get comfortable learning on your own. Spells are to wizards as programming languages are to programmers. It all boils down to words. But only those who have practised hard enough can cast spells. And only those who have practised hard enough can write code.
* Don't wait for others, and carve your own destiny. 

Thanks for being part of this programming class, I had a blast.