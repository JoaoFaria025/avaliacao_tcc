import oferecimentos from "../models/Oferecimento.js"

class OferecimentoController{
    
    static listarOferecimentos = (req,res) =>{
        oferecimentos.find((err,oferecimentos)=>{
            res.status(200).json(oferecimentos)
          })
    }
    static cadastrarOferecimentos = (req,res) => {
        let oferecimento = new oferecimentos(req.body);

        oferecimento.save((err) => {
            if(err){
                res.status(500).send({message:`${err.message} - falha ao cadastrar turma`})
            }else{
                res.status(201).send(oferecimento.toJSON())
            }
        })
    }
    static getCodTurma = async (req, res, next) => {
        const userTurma = req.params.codTurma;
        console.log(userTurma)
        let valuesUser;
        
        try {
          valuesUser = await oferecimentos.findOne({ codTurma: userTurma });
        } catch (err) {
            return (res.status(500).send({message:` Não existe no BD`}))
        }
      
        if (!valuesUser || valuesUser.length === 0) {
            return (res.status(500).send({message:` Não existe no bd`}))
        }
        res.json(valuesUser);

      };
}

export default OferecimentoController;
