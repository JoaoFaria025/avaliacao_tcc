import express from "express";
import disciplinas from "./disciplinasRoutes.js";
import professores from "./professoresRoutes.js";
import formulario from "./formularioRoutes.js";
import oferecimento from "./oferecimentosRoutes.js";


const routes = (app) => {
    app.route('/').get((req,res, next) =>{
        res.status(200).send({titulo:"Paginas disponiveis (disciplinas,professores,formulario,turmas)"})
        // res.setHeader('Access-Control-Allow-Origin', '*');
        // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
        // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
        // res.setHeader('Access-Control-Allow-Credentials', true); // If need
        // res.send('cors problem fixed:)');
    })
    // app.use(function (req, res, next) {

    //     // Website you wish to allow to connect
    //     res.setHeader('Access-Control-Allow-Origin', '*');
    
    //     // Request methods you wish to allow
    //     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    
    //     // Request headers you wish to allow
    //     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
    //     // Set to true if you need the website to include cookies in the requests sent
    //     // to the API (e.g. in case you use sessions)
    //     res.setHeader('Access-Control-Allow-Credentials', true);
    
    //     // Pass to next layer of middleware
    //     next();
    // });
  

    app.use(
        express.json(),
        disciplinas,
        professores,
        formulario,
        oferecimento
    )
}

export default routes;