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
    
    static getUserId = async (req, res, next) => {
        const userID = req.params.codDisc;
        console.log(userID)
        let valuesUser;
        //GET MONGO DB:
        try {
          valuesUser = await disciplinas.findOne({ codDisc: userID });
        } catch (err) {
            return next(res.status(500).send({message:` Não existe no BD`}))
        }
      
        if (!valuesUser || valuesUser.length === 0) {
            res.status(500).send({message:` Não existe no BD`})
        }
        res.json(valuesUser);
      };

}

export default DisciplinaController;
