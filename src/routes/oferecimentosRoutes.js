import express from "express";
import OferecimentoController from "../controllers/oferecimentosControllers.js";

const router = express.Router();

router
    .get("/turmas", OferecimentoController.listarOferecimentos)
    .get("/turmas/:codTurma",OferecimentoController.getCodTurma)
    .post("/turmas", OferecimentoController.cadastrarOferecimentos)


export default router;