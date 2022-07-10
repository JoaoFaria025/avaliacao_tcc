import express from "express";
import DisciplinaController from "../controllers/disciplinasController.js";

const router = express.Router();

router
    .get("/disciplinas",DisciplinaController.listarDisciplinas)
    .post("/disciplinas", DisciplinaController.cadastrarDisciplinas)

export default router;