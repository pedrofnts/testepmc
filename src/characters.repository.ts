import { Character } from "./characters.interface";
import axios from "axios";

export class CharacterRepository {
  constructor() {}

  async findAll() {
    const characters = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );
    return characters.data;
  }

  async findALlCharacters() {
    const characters = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );
    const pages = characters.data.info.pages;
    const allCharacters = characters.data.results;
    for (let i = 2; i <= pages; i++) {
      const nextCharacters = await axios.get(
        `https://rickandmortyapi.com/api/character?page=${i}`
      );
      allCharacters.push(...nextCharacters.data.results);
    }
    return allCharacters.map((character: Character) => character.name);
  }
}
