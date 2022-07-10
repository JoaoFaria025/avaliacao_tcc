import disciplinas from "../models/Disciplina.js"

class DisciplinaController{
    static listarDisciplinas = (req,res) =>{
        disciplinas.find((err,disciplinas)=>{
            res.status(200).json(disciplinas)
          })
    }
}

export default DisciplinaController;
