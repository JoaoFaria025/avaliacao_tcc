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
                res.status(201).send(forms.toJSON())
            }
        })
    }
}

export default formularioController;
