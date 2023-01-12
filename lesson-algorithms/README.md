# Algorithmic thinking
Algorithms are a set of instructions that tell a computer what to do. They are the foundation of computer science. In this lesson, we will learn how to write algorithms and how to use them to solve problems.

## An example algorithm
Let's say we want to write an algorithm that tells us how many seconds are in a year. We can start by writing down the steps we would take to solve the problem.

1. Count the number of seconds in a minute (60)
2. Count the number of minutes in an hour (60)
3. Count the number of hours in a day (24)
4. Count the number of days in a year (365)
5. Multiply them all together
6. Result: 60 * 60 * 24 * 365 = 31,536,000

Now that was easy. But the algorithm above is maybe a bit boring. How about some more interesting algorithms?

## Algorithms in the real world

### Exercise 1
Let's say I have a list of ingredients in the fridge and I want to know what I can make with them. I can write an algorithm that tells me what I can make.
* as preparation, we can compile a list of recipes and the ingredients they require. Let's say this list looks like this

| Recipe | Ingredients |
| --- | --- |
| Pizza | flour, tomato sauce, cheese, ham, mushrooms |
| Pasta | flour, tomato sauce, cheese, ham, mushrooms |
| Salad | lettuce, tomato, cucumber, ham, cheese |
| Sandwich | bread, ham, cheese, tomato |
| Soup | tomato, carrot, onion, ham, cheese |
| Omelette | eggs, ham, cheese |
| Pancakes | flour, eggs, milk, sugar |
| Cake | flour, eggs, milk, sugar, chocolate |
| Lasagna | flour, tomato sauce, cheese, ham, mushrooms |
| Fries | potatoes, oil |
| Chicken | chicken, oil, salt, pepper |
| Steak | steak, oil, salt, pepper |
| Fish | fish, oil, salt, pepper |
| Rice | rice, oil, salt, pepper |
| Noodles | noodles, oil, salt, pepper |
| Burger | bread, meat, cheese, tomato, lettuce, cucumber, onion |
| Burrito | tortilla, meat, cheese, tomato, lettuce, cucumber, onion |
| Tacos | tortilla, meat, cheese, tomato, lettuce, cucumber, onion |
| Sushi | rice, fish, cucumber, avocado, soy sauce |
| Curry | rice, meat, vegetables, curry powder, soy sauce |
| Wok | rice, meat, vegetables, soy sauce |

Now, let's say I have the following ingredients in the fridge:
* ham
* cheese
* tomato
* cucumber
* lettuce
* mushrooms
* eggs
* milk
* salt
* pepper

I can write an algorithm that tells me what I can make with these ingredients. The algorithm would look like this:
1. Get the list of recipes and the ingredients they require
2. For each recipe, check if the ingredients I have are a subset of the ingredients required for the recipe
3. If the ingredients I have are a subset of the ingredients required for the recipe, add the recipe to the list of recipes I can make
4. Result: Print the list of recipes I can make

> This simple algorithm is the basis for loads of websites. For example, [Allrecipes](https://www.allrecipes.com/) and [Yummly](https://www.yummly.com/) use this algorithm to tell you what you can make with the ingredients you have.

### Exercise 2
Now let's take this a step further. Say I want to know what I can make with the ingredients I have, but I also want to know what I need to buy to make a certain recipe. I can write an algorithm that tells me what I can make and what I need to buy.
1. Get the list of recipes and the ingredients they require
2. For each recipe, check if the ingredients I have are a subset of the ingredients required for the recipe
3. If the ingredients I have are a subset of the ingredients required for the recipe, add the recipe to the list of recipes I can make
4. If the ingredients I have are not a subset of the ingredients required for the recipe, add the ingredients I need to buy to the list of ingredients I need to buy
5. Result: Print the list of recipes I can make and the list of ingredients I need to buy

### Exercise 3
Now let's change the topic, enough cooking for now. Before computers, we had the telegram machine. It worked by sending electrical signals through wires. 

Let's say I want to use the telegram machine to send a message to my friend. I can write an algorithm that tells me how to do that.

1. First I need a dataset of all the letters of the alphabet and their corresponding electrical signals. Let's say this dataset looks like this:

| Letter | Electrical signal |
| --- | --- |
| A | .- | 
| B | -... |
| C | -.-. |
| D | -.. |
| E | . |
| F | ..-. |
| G | --. |
| H | .... |
| I | .. |
| J | .--- |
| K | -.- |
| L | .-.. |
| M | -- |
| N | -. |
| O | --- |
| P | .--. |
| Q | --.- |
| R | .-. |
| S | ... |
| T | - |
| U | ..- |
| V | ...- |
| W | .-- |
| X | -..- |
| Y | -.-- |
| Z | --.. |
| 0 | ----- |
| 1 | .---- |
| 2 | ..--- |
| 3 | ...-- |
| 4 | ....- |
| 5 | ..... |
| 6 | -.... |
| 7 | --... |
| 8 | ---.. |
| 9 | ----. |
| . | .-.-.- |
| , | --..-- |
| ? | ..--.. |
| _ (space) | / |

2. Get the message I want to send
3. For each letter in the message, get the corresponding electrical signal
4. Print a space between letters and a slash between words
4. Result: Print the electrical signals

> Example message: "Hello World" -> ".-.. . .-.. .-.. --- / .-- --- .-. .-.. -.."

### Exercise 4
Now, let's say my friend sends me a message using the telegram machine. I can write an algorithm that tells me what the message is.

1. I already have a dataset of all the letters of the alphabet and their corresponding electrical signals from the previous exercise.
2. Get the electrical signals
3. For each electrical signal, get the corresponding letter or symbol
4. Result: Print the message

> Example: ".-.. . .-.. .-.. --- / .-- --- .-. .-.. -.." -> "Hello World"

### Exercise 5
Let's see how to use algoritms in JS + HTML. See the example projects section.


### Where to find more:
* [Coderbyte](https://coderbyte.com/challenges)
* [Khan Academy](https://www.khanacademy.org/computing/computer-science/algorithms)
* [Codecademy](https://www.codecademy.com/learn/learn-algorithms)
* [Code.org](https://code.org/curriculum/algorithms)
* [CodeCombat](https://codecombat.com/)

