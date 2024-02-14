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