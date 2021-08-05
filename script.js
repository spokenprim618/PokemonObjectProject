let pokemonArray = [];//div of pokemon objects we will include example object using mudkip info
let mudkip = {
    name:"Mudkip",
    health:"60",
    imgPath:"images/mudkip.png",
    descriptionText:"(made in JS) Mudkip, the Mud Fish Pokémon. Mudkip uses the sensitive radar receptors on its headfin to determine what's going on around it. In a pinch, it can brandish enough power to crush rocks.",
    cardColor:"rgb(43,180,234)",
    sayName: function(){
      alert(`its ${this.name}`);
    },
  };
    pokemonArray.push(mudkip);//appending the array with mudkip

let torchic = {
  name:"torchic",
  health:"60",
  imgPath:"images/torchic.png",
  descriptionText:"Torchic sticks with its Trainer, following behind with unsteady steps. This Pokémon breathes fire of over 1,800 degrees Fahrenheit, including fireballs that leave the foe scorched black.",
  cardColor:"red",
  sayName: function(){
    alert(`its ${this.name}`);
  },
};
  pokemonArray.push(torchic);



function createCardDiv(pokemonObject) {
   let newCharacterSheet = document.createElement('div');
   newCharacterSheet.className="characterSheet";
   newCharacterSheet.style.backgroundColor = pokemonObject.cardColor;
  
   let pokemontext =document.createElement('div');
  pokemontext.className="topText";
  let pokeName=document.createElement('p');
  let pokehealth=document.createElement('p');
  pokeName.innerText=pokemonObject.name;
  pokehealth.innerText="hit points:"+pokemonObject.health;
pokemontext.appendChild(pokeName);
pokemontext.appendChild(pokehealth);
newCharacterSheet.appendChild(pokemontext);

let desc=document.createElement('p');
desc.className="description";
desc.innerText=pokemonObject.descriptionText;
newCharacterSheet.appendChild(desc);
 

 let pokemonIMG =document.createElement('div');
pokemonIMG.className="imageDiv";
let newIMG=document.createElement("img");
pokemonIMG.appendChild(newIMG);
newIMG.id="IMG"
document.getElementById('IMG').src=pokemonObject.imgPath;
newCharacterSheet.appendChild(pokemonIMG);
//problem with image again
return newCharacterSheet;
}


for(let i = 0; i < pokemonArray.length; i++) {//line 33 calls createCardDiv() creating a newCard div
    let newCard = createCardDiv(pokemonArray[i]);

   let containerDiv = document.querySelector('#containerDiv');
    containerDiv.appendChild(newCard);// appends the new card to the #containerDiv in the HTML
}

/*1)  creates a div same as the .characterSheet div in index.html 15-24
      2)  creates all the elements inside characterSheet div.
      3)  Use createElement() to create a div element. Set class of element to characterSheet.
      4)  Create another div after this rdiv. 
      5)  Append this div to the new characterSheet div you made using appendChild(). 
      6)  Set the class of the child div you just appended to topText".
      7)  create two p tag children of this topText div and set their content to the values of the .name and .HP keys of the pokemon objects you created. 
      8)  Repeat this process for all the other elements in the .characterSheet div in the index.html. 
      
      
      IMPORTANT:SET CLASSES FOR ALL ELEMENTS 
      AND MAKE SURE TO SET THE CORRECT ATTRIBUTES ELEMENTS 
      (make sure image has src set to value of.imgPath value in your pokemonObject). 
      Also, set the background color of your .characterSheet div to the .cardColor value 
      in your pokemonObject.
      

      to check your work, plugging in the mudkip object on 
      line 4 
      should result in another pokemon card that looks identical to the one created in the
      index.html file.
    */

// originly under the return
      /* Decided to actually create and return the newCharacter
   sheet for you and set its class and backgroundColor
   so you guys can get a bit of a hint on createElement
   and the className attribute
   
   */