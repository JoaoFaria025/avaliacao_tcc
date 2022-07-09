import express from "express";
import db from "./config/dbConnect.js"
import disciplinas from "./models/Disciplina.js"


db.on("error", console.log.bind(console, "Erro de conexao"))
db.once("open", () =>{
  console.log("conexão feita com sucesso");
})

const app = express();
app.use(express.json())

const professores = [
    {codProf:1, "nome":"Ulisses Martins Dias"},
    {codProf:2, "nome":"Ana Estela"},
]

  app.get('/', (req, res) => {
    res.status(200).send('Paginas disponieveis (disciplinas,professores,oferecimentos,formulario)');
  }) 
  
  app.get('/disciplinas', (req, res) => {
    disciplinas.find((err,disciplinas)=>{
      res.status(200).json(disciplinas)
    })
  })

  app.post("/disciplinas", (req,res) =>{
    disciplinas.push(req.body);
    res.status(200).send("Disciplina foi adicionada com sucesso");
  })

  app.get('/professores', (req, res) => {
    res.status(200).json(professores)
  })

  app.post("/professores", (req,res) =>{
    professores.push(req.body);
    res.status(200).send("Professor foi adicionada com sucesso");
  })

  export default app;