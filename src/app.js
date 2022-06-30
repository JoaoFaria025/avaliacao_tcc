import express from "express";

const app = express();

app.use(express.json());

const disciplinas = [
    {"codigo":"c2c1","sigla":"EB102","nome":"Geometria Analítica e Algebra Linear","turma":"A","professor":"Victor Colucci",matriculas:52},
    {"codigo":"c2c2","sigla":"EB102","nome":"Geometria Analítica e Algebra Linear","turma":"B","professor":"Victor Colucci",matriculas:45},
]

app.get('/',(req,res)=>{
    res.status(200).send('Link dispóneis (/disciplinas) e (/forms)');
})
app.get('/disciplinas',(req,res)=>{
    res.status(200).json(disciplinas);
})

app.get('/disciplinas/:codigo', (req,res)=>{
   let index = buscaDisciplina(req.params.codigo);
   res.json(disciplinas);
//    res.status(200).send("Esse código possuí na base, usuário LIBERADO!")
})

app.post('/disciplinas', (req,res)=>{
    disciplinas.push(req.body);
    res.status(201).send("Disciplina cadastrada com sucesso!")
})


// app.put('/disciplinas/:codigo', (req,res)=>{
//     let index = buscaDisciplina(req.params.id);
//     disciplinas[index].sigla = req.body.sigla;
//     res.json(disciplinas);
// })

// app.delete('/disciplinas/:codigo', (req,res)=>{
//     let {codigo} = req.params
//     let index = buscaDisciplina(codigo);
//     disciplinas.splice(index,1);
//     res.send(`Disciplina de código: ${codigo} removida com sucesso!`)
// })

function buscaDisciplina(codigo){
    return disciplinas.findIndex(disciplinas => disciplinas.codigo == codigo)
}

export default app;