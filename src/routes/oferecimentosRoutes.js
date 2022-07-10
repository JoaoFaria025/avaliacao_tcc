import express from "express";
import OferecimentoController from "../controllers/oferecimentosController.js";

const router = express.Router();

router
    .get("/oferecimentos", OferecimentoController.listarOferecimentos)

export default router;