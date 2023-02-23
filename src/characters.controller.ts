import { Request, Response } from "express";

import { CharacterService } from "./characters.service";

export class CharacterController {
  constructor(private readonly service: CharacterService) {}

  async findAll(req: Request, res: Response) {
    try {
      const characters = await this.service.findAll();
      res.json(characters);
      return;
    } catch (error) {
      console.log(error);
      res.status(500).json();
      return;
    }
  }
  async findALlCharacters(req: Request, res: Response) {
    try {
      const characters = await this.service.findALlCharacters();
      res.json(characters);
      return;
    } catch (error) {
      console.log(error);
      res.status(500).json();
      return;
    }
  }
}
