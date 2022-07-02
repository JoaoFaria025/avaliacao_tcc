import express from "express";
import db from "./config/dbConnect.js";
import disciplinas from "./models/Disciplina.js"
import professores from "./models/Professor.js"

db.on("error", console.log.bind(console,'Erro de conexão'))
db.once("open",() => {
    console.log('conexão feita com sucesso')
})

const app = express();
app.use(express.json());




/* GET */
app.get('/',(req,res)=>{
    res.status(200).send('Link dispóneis (/disciplina) e (/forms)');
})
app.get('/disciplinas',(req,res)=>{
    disciplinas.find((err,disciplinas) =>{
        res.status(200).json(disciplinas);
    })   
})
app.get('/professor',(req,res)=>{
    professores.find((err,professores) =>{
        res.status(200).json(professores);
    })
})

/* POST */
app.post('/disciplinas', (req,res)=>{
    disciplinas.push(req.body);
    res.status(201).send("Disciplina cadastrada com sucesso!")
})
app.post('/professor', (req,res)=>{
    professores.push(req.body);
    res.status(201).send("Professor cadastrada com sucesso!")
})



export default app;














// app.get('/disciplina/:codigo', (req,res)=>{
    //    let index = buscaDisciplina(req.params.codigo);
    //    res.json(disciplina);
    // //    res.status(200).send("Esse código possuí na base, usuário LIBERADO!")
    // })

// app.put('/disciplina/:codigo', (req,res)=>{
//     let index = buscaDisciplina(req.params.id);
//     disciplina[index].sigla = req.body.sigla;
//     res.json(disciplina);
// })

// app.delete('/disciplina/:codigo', (req,res)=>{
//     let {codigo} = req.params
//     let index = buscaDisciplina(codigo);
//     disciplina.splice(index,1);
//     res.send(`Disciplina de código: ${codigo} removida com sucesso!`)
// })
// function buscaDisciplina(codigo){
    //     return disciplina.findIndex(disciplina => disciplina.codigo == codigo)
    // }