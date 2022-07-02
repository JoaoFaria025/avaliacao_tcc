import mongoose from "mongoose";

mongoose.connect("mongodb+srv://teste:123@cluster0.eczildu.mongodb.net/avaliacao_prof_tcc")

let db = mongoose.connection;

export default db;