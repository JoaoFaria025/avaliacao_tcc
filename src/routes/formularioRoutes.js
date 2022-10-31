import express from "express";
import FormularioController from "../controllers/formularioController.js";

const router = express.Router();

router
    .get("/formulario", FormularioController.listarRespostasForms)
    .get("/formulario/:codDisc",FormularioController.getUserId)
    .post("/formulario",FormularioController.cadastrarRespostasForms)

export default router;