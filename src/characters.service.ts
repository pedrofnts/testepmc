import { CharacterRepository } from "./characters.repository";

export class CharacterService {
  constructor(private readonly repository: CharacterRepository) {}

  async findAll() {
    const characters = await this.repository.findAll();
    return characters;
  }
  async findALlCharacters() {
    const characters = await this.repository.findALlCharacters();
    return characters;
  }
}
