import professores from "../models/Professor.js"

class ProfessorController{
    static listarProfessores = (req,res) =>{
        professores.find((err,professores)=>{
            res.status(200).json(professores)
          })
    }
}

export default ProfessorController;
