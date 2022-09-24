import express from "express";
import disciplinas from "./disciplinasRoutes.js";
import professores from "./professoresRoutes.js";
import formulario from "./formularioRoutes.js";
import oferecimento from "./oferecimentosRoutes.js";

const routes = (app) => {
    app.route('/').get((req,res) =>{
        res.status(200).send({titulo:"Paginas disponieveis (disciplinas,professores,formulario)"})
    })

  

    app.use(
        express.json(),
        disciplinas,
        professores,
        formulario,
        oferecimento
    )
}

export default routes;