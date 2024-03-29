import express from "express";
import DisciplinaController from "../controllers/disciplinasController.js";

const router = express.Router();

router
    .get("/disciplinas",DisciplinaController.listarDisciplinas)
    .get("/disciplinas/:codDisc",DisciplinaController.getUserId)
    .post("/disciplinas", DisciplinaController.cadastrarDisciplinas)
    .delete("/disciplinas/:codDisc", DisciplinaController.excluirDisciplinas)

export default router;