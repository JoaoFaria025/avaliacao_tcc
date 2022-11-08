import formulario from "../models/Formulario.js"

class formularioController{
    
    static listarRespostasForms = (req,res) =>{
        formulario.find((err,formulario)=>{
            res.status(200).json(formulario)
          })
    }
    static cadastrarRespostasForms = (req,res) => {
        let forms = new formulario(req.body);

        forms.save((err) => {
            if(err){
                res.status(500).send({message:`${err.message} - falha ao cadastrar respostas dos forms`})
            }else{
                res.status(200).send(forms.toJSON())
            }
        })
    }
    static getUserId = async (req, res, next) => {
        const userID = req.params.codTurma;
        console.log(userID)
        let valuesUser;
        
        try {
          valuesUser = await formulario.findOne({ codTurma: userID });
        } catch (err) {
            return (res.status(500).send({message:` Não existe no BD`}));
        }
      
        if (!valuesUser || valuesUser.length === 0) {
            return (res.status(500).send({message:` Não existe no bd`}));
            
        }
        res.json(valuesUser);
      };
}

export default formularioController;
