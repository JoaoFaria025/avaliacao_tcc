import mongoose from "mongoose";

const professorSchema = new mongoose.Schema(
    {
        codProf: {type:String, required: true},
        nome: {type:String, required: true}
    }
);

const professores = mongoose.model('professores',professorSchema);

export default professores;

