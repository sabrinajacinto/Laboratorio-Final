import conexao from '../config/conexao.js';

const Especialidade = conexao.Schema({
    especialidade: {
        type: String,
        required: true
    },

    nomedomedico: {
        type: String,
        required: true
    }
});

export default conexao.model('Especialidade', Especialidade);