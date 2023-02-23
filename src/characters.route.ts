import { CharacterRepository } from "./characters.repository";
import { CharacterService } from "./characters.service";
import express from "express";
import { CharacterController } from "./characters.controller";

const characterRoute = express.Router();

characterRoute.get("/characters", (req, res) => {
  const repository = new CharacterRepository();
  const service = new CharacterService(repository);
  const controller = new CharacterController(service);
  controller.findAll(req, res);
});
characterRoute.get("/all-characters", (req, res) => {
  const repository = new CharacterRepository();
  const service = new CharacterService(repository);
  const controller = new CharacterController(service);
  controller.findALlCharacters(req, res);
});

export default characterRoute;
