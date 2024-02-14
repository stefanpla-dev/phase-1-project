const pokemonCount = 151;
// can change the number above to load different number of Pokemon into the Pokedex. If time permits, maybe develop an event listener that allows the user of the application to do so. 

const pokedex = {}; // using Bulbasaur as an example: {"name" : "bulbasaur", "img" : url, "type" : ["grass","poison"], "desc" : "....."} }

function getPokemon(num) {
    let url = "https://pokeapi.co/api/v2/pokemon/" + num.toString();
    
    return fetch (url)
    .then(response => response.json())
    // .then(pokemon => console.log(pokemon))
    .then (pokemon => {
        let pokemonName = pokemon.name;
        let pokemonImg = pokemon.sprites.front_default;
        let pokemonBackImg = pokemon.sprites.back_default; 
        let pokemonType = pokemon.types.map(type => type.type.name);
        let pokemonId = pokemon.id;
        let speciesUrl = pokemon.species.url;
        
        return fetch(speciesUrl) // description of each Pokemon is obtained from a different API endpoint than the rest of the Pokemon data. 
        .then(response => response.json())
        .then(species => {
            // console.log(species);
            let englishDescription = species.flavor_text_entries.find(entry => entry.language.name === "en");
            let pokemonDescription = englishDescription.flavor_text;
            // console.log(pokemonDescription);
            pokedex[num] = { // store fetched data in the pokedex object originally defined above
              "name" : pokemonName, 
              "img" : pokemonImg, 
              "backImg" : pokemonBackImg,
              "types" : pokemonType, 
              "desc" : pokemonDescription, 
              "id" : pokemonId
            }
            // console.log(pokedex[num]);
          });
        });
};

window.onload = function() { 
    // the code inside this function runs only after all the HTML, CSS, and JavaScript resources have been fully loaded. It ensures that all of the external resources, like images, are fully loaded before code executes. Since this code dynamically creates elements and sets their properties based on fetched data, we need to wait for all resources to be available to ensure everything renders correctly. Will slow down initial load time as pokemonCount gets bigger.
    const promises = []; 

    for (let i = 1;i<=pokemonCount;i++) {
        promises.push(getPokemon(i));
    } // resulting promise from getPokemon() is pushed into this array.
    // console.log(pokedex);
    Promise.all(promises).then(() => { // waits for all promises to resolve and then executes this callback function and each pokemon is rendered by creating a div for each pokemon and adding event listeners etc. This ensures that the pokemon list is not rendered until all data is available.
        // console.log(pokedex);
        for (let i=1;i<=pokemonCount;i++) {
            let pokemon = document.createElement("div");
            pokemon.id = pokedex[i].id
            pokemon.innerText = i.toString() + ". " + pokedex[i]["name"].toUpperCase();
            pokemon.classList.add("pokemon-name");
            pokemon.addEventListener("click", updatePokemon);
            document.getElementById("pokemon-list").append(pokemon);

        };
            let imageElement = document.getElementById("pokemon-img");
            imageElement.addEventListener("mouseover", updateImage)
            document.getElementById("pokemon-description").innerText = pokedex[1]["desc"];
            imageElement.src = pokedex[1]["img"]; 
            
        });
};

function updatePokemon(e) {
    // console.log(pokedex[this.id]);
    const previousSelected = document.querySelector('.selected');
    if (previousSelected) {
        previousSelected.classList.remove('selected');
    } e.target.classList.add('selected'); // this is what highlights the selected pokemon as blue in the pokedex.

    document.getElementById("pokemon-img").src = pokedex[e.target.id]["img"];
    
    //clear previous type
    let typesDiv = document.getElementById("pokemon-types");
       while (typesDiv.firstChild) {
        typesDiv.firstChild.remove();
    };
    //update type
    let types = pokedex[e.target.id]["types"];
    // console.log(types);
    for (let i = 0;i< types.length; i++) {
        // console.log(types[i]);
        let type = document.createElement("span");
        type.innerText = types[i].toUpperCase();
        type.classList.add("type-box");
        type.classList.add(types[i]);
        typesDiv.append(type);
    };
    //update description
    document.getElementById("pokemon-description").innerText = pokedex[e.target.id]["desc"];
}