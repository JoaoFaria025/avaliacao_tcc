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
        const id = req.params.id;
        var name = id;
        disciplinas.findOne({codDisc:{
            $regex: new RegExp(name, "ig")
        }})
          .exec((err, disciplinas) => {
          if(err) {
            res.status(400).send({message: `${err.message} - Id do livro não localizado.`})
          } else {
            res.status(200).send(disciplinas);
          }
        })  
    }
}

export default DisciplinaController;
