import oferecimentos from "../models/Oferecimento.js"

class OferecimentoController{
    
    static listarOferecimentos = (req,res) =>{
        oferecimentos.find((err,oferecimentos)=>{
            res.status(200).json(oferecimentos)
          })
    }
}

export default OferecimentoController;
