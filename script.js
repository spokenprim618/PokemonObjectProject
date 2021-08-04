let pokemonArray = [];
//div of pokemon objects we will include
//example object using mudkip info
let mudkip = {
    name:"Mudkip",
    health:"60",
    imgPath:"images/mudkip.png",
    descriptionText:"(made in JS) Mudkip, the Mud Fish Pokémon. Mudkip uses the sensitive radar receptors on its headfin to determine what's going on around it. In a pinch, it can brandish enough power to crush rocks.",
    cardColor:"rgb(43,180,234)",
    /*create a function called sayName that alerts with 
      name of the pokemon
    */
}

pokemonArray.push(mudkip);
//appending the array with mudkip

/*use the same structure used to make the mudkip object
  objects with the same keys for other pokemon. if you
  can't think of any, just use torchic and treecko (images
  are included in the images folder alread) and
  you can check bulbapedia for more. Search the pokemon
  on bulbapedia to get information about their 
  description or make your own description. Look on
  google images for a pokemon card of each pokemon
  (Ex:I searched "mudkip pokemon card" to find HP and 
  cardColor for mudkip and then used a colorpicker chrome
  extension to get the color from the image). After 
  each pokemon object, push() them to the pokemonArray.
*/


function createCardDiv(pokemonObject) {
    /*write the contents of this function such that it
      creates a div of the same structure as the one
      .characterSheet div in the index.html (lines 15-24)
      and also creates all the elements inside this 
      characterSheet div. Use createElement() to 
      create a div element. Set the class of that
      element to characterSheet. Create another div after
      this div. Append this div to the new characterSheet
      div you made using appendChild(). Set the class
      of the child div you just appended to topText".
      create two p tag children of this
      topText div and set their content
      to the values of the .name and .HP keys of the 
      pokemon objects you created. Repeat this process 
      for all the other elements in the .characterSheet
      div in the index.html. IMPORTANT:SET CLASSES FOR ALL
      ELEMENTS AND MAKE SURE TO SET THE CORRECT ATTRIBUTES
      ELEMENTS (make sure image has src set to value of
      .imgPath value in your pokemonObject). Also, set the
      background color of your .characterSheet div to the
      .cardColor value in your pokemonObject
      

      to check your work, plugging in the mudkip object
      on line 4 should result in another pokemon card
      that looks identical to the one created in the
      index.html file.
    */
   let newCharacterSheet = document.createElement('div');
   newCharacterSheet.className="characterSheet";
   newCharacterSheet.style.backgroundColor = pokemonObject.cardColor;


   return newCharacterSheet;
   /* Decided to actually create and return the newCharacter
   sheet for you and set its class and backgroundColor
   so you guys can get a bit of a hint on createElement
   and the className attribute
   
   */
}


for(let i = 0; i < pokemonArray.length; i++) {
    //line 33 calls createCardDiv() creating a newCard div
    let newCard = createCardDiv(pokemonArray[i]);

    // Extra Credit:add a click event listener for the newCard
    // div that is created in line 33. When the card is
    // clicked, it should run the sayName() function
    // of the object the newCard div gets its info from
    // (will be pokemonArray[i])


    // appends the new card to the #containerDiv in the HTML
    let containerDiv = document.querySelector('#containerDiv');
    containerDiv.appendChild(newCard);

}

