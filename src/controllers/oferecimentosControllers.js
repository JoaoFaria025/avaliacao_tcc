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
}

export default OferecimentoController;
