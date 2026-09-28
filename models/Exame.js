import mongoose from 'mongoose'

const ExameSchema = new mongoose.Schema({

    data: Date,

    tipoexame: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TipoExame'
    },

    localexame: String,

    usuario: String,

    especialista: String,

    laudo: String,

    arquivo: Buffer,

})

export default mongoose.model('Exame', ExameSchema)