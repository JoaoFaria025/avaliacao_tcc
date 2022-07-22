import express from "express";
import FormularioController from "../controllers/formularioController.js";

const router = express.Router();

router
    .get("/formulario", FormularioController.listarRespostasForms)
    .post("/formulario",FormularioController.cadastrarRespostasForms)

export default router;