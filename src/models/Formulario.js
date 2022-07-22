import mongoose from "mongoose";

const formularioSchema = new mongoose.Schema(
    {
        cod: {type:String, required: true},
        dataIni: {type:String, required: true},
        dataFim: {type:String, required: true},
        questoes: [{
            numero_pergunta:{type:String},
            resposta:{type:String},
        }]
    }
);

const formulario = mongoose.model('formulario',formularioSchema);

export default formulario;

