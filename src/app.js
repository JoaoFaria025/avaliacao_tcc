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
  next();
});

routes(app);

  export default app;