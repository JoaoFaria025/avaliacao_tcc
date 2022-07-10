import professores from "../models/Professor.js"

class ProfessorController{
    static listarProfessores = (req,res) =>{
        professores.find((err,professores)=>{
            res.status(200).json(professores)
          })
    }

    static cadastrarProfessores = (req,res) => {
        let professor = new professores(req.body);

        professor.save((err) => {
            if(err){
                res.status(500).send({message:`${err.message} - falaha ao cadastrar professor`})
            }else{
                res.status(201).send(professor.toJSON())
            }
        })
    }
}

export default ProfessorController;
