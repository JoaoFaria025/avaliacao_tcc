import express from "express";
import db from "./config/dbConnect.js"
import disciplinas from "./models/Disciplina.js"
import professores from "./models/Professor.js"
import routes from "./routes/index.js"


db.on("error", console.log.bind(console, "Erro de conexao"))
db.once("open", () =>{
  console.log("conexão feita com sucesso");
})

const app = express();
app.use(express.json())
routes(app);


  app.get('/', (req, res) => {
    res.status(200).send('Paginas disponieveis (disciplinas,professores,oferecimentos,formulario)');
  }) 
  
  app.post("/professores", (req,res) =>{
    professores.push(req.body);
    res.status(200).send("Professor foi adicionada com sucesso");
  })

  export default app;