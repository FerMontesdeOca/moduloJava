import basicCard from "./basicCard.js";
import next from "./paginas.js";

const getCharacters = async() =>{
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    const character = data.results;
    basicCard(character);
}
getCharacters();


