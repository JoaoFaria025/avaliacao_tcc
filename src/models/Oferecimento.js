import mongoose from "mongoose";

const oferecimentoSchema = new mongoose.Schema(
    {
        codTurma: {type:String, required: true, unique:true},
        codDisc: {type:String},
        codProf: {type:String},
        matriculas: {type:Number, required: true},
        semestre: {type:Number, required: true},
        inicio: {type:String, required: true, unique:true},
        fim: {type:String, required: true, unique:true},
        ano: {type:Number, required: true},
    }
);

const oferecimentos = mongoose.model('oferecimentos',oferecimentoSchema);

export default oferecimentos;

