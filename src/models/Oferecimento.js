import mongoose from "mongoose";

const oferecimentoSchema = new mongoose.Schema(
    {
        id: {type:String},
        codDisc: {type:mongoose.Schema.Types.ObjectId, ref: 'disciplinas', required: true},
        codProf: {type:mongoose.Schema.Types.ObjectId, ref: 'professores', required: true},
        Turma: {type:String, required: true},
        Matriculas: {type:String, required: true},
        Semestre: {type:Number, required: true},
        Ano: {type:Number, required: true},
    }
);

const oferecimentos = mongoose.model('oferecimentos',oferecimentoSchema);

export default oferecimentos;

