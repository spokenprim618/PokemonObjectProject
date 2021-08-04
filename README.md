# PokemonObjectProject
A custom Pokemon card project meant to teach ASC students about JS Objects

INSTRUCTIONS:
The goal of this project is to create a website that can turn a pokemon
object into an actual div meant to look similar to pokemon cards.

In this repo, there is an hmtl, css, and javascript file. You are only supposed
to modify the javascript file. This javscript file will use DOM to heavily
modify the HTML but will only lightly modify the CSS so if you're changing
many style properties in the JS, you are probably on the wrong path.

Step 1: fork and clone this repository in your week4/day3 folder

Step 2: open the folder in VS code and read the inedx.html file to
get a basic understanding of its srtucture

Step 3: open the script.js file and follow the instruction
  
  3a: create new objects that use a similar style to the mudkip object
  
  3b:complete the createCardDiv() function

Extra Credit: 
EC1:add the event listener described in lines 81-86

EC2:create an array of abilities that the pokemon has and replace the description 
text of each pokemon card with those abilities (this is how pokemon cards are
in real life).

EC3:Create another key in all of your pokemon objects called "type" and place
primary typing (check google) of each pokemon as the value for this key, then create
a battle(pokemonObj) function in each oject that takes another pokemon
object as a parameter. This function should declare the winner of a battle
between the pokemon obj calling the function and the pokemon obj that is being
passed as the parameter to this function. The rules for deciding the winner are
that the pokemon with more health wins, but if a pokemon has a super
effective typing against another pokemon, its health is counted 
1.5x


Note:Once you create another pokemon object and push it to the array,
move on to the step 3b and then when you're done with 3b, you may
go back and create more objects in your javacsript or work on extra
credit. The project is individual but of course feel free to discuss
solutions with your breakout peers.

Check the example image included to see what the site should look
like when you add two JS objects.

Submission: Only submit the script.js file, since that is the only file
you need to alter.
