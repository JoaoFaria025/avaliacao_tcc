import express from "express";
import db from "./config/dbConnect.js"
import disciplinas from "./models/Disciplina.js"
import professores from "./models/Professor.js"
import routes from "./routes/index.js"
import cors from "cors"

db.on("error", console.log.bind(console, "Erro de conexao"))
db.once("open", () =>{
  console.log("conexão feita com sucesso");
})

const app = express();
app.use(express.json())

app.use((req, res, next) => {
  app.use(cors());
        console.log('entrou no middleware');
        res.setHeader('Access-Control-Allow-Origin', '*');
    
        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    
        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

routes(app);

  export default app;