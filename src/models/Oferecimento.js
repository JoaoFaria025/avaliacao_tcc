import mongoose from "mongoose";
/* OFERECIMENTOS se refere a TURMA */ 
const oferecimentoSchema = new mongoose.Schema(
    {
        codTurma: {type:String, required: true, unique:true},
        codDisc: {type:String},
        codProf: {type:String},
        codProf_dois: {type:String},
        matriculas: {type:Number, required: true},
        semestre: {type:Number, required: true},
        inicio: {type:String, required: true},
        fim: {type:String, required: true},
        ano: {type:Number, required: true},
    }
);

const oferecimentos = mongoose.model('turmas',oferecimentoSchema);

export default oferecimentos;

