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
                res.status(500).send({message:`${err.message} - falha ao cadastrar disciplina`})
            }else{
                res.status(201).send(disciplina.toJSON())
            }
        })
    }
// FINALIZAR
    static consultarDisciplinaExistente = (req,res) => {
        const codDisc = req.params.codDisc;

        disciplinas.findById(codDisc, (err, disciplinas) =>{
            if(err){
                res.status(400).send({message:`${err.message} - Disciplina não existente na base`})
            }
            if(codDisc){
                res.status(200).json(disciplinas).send({message:"Disciplina existe no bd"})
            }
        })
        
    }
}

export default DisciplinaController;
