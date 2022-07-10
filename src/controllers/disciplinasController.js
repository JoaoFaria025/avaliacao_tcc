import disciplinas from "../models/Disciplina.js"

class DisciplinaController{
    
    static listarDisciplinas = (req,res) =>{
        disciplinas.find((err,disciplinas)=>{
            res.status(200).json(disciplinas)
          })
    }

    static cadastrarDisciplinas = (req,res) => {
        let disciplina = new disciplinas(req.body);

        disciplina.save((err) => {
            if(err){
                res.status(500).send({message:`${err.message} - falaha ao cadastrar disciplina`})
            }else{
                res.status(201).send(disciplina.toJSON())
            }
        })
    }
}

export default DisciplinaController;
