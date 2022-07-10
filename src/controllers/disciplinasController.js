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
// FINALIZAR
    static consultarDisciplinaExistente = (req,res) => {
        const codigo = disciplinas.where({codDisc:codigo});

        disciplinas.findOne(codigo, (err, disciplinas) =>{
            if(err){
                res.status(400).send({message:`${err.message} - Disciplina não existente na base`})
            }
            if(codigo){
                res.status(200).json(disciplinas)
            }
        })
        
    }
}

export default DisciplinaController;
