import express from "express";
import ProfessorController from "../controllers/professoresController.js";

const router = express.Router();

router
    .get("/professores",ProfessorController.listarProfessores)
    .post("/professores", ProfessorController.cadastrarProfessores)
export default router;