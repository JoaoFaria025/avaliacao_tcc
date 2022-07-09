import mongoose from "mongoose";

const disciplinaSchema = new mongoose.Schema(
    {
        codDisc: {type:String, required: true},
        nome: {type:String, required: true}
    }
);

const disciplinas = mongoose.model('disciplinas',disciplinaSchema);

export default disciplinas;

