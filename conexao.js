import mongoose from "mongoose";

const url = "mongodb://aluno:123@ac-qhbalsa-shard-00-00.cib9h6d.mongodb.net:27017,ac-qhbalsa-shard-00-01.cib9h6d.mongodb.net:27017,ac-qhbalsa-shard-00-02.cib9h6d.mongodb.net:27017/?ssl=true&replicaSet=atlas-bwrw8q-shard-0&authSource=admin&appName=Cluster0";

const conexao = await mongoose.connect(url);

export default conexao;