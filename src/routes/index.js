import express from "express";
import disciplinas from "./disciplinasRoutes.js";
import professores from "./professoresRoutes.js";
import formulario from "./formularioRoutes.js";

const routes = (app) => {
    app.route('/').get((req,res) =>{
        res.status(200).send({titulo:"Paginas disponieveis (disciplinas,professores,oferecimentos,formulario)"})
    })

    app.use(
        express.json(),
        disciplinas,
        professores,
        formulario
    )
}

export default routes;