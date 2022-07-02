import express  from "express";
import professores from "../models/Professor.js";

const routes = (app) => {
    app.route('/').get((req,res)=>{
        res.status(200).send({titulo:"Link dispóneis (/disciplina), (/professor) e (/forms)"})
    })

    app.use(
        express.json(),
        professores
    )
}

export default routes;