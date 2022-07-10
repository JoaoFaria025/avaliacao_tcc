import express from "express";
import disciplinas from "./disciplinasRoutes.js";
import professores from "./professoresRoutes.js";

const routes = (app) => {
    app.route('/').get((req,res) =>{
        res.status(200).send({titulo:"Paginas disponieveis (disciplinas,professores,oferecimentos,formulario)"})
    })

    app.use(
        express.json(),
        disciplinas,
        professores
    )
}

export default routes;